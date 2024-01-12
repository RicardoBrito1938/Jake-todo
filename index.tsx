import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView
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
    backgroundColor: "#1A1A1A",
    height: "75%"
  },
  TopSection: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    height: "25%",
    position: "absolute",
    top: 0
  },
  subTitle: {
    flex: 1,
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
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 18
  },
  createdCount: {},
  Count: {
    color: "#fbfbfb",
    fontWeight: "bold",
    fontSize: 16,
    backgroundColor: "#333333",
    width: 25,
    height: 20,
    borderRadius: 100,
    marginHorizontal: 5,
    marginVertical: 5,
    textAlign: "center"
  },
  subTitleDone: {
    color: "#8284FA",
    fontWeight: "bold",
    fontSize: 18
  },
  pageTitleTo: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 40
  },
  pageTitleDo: {
    color: "#5E60CE",
    fontWeight: "bold",
    fontSize: 40
  },
  titleView: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    top: 110,
    width: "100%",
    alignItems: "center",
    alignContent: "center"
  },
  postList: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
    top: 200
  },
  icon: {
    margin: 6
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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <View style={styles.container}> */}
        <View style={styles.TopSection}>
          <View style={styles.titleView}>
            <Image
              source={require("./assets/rocket.png")}
              style={styles.icon}
            />
            <T style={styles.pageTitleTo}>to</T>
            <T style={styles.pageTitleDo}>do</T>
          </View>
        </View>
        <AddPost />
        <View style={styles.subTitle}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <T style={styles.subTitleCreated}>created</T>
            <T style={styles.Count}>{createdCounter}</T>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <T style={styles.subTitleDone}>Done</T>
            <T style={styles.Count}>{doneCounter}</T>
          </View>
        </View>
        <View style={styles.postList}>
          <ScrollView>
            <PostList />
          </ScrollView>
        </View>
        {/* </View> */}
      </KeyboardAvoidingView>
    </>
  );
}
