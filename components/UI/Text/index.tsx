import { styled } from "@fast-styles/react";
import { Text } from "react-native";

export const T = styled(Text, {
  fontSize: 16,
  variants: {
    colorScheme: {
      Title: {
        fontSize: 24
      },
      subtitle: {
        fontSize: 16
      },
      content: {
        fontSize: 12
      }
    }
  }
});
