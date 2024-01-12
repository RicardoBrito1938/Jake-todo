import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/posts/postSlice";
import { Form } from "../UI/Form/Form";
import { i } from "../UI/Input/index";
import b from "../UI/Button/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Form: {
    justifyContent: "center",
    bottom: "69%",
    position: "absolute"
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 50,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    alignContent: "center",
    justifyContent: "center"
  }
});

const AddPost = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      addPost({
        post: value
      })
    );

    setValue("");
  };
  return (
    <Form style={styles.Form}>
      <i.root
        value={value}
        onChange={state => setValue(state.nativeEvent.text)}
      ></i.root>
      <b.root style={styles.button} onPress={onSubmit}>
        <b.text style={styles.buttonText}>+</b.text>
      </b.root>
    </Form>
  );
};

export default AddPost;
