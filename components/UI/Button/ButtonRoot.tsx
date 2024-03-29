import { styled } from "@fast-styles/react";
import { TouchableOpacity } from "react-native";

export const ButtonRoot = styled(TouchableOpacity, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: 60,
  borderRadius: 4,
  padding: 6,
  margin: 4,
  height: 60,
  variants: {
    colorScheme: {
      primary: {
        backgroundColor: "#087ea4"
      },
      positive: {
        backgroundColor: "#527717"
      },
      negative: {
        backgroundColor: "#ff393f"
      }
    }
  }
});
