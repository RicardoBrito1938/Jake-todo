import { StyleSheet, View, Text } from "react-native";
import PostList from "./components/posts/postsList";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useAppSelector } from "./store";
import AddPost from "./components/posts/addPosts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#484848",
    height: "75%"
  },
  TopSection: {
    backgroundColor: "#000",
    width: "100%",
    height: "25%",
    position: "absolute",
    top: 0
  },
  subTitle: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: "space-between",
    flexDirection: "row",
    bottom: "60%",
    position: "absolute",
    width: "80%",
    borderColor: "#717171",
    borderBottomWidth: 1,
    paddingBottom: 24
  },
  subTitleCreated: {
    color: "#fbfbfb",
    fontWeight: "bold",
    fontSize: 18
  },
  subTitleDone: {
    color: "#fbfbfb",
    fontWeight: "bold",
    fontSize: 18
  },
  pageTitle: {
    color: "#fbfbfb",
    width: "100%",
    fontWeight: "bold",
    fontSize: 34,
    justifyContent: "center",
    backgroundColor: "red"
  },
  postList: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60%",
    top: 100
  }
});

export default function Main() {
  const doneCounter = useAppSelector(
    state => state.posts.filter(item => item.done).length
  );

  const createdCounter = useAppSelector(state => state.posts.length);

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.TopSection} />
        <AddPost />
        <View style={styles.subTitle}>
          <Text style={styles.subTitleCreated}>created:{createdCounter}</Text>
          <Text style={styles.subTitleDone}>Done:{doneCounter}</Text>
        </View>
        <View style={styles.postList}>
          <PostList />
        </View>
      </View>
    </>
  );
}
