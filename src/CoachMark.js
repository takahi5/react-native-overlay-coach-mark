import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Svg, { Rect, ClipPath, Defs, Circle } from "react-native-svg";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const CoachMark = ({
  shape = "circle",
  x = 0,
  y = 0,
  backgroundColor = "#000",
  opacity = 0.7,
  width = 100,
  height = 100,
  borderRadius = 10,
  radius = 100,
}) => {
  return (
    <View style={styles.container}>
      <Svg
        width={windowWidth}
        height={windowHeight}
        viewBox={`0 0 ${windowWidth} ${windowHeight}`}
      >
        <Defs>
          <ClipPath id="clip">
            {shape === "circle" ? (
              <Circle cx={x} cy={y} r={radius} />
            ) : shape === "rect" ? (
              <Rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={borderRadius}
                ry={borderRadius}
              />
            ) : null}
            <Rect x={0} y={0} width={windowWidth} height={windowHeight} />
          </ClipPath>
        </Defs>
        <Rect
          x={0}
          y={0}
          width={windowWidth}
          height={windowHeight}
          fill={backgroundColor}
          clipPath="url(#clip)"
          opacity={opacity}
        >
          <ClipPath />
        </Rect>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
