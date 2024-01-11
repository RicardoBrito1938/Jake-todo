import { StyleSheet, View, Text } from "react-native";
import PostList from "./components/posts/postsList";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { store, useAppSelector } from "./store";
import { Provider } from "react-redux";
import AddPost from "./components/posts/addPosts";
import Main from "./index";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
