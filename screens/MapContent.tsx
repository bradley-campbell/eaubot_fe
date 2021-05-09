import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import mapData from "../data/mapData";
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
      <MapView initialRegion={initialRegion} style={styles.map}>
        {mapData.map((marker) => {
          return (
            <Marker
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