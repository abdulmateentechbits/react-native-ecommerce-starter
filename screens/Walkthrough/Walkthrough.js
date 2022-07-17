import React, { useRef } from "react";
import { View, Text, Animated } from "react-native";
import { TextButton } from "../../components";
import { COLORS, SIZES, FONTS, constants } from "../../constants";
import Walkthrough1 from "./Walkthrough1";

const Walkthrough = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const dotPositions = Animated.divide(scrollX, SIZES.width);

  const Dots = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotPositions.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={`key-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 6,
                height: 10,
                width: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };
  function renderFooter() {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: SIZES.height * 0.2,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.height > 700 ? SIZES.padding : 20,
        }}
      >
        <Dots />
        {/* Buttons */}
        <View style={{ flexDirection: "row", height: 55 }}>
          <TextButton
            label="JOIN NOW"
            contentContainerStyle={{
              flex: 1,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.dark08,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
          />
          <TextButton
            label="Log In"
            contentContainerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              ...FONTS.h3,
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: COLORS.light,
        flex: 1,
      }}
    >
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={58}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: SIZES.width,
                justifyContent: "center",
              }}
            >
              {/* Walkthrough images */}
              <View style={{ flex: 1, justifyContent: "center" }}>
                {index == 0 && <Walkthrough1 />}
              </View>
              {/* Title and description */}
              <View
                style={{
                  height: SIZES.height * 0.35,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingHorizontal: SIZES.padding,
                }}
              >
                <Text style={{ ...FONTS.h1, color: COLORS.dark }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    marginTop: SIZES.radius,
                    textAlign: "center",
                    color: COLORS.grey,
                  }}
                >
                  {item.sub_title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {renderFooter()}
    </View>
  );
};

export default Walkthrough;
