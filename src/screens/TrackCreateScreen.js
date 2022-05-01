import React, { useEffect, useState, useContext, useCallback } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import Map from "../components/Map";
import TrackForm from "../components/TrackForm";
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
  const { state, addLocation } = useContext(LocationContext);
  // when recording is set true, there is a new rendering of screen hence new version of callback in memory
  // however, it also means startWatching() is ran recursively since useEffect is watching the callback
  // Solution is to use callback
  const callback = useCallback((location) =>
    addLocation(location, state.recording)
  );
  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
      <Map />
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
