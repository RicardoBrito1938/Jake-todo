import { styled } from "@fast-styles/react";
import { TextInput } from "react-native";

export const InputRoot = styled(TextInput, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: 300,
  padding: 12,
  backgroundColor: "#262626",
  borderWidth: 1,
  borderRadius: 4,
  height: 50,
  fontSize: 16,
  color: "#fcfcfc"
});
