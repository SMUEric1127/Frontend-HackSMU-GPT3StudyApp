import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Animated, Platform } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

export default class QuizSkeleton extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.circleAnimatedValue = new Animated.Value(0);
  }
  circleAnimated = () => {
    this.circleAnimatedValue.setValue(0);
    Animated.timing(this.circleAnimatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        this.circleAnimated();
      }, 800);
    });
  };
  componentDidMount() {
    this.circleAnimated();
  }
  render() {
    const translateX = this.circleAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 100],
    });

    const translateX2 = this.circleAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-10, 270],
    });
    return (
      <View style={styles.container}>
        <View style={[styles.card]}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              overflow: "hidden",
            }}
          >
            <Animated.View
              style={{
                backgroundColor: "#ECEFF1",
                height: 32,
                marginBottom: 8,
              }}
            >
              <Animated.View
                style={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX2 }],
                }}
              ></Animated.View>
            </Animated.View>
            <View style={{ backgroundColor: "#ECEFF1", height: 32 }}>
              <Animated.View
                style={{
                  width: "20%",
                  height: "100%",
                  backgroundColor: "white",
                  opacity: 0.5,
                  transform: [{ translateX: translateX2 }],
                }}
              ></Animated.View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: "transparrent",
    padding: 10,
  },
  card: {
    padding: 16,
    shadowColor: "black",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
    shadowColor: "black",
    // shadowOffset: {
    // width: 1,
    // height: 1,
    // },
    shadowOpacity: 0.1,
    flexDirection: "row",
  },
});
