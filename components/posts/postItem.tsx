import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, isDone } from "../../features/posts/postSlice";
import b from "../UI/Button/index";
import { c } from "../UI/Card/index";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#656565",
    marginVertical: 8,
    borderColor: "#717171"
  },
  removeButton: {
    borderRadius: 100,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30
  },
  itemText: {
    color: "white"
  },
  checkBox: {
    borderRadius: 100,
    backgroundColor: "#087ea4",
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  checkBoxDone: {
    borderRadius: 100,
    backgroundColor: "#527717",
    height: 20,
    width: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

const PostItem = ({
  id,
  content,
  done
}: {
  id: string;
  content: string;
  done: boolean;
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const dispatch = useDispatch();

  const RemovePost = () => {
    dispatch(
      deletePost({
        id: id
      })
    );
  };

  const Done = () => {
    dispatch(
      isDone({
        id: id
      })
    );
  };

  const handlePress = () => {
    setIsPressed(!isPressed);
    Done();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <c.root style={styles.item}>
        <b.root
          style={isPressed ? styles.checkBoxDone : styles.checkBox}
          onPress={handlePress}
        />
        <View style={{ width: "80%" }}>
          <c.text style={styles.itemText}>{content}</c.text>
        </View>
        <b.root onPress={RemovePost} style={styles.removeButton}>
          <b.text>-</b.text>
        </b.root>
      </c.root>
    </View>
  );
};

export default PostItem;
