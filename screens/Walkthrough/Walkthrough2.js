import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SIZES, images } from "../../constants";
import { MotiImage, useDynamicAnimation } from "moti";

const Walkthrough2 = ({ animate }) => {
  // Initial Image Positions
  const motiImage1 = useDynamicAnimation(() => ({
    top: "30%",
    left: "25%",
  }));
  const motiImage2 = useDynamicAnimation(() => ({
    top: "45%",
    left: "15%",
  }));
  const motiImage3 = useDynamicAnimation(() => ({
    top: "58%",
    left: "25%",
  }));
  const motiImage4 = useDynamicAnimation(() => ({
    top: "61%",
    left: "40%",
  }));
  const motiImage5 = useDynamicAnimation(() => ({
    top: "27%",
    left: "50%",
  }));

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <Image source={images.walkthrough_02_01}/>
    </View>
  );
};

export default Walkthrough2;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 86,
    height: 102,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});
