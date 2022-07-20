import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { TextButtons } from "../../components";
import { icons, images, FONTS, SIZES, COLORS } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MotiView, useAnimationState } from "moti";
import { Shadow } from "react-native-shadow-2";

const AuthMain = () => {
  const [mode, setMode] = useState("signIn");

  // Animation State
  const animationState = useAnimationState({
    signIn: {
      height: SIZES.height * 0.5,
    },
    signUp: {
      height: SIZES.height * 0.7,
    },
  });

  function renderSignIn() {
    return (
      <MotiView
        state={animationState}
        style={{
          marginTop: SIZES.padding,
          height: SIZES.height * 0.55,
        }}
      >
        <Shadow>
          <View style={styles.authContainer}>
            <Text>Login</Text>
          </View>
        </Shadow>
      </MotiView>
    );
  }
  function renderSignUp() {}

  function renderContainer() {
    if (mode == "signIn") {
      return renderSignIn();
    } else {
      return renderSignUp();
    }
  }
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGrey,
        flex: 1,
        paddingHorizontal: SIZES.padding,
      }}
    >
      {/* Logo */}
      <Text>AuthMain</Text>
      <Image
        source={images.logo}
        style={{
          width: 50,
          height: 50,
          alignSelf: "center",
          marginTop: SIZES.padding * 2,
        }}
      />
      {/* Auth Container */}
      {renderContainer()}
    </View>
  );
};

export default AuthMain;

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    width: SIZES.width - SIZES.padding * 2,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,
  },
});
