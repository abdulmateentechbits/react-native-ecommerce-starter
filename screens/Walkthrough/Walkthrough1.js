import React, { useEffect, useRef, useState } from "react";
import { View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { SIZES, constants } from "../../constants";

const ITEM_WIDTH = 120;

const Walkthrough1 = () => {
  // Row1
  const [rowImages, setRowImages] = useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  //   Row2

  const [row2Images, setRow2Images] = useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
  ]);
  const [row2CurrentPosition, setRow2CurrentPosition] = useState(0);

  //   Ref variable for two flatlist
  const row1FlatlistRef = useRef();
  const row2FlatlistRef = useRef();
  useEffect(() => {
    let positionTimer;
    const timer = () => {
      positionTimer = setTimeout(() => {
        // Increment scroll position with each new interval
        // Slider 1
        setCurrentPosition((prevPosition) => {
          const newPosition = Number(prevPosition) + 1;
          row1FlatlistRef?.current?.scrollToOffset({
            offset: newPosition,
            animated: false,
          });
          const maxOffset =
            constants.walkthrough_01_01_images.length * ITEM_WIDTH;
          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;
            row1FlatlistRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return newPosition;
          }
        });
        // Slider 2
        setRow2CurrentPosition((prevPosition) => {
          const position = Number(prevPosition) + 1;
          row2FlatlistRef?.current?.scrollToOffset({
            offset: position,
            animated: false,
          });
          const maxOffset =
            constants.walkthrough_01_02_images.length * ITEM_WIDTH;
          if (prevPosition > maxOffset) {
            const offset = prevPosition - maxOffset;
            row2FlatlistRef?.current?.scrollToOffset({
              offset,
              animated: false,
            });
            return offset;
          } else {
            return position;
          }
        });
        timer();
      }, 0.577);
    };
    timer();

    return () => {
      clearTimeout(positionTimer);
    };
  }, []);

  return (
    <View>
      {/* Row 1 */}
      <FlatList
        ref={row1FlatlistRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        listKey="Slider1"
        keyExtractor={(_, index) => `Slider1_${index}`}
        data={rowImages}
        scrollEnabled={false}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={item} style={{ width: 110, height: 110 }} />
            </View>
          );
        }}
      />
      {/* Slider2 */}
      <FlatList
        ref={row2FlatlistRef}
        data={row2Images}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        style={{
          marginTop: SIZES.padding,
          transform: [{ rotate: "180deg" }],
        }}
        scrollEnabled={false}
        listKey="Slider2"
        keyExtractor={(_, index) => `Slider2-${index}`}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: ITEM_WIDTH,
                alignItems: "center",
                justifyContent: "center",
                transform: [{ rotate: "180deg" }],
              }}
            >
              <Image source={item} style={{ width: 110, height: 110 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Walkthrough1;
