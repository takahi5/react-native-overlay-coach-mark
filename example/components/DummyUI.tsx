import React, { useEffect, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
import { CirclePosition } from "../models/circlePosition";
import { RectPosition } from "../models/rectPosition";

const AVATAR_RADIUS = 60;
const FLOATING_BUTTON_RADIUS = 30;
const EDIT_BUTTON_WIDTH = 100;
const EDIT_BUTTON_HEIGHT = 40;

type Props = {
  onLayoutComponents: (
    avatarPosition: CirclePosition,
    editButtonPosition: RectPosition,
    plusButtonPosition: CirclePosition
  ) => void;
};

export const DummyUI: React.FC<Props> = ({ onLayoutComponents }) => {
  const [avatarPosition, setAvatarPosition] = useState<CirclePosition>();
  const [editButtonPosition, setEditButtonPosition] = useState<RectPosition>();
  const [plusButtonPosition, setPlusButtonPosition] = useState<
    CirclePosition
  >();

  useEffect(() => {
    if (avatarPosition && editButtonPosition && plusButtonPosition) {
      onLayoutComponents(
        avatarPosition,
        editButtonPosition,
        plusButtonPosition
      );
    }
  }, [avatarPosition, editButtonPosition, plusButtonPosition]);

  const _onLayoutAvatar = (event: LayoutChangeEvent) => {
    setAvatarPosition({
      x: event.nativeEvent.layout.x + AVATAR_RADIUS,
      y: event.nativeEvent.layout.y + AVATAR_RADIUS,
      radius: AVATAR_RADIUS,
    });
  };

  const _onLayoutEditButton = (event: LayoutChangeEvent) => {
    setEditButtonPosition({
      x: event.nativeEvent.layout.x,
      y: event.nativeEvent.layout.y,
      width: EDIT_BUTTON_WIDTH,
      height: EDIT_BUTTON_HEIGHT,
    });
  };

  const _onLayoutPlusButton = (event: LayoutChangeEvent) => {
    setPlusButtonPosition({
      x: event.nativeEvent.layout.x + FLOATING_BUTTON_RADIUS,
      y: event.nativeEvent.layout.y + FLOATING_BUTTON_RADIUS,
      radius: AVATAR_RADIUS,
    });
  };

  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("../assets/avatar.jpg")}
          style={styles.avatar}
          onLayout={_onLayoutAvatar}
        />
        <Text style={styles.text} numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <View style={styles.editButton} onLayout={_onLayoutEditButton}>
          <Text style={styles.text}>EDIT</Text>
        </View>
      </View>
      <View style={styles.floatingButton} onLayout={_onLayoutPlusButton}>
        <Text style={styles.buttonText}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    padding: 32,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    width: AVATAR_RADIUS * 2,
    height: AVATAR_RADIUS * 2,
    borderRadius: AVATAR_RADIUS,
    marginTop: AVATAR_RADIUS,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
  editButton: {
    borderRadius: 8,
    borderColor: "#888",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: EDIT_BUTTON_WIDTH,
    height: EDIT_BUTTON_HEIGHT,
    alignSelf: "flex-end",
    marginVertical: 16,
  },
  floatingButton: {
    position: "absolute",
    right: 30,
    bottom: 50,
    width: FLOATING_BUTTON_RADIUS * 2,
    height: FLOATING_BUTTON_RADIUS * 2,
    borderRadius: FLOATING_BUTTON_RADIUS,
    backgroundColor: "#10ac84",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
});
