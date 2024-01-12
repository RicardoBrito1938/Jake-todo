import {
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import PostList from "./components/posts/postsList";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useAppSelector } from "./store";
import AddPost from "./components/posts/addPosts";
import { T } from "./components/UI/Text/index";

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
  createdCount: {
    color: "#fbfbfb",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "grey",
    borderRadius: 100,
    alignContent: "flex-start",
    justifyContent: "flex-start",
    width: 30,
    height: 30,
    marginHorizontal: 5,
    textAlign: "center"
  },
  doneCount: {
    color: "#fbfbfb",
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "grey",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 5,
    textAlign: "center"
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
    height: "50%",
    top: 200
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
          <View style={{ flexDirection: "row" }}>
            <T style={styles.subTitleCreated}>created</T>
            <T style={styles.createdCount}>{createdCounter}</T>
          </View>
          <View style={{ flexDirection: "row" }}>
            <T style={styles.subTitleDone}>Done</T>
            <T style={styles.doneCount}>{doneCounter}</T>
          </View>
        </View>
        <View style={styles.postList}>
          <ScrollView>
            <PostList />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
