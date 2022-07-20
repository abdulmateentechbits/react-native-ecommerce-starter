import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { SIZES, images } from "../../constants";
import { MotiImage, useDynamicAnimation } from "moti";

const Walkthrough2 = ({ animate }) => {
  console.log("animate: ", animate);
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

  useEffect(()=>{
    if(animate){
      motiImage1.animateTo({
        top:'10%',
        left:'35%',
      });
      motiImage2.animateTo({
        top:'40%',
        left:2,
      });
      motiImage3.animateTo({
        top:'75%',
        left:'15%',
      });
      motiImage4.animateTo({
        top:'75%',
        left:'65%',
      });
      motiImage5.animateTo({
        top:'25%',
        left:'72%',
      });
    }
  },[animate])

  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      <Image
        source={images.walkthrough_02_01}
        style={{
          ...styles.image,
          top: "35%",
          left: "35%",
          width: 106,
          height: 161,
          zIndex: 1,
        }}
      />

      <Image
        source={images.walkthrough_02_02}
        style={{
          ...styles.image,
          top: "50%",
          left: "50%",
        }}
      />
      <MotiImage
      state={motiImage1}
      source={images.walkthrough_02_03}
      style={styles.image}
      />
      <MotiImage
      state={motiImage2}
      source={images.walkthrough_02_04}
      style={styles.image}
      />
      <MotiImage
      state={motiImage3}
      source={images.walkthrough_01_05}
      style={styles.image}
      />
      <MotiImage
      state={motiImage4}
      source={images.walkthrough_02_06}
      style={styles.image}
      />
      <MotiImage
      state={motiImage5}
      source={images.walkthrough_01_07}
      style={styles.image}
      />
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
