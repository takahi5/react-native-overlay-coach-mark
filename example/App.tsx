import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CoachMark from "react-native-overlay-coach-mark";
import { DummyUI } from "./components/DummyUI";
import { CirclePosition } from "./models/circlePosition";
import { RectPosition } from "./models/rectPosition";

const MARGIN = 20;

export default function App() {
  const [step, setStep] = useState<number>(0);
  const [avatarPosition, setAvatarPosition] = useState<CirclePosition>();
  const [editButtonPosition, setEditButtonPosition] = useState<RectPosition>();
  const [plusButtonPosition, setPlusButtonPosition] = useState<
    CirclePosition
  >();

  const text =
    step === 0
      ? "This is your avatar"
      : step === 1
      ? "You can edit profile"
      : step === 2
      ? "Let's create message!"
      : "";

  const _onLayoutComponents = (
    avatarPosition: CirclePosition,
    editButtonPosition: RectPosition,
    plusButtonPosition: CirclePosition
  ) => {
    setAvatarPosition(avatarPosition);
    setEditButtonPosition(editButtonPosition);
    setPlusButtonPosition(plusButtonPosition);
  };

  return (
    <>
      <DummyUI onLayoutComponents={_onLayoutComponents} />
      {/* Overlay Coach Mark */}
      {step === 0 && avatarPosition ? (
        <CoachMark
          x={avatarPosition.x}
          y={avatarPosition.y}
          shape="circle"
          radius={avatarPosition.radius + MARGIN}
        />
      ) : step === 1 && editButtonPosition ? (
        <CoachMark
          x={editButtonPosition.x - MARGIN}
          y={editButtonPosition.y - MARGIN}
          shape="rect"
          width={editButtonPosition.width + MARGIN * 2}
          height={editButtonPosition.height + MARGIN * 2}
        />
      ) : step === 2 && plusButtonPosition ? (
        <CoachMark
          x={plusButtonPosition.x}
          y={plusButtonPosition.y}
          shape="circle"
          radius={plusButtonPosition.radius + MARGIN}
        />
      ) : null}
      {/* instruction text and button */}
      {step < 3 && (
        <View style={styles.instructionContainer}>
          <Text style={styles.text}>{text}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStep(step + 1)}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  instructionContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0984e3",
    color: "#fff",
    fontSize: 32,
    margin: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
