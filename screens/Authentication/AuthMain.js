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

const AuthMain = () => {
  const [mode, setMode] = useState('signin');

  function renderSignIn(){

    
  }
  function renderSignUp(){
    
    
  }

  function renderContainer() {
    if (mode === "signIn") {
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

const styles = StyleSheet.create({});
