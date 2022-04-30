import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});

export default TrackListScreen;
