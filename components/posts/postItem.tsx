import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, isDone } from "../../features/posts/postSlice";
import b from "../UI/Button/index";
import { c } from "../UI/Card/index";
import { Image, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    marginVertical: 8,
    borderColor: "#333333"
  },
  removeButton: { paddingBottom: 10, paddingTop: 0, margin: 0 },
  itemText: {
    color: "white",
    textAlign: "center"
  },
  checkBox: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#4EA8DE",
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
  const dispatch = useDispatch();

  const RemovePost = () => {
    dispatch(
      deletePost({
        id: id
      })
    );
  };

  const taskDone = () => {
    dispatch(
      isDone({
        id: id
      })
    );
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <c.root style={styles.item}>
        <b.root
          style={done ? styles.checkBoxDone : styles.checkBox}
          onPress={taskDone}
        />
        <View style={{ width: "80%" }}>
          <c.text style={styles.itemText}>{content}</c.text>
        </View>
        <b.root onPress={RemovePost}>
          <b.text style={styles.removeButton}>
            <Image
              source={require("../../assets/bin.png")}
              style={{ width: 30, height: 20 }}
            />
          </b.text>
        </b.root>
      </c.root>
    </View>
  );
};

export default PostItem;
