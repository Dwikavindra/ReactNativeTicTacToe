import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const [filledPosition, setFilledPosition] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  function check_everything(player, row, column) {
    mark(player, row, column);
  }
  function mark(player, row, column) {
    let newFilledPosition = [...filledPosition];
    let isPositionFilled = isFilled(newFilledPosition, row, column);
    if (isPositionFilled == false) {
      newFilledPosition[row][column] = player;
      setFilledPosition(newFilledPosition);
    } else {
    }
  }
  function isFilled(filledPosition, row, column) {
    if (filledPosition[row][column] != "") {
      return true;
    } else return false;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/*First Row*/}
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 0, 0);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[0][0]}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 0, 1);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[0][1]}
              </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 0, 2);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[0][2]}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        {/*Second Row*/}
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 1, 0);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[1][0]}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 1, 1);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[1][1]}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 1, 2);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[1][2]}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        {/*Third Row*/}
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 2, 0);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[2][0]}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 2, 1);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[2][1]}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerTicTacToe}>
          <Pressable
            onPress={() => {
              check_everything("x", 2, 2);
            }}
          >
            <View style={{ height: 80, width: 80, justifyContent: "center" }}>
              <Text style={{ textAlign: "center" }}>
                {filledPosition[2][2]}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      {/* <Text>Change the number below</Text>
      <Text>{contentText}</Text>
      <Button
        title="Add 1 "
        onPress={() => setContentText(contentText + 1)}
      ></Button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  containerTicTacToe: {
    height: 80,
    width: 80,
    backgroundColor: "grey",
    marginLeft: 5,
  },
});
