import React from "react";
import { StyleSheet, View, FlatList, Callout } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapData from "../data/mapData";
import fountainPinImg from "../assets/fountainPin.png";
import { mapStyles } from "../data/mapConfig";

// require("dotenv").config();

const initialRegion = {
  latitude: 45.5017,
  longitude: -73.5673,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

// console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const MapContent = () => {
  return (
    <View style={styles.mapWrapper}>
      <MapView
        initialRegion={initialRegion}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyles}
      >
        {mapData.map((marker) => {
          return (
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
        })}
      </MapView>
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
