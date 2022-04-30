import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  getCurrentPositionAsync,
  Accuracy,
} from "expo-location";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";

import "../_mockLocations";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
