import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SIZES, images } from "../../constants";
import { MotiImage, useDynamicAnimation } from "moti";

const Walkthrough4 = ({ animate4 }) => {
  const motiImage2 = useDynamicAnimation(() => ({
    top: "30%",
    left: "25%",
  }));
  const motiImage3 = useDynamicAnimation(() => ({
    top: "50%",
    left: "25%",
  }));
  const motiImage4 = useDynamicAnimation(() => ({
    top: "50%",
    left: "45%",
  }));
  const motiImage5 = useDynamicAnimation(() => ({
    top: "30%",
    left: "45%",
  }));

  useEffect(() => {
    if (animate4) {
      motiImage2.animateTo({
        top: "20%",
        left: "15%",
      });
      motiImage3.animateTo({
        top: "60%",
        left: "15%",
      });
      motiImage4.animateTo({
        top: "60%",
        left: "55%",
      });
      motiImage5.animateTo({
        top: "20%",
        left: "55%",
      });
    }

  }, [animate4]);

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <MotiImage
        state={motiImage2}
        source={images.walkthrough_01_01}
        style={styles.image}
      />
      <MotiImage
        state={motiImage3}
        source={images.walkthrough_01_02}
        style={styles.image}
      />
      <MotiImage
        state={motiImage4}
        source={images.walkthrough_01_03}
        style={styles.image}
      />
      <MotiImage
        state={motiImage5}
        source={images.walkthrough_01_04}
        style={styles.image}
      />
    </View>
  );
};

export default Walkthrough4;

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 102,
    height: 122,
    borderRadius: SIZES.radius,
    zIndex: 0,
  },
});
