import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="SIGN IN"
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
