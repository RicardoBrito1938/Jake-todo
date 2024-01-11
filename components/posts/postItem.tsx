import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, taskDone } from "../../features/posts/postSlice";
import b from "../UI/Button/index";
import { c } from "../UI/Card/index";
import { StyleSheet, View } from "react-native";
import Checkbox from "expo-checkbox";

const styles = StyleSheet.create({
  item: {
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
    borderColor: "#ffffff"
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
  const [isChecked, setChecked] = useState();

  const RemovePost = () => {
    dispatch(
      deletePost({
        id: id
      })
    );
  };

  const Done = () => {
    dispatch(
      taskDone({
        done: done
      })
    );
  };

  console.log(done);
  console.log(content, "content");
  return (
    <View>
      <c.root style={styles.item}>
        <Checkbox
          onChange={Done}
          style={styles.checkBox}
          value={isChecked}
          color={isChecked ? "#74d4ec" : undefined}
          onValueChange={setChecked}
        />
        <c.text style={styles.itemText}>{content}</c.text>
        <b.root onPress={RemovePost} style={styles.removeButton}>
          <b.text>-</b.text>
        </b.root>
      </c.root>
    </View>
  );
};

export default PostItem;
