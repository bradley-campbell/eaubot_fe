import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import fountainPinImg from "../assets/fountainPin.png";
import { mapStyles } from "../data/mapConfig";
import * as Location from "expo-location";

// require("dotenv").config();

const MapMarker = ({ marker }) => (
  <Marker
    image={fountainPinImg}
    key={marker._id}
    coordinate={{
      latitude: +marker.Latitude,
      longitude: +marker.Longitude,
    }}
    title={marker.Nom_parc_lieu}
    description={marker.Arrondissement}
  />
);

// console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const MapContent = () => {
  const [mapData, setMapData] = useState([]);
  const [location, setLocation] = useState(null);

  const initialRegion = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0221,
      }
    : {
        latitude: 45.526588,
        longitude: -73.569108,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0221,
      };

  const getMapData = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      setLocation({ latitude, longitude });

      const response = await fetch(
        `http://localhost:3333/nearby?lat=${latitude}&lng=${longitude}`
      );
      const parsedResults = await response.json();
      setMapData(parsedResults.data);
    } catch (err) {
      console.error(err);
    }
  };

  const renderMarker = (item) => <MapMarker marker={item} />;

  useEffect(() => {
    getMapData();
  }, []);

  return (
    <View style={styles.mapWrapper}>
      {location && (
        <MapView
          initialRegion={initialRegion}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyles}
        >
          {mapData &&
            mapData.map((marker) => {
              return renderMarker(marker);
            })}
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapContent;
