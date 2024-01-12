import { styled } from "@fast-styles/react";
import { View } from "react-native";

export const CardRoot = styled(View, {
  backgroundColor: "#fff",
  borderColor: "#ccc",
  borderWidth: 1,
  borderRadius: 4,
  padding: 8,
  width: 300,
  maxHeight: 300,
  fontSize: 16,
  color: "#000",
  flexWrap: "wrap"
});

export default CardRoot;
