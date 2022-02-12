import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Snackbar, Button } from "react-native-paper";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [player, setPlayer] = useState("X");

  const [pausedTiles, setPausedTiles] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);
  const [visibleSnackBarWin, setVisibleSnackBarWin] = useState(false);

  const onToggleSnackBarWin = () => setVisibleSnackBarWin(true);

  const onDismissSnackBarWin = () => setVisibleSnackBarWin(false);

  const [filledPosition, setFilledPosition] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const resetBoard = () => {
    setFilledPosition([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPausedTiles(false);
  };
  const changePlayer = () => {
    player == "X" ? setPlayer("O") : setPlayer("X");
  };
  function check_everything(filledPosition, player, row, column) {
    mark(filledPosition, player, row, column);
  }
  function mark(filledPosition, player, row, column) {
    let newFilledPosition = filledPosition;
    let isPositionFilled = isFilled(newFilledPosition, row, column);
    if (isPositionFilled == false) {
      newFilledPosition[row][column] = player;
      setFilledPosition(newFilledPosition);
      changePlayer();
      isWinner(filledPosition, player);
    } else {
      onToggleSnackBar();
    }
  }
  function isFilled(filledPosition, row, column) {
    if (filledPosition[row][column] != "") {
      return true;
    } else return false;
  }

  function isWinner(filledPosition, player) {
    if (
      (filledPosition[0][0] == player &&
        filledPosition[0][1] == player &&
        filledPosition[0][2] == player) ||
      (filledPosition[1][0] == player &&
        filledPosition[1][1] == player &&
        filledPosition[1][2] == player) ||
      (filledPosition[2][0] == player &&
        filledPosition[2][1] == player &&
        filledPosition[2][2] == player) ||
      (filledPosition[0][0] == player &&
        filledPosition[1][0] == player &&
        filledPosition[2][0] == player) ||
      (filledPosition[0][1] == player &&
        filledPosition[1][1] == player &&
        filledPosition[2][1] == player) ||
      (filledPosition[0][1] == player &&
        filledPosition[1][1] == player &&
        filledPosition[2][1] == player) ||
      (filledPosition[0][2] == player &&
        filledPosition[1][2] == player &&
        filledPosition[2][2] == player) ||
      (filledPosition[0][0] == player &&
        filledPosition[1][1] == player &&
        filledPosition[2][2] == player) ||
      (filledPosition[0][2] == player &&
        filledPosition[1][1] == player &&
        filledPosition[2][0] == player)
    ) {
      setPlayer(player);
      onToggleSnackBarWin();
      setPausedTiles(true);
    } else {
      return false;
    }
  }

  return (
    <View style={styles.container}>
      <Text>Current player {player}</Text>
      <Button
        onPress={() => {
          changePlayer();
        }}
      >
        Change player
      </Button>
      <View style={styles.row}>
        {/*First Row*/}
        <View style={styles.containerTicTacToe}>
          <Pressable
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 0, 0);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 0, 1);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 0, 2);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 1, 0);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 1, 1);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 1, 2);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 2, 0);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 2, 1);
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
            disabled={pausedTiles}
            onPress={() => {
              check_everything([...filledPosition], player, 2, 2);
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
      <Button onPress={resetBoard}>Reset</Button>
      {/* <Text>Change the number below</Text>
      <Text>{contentText}</Text>
      <Button
        title="Add 1 "
        onPress={() => setContentText(contentText + 1)}
      ></Button> */}
      <StatusBar style="auto" />
      <Snackbar
        style={{ backgroundColor: "red" }}
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={1000}
      >
        Error Position is Filled.
      </Snackbar>
      <Snackbar
        style={{ backgroundColor: "green" }}
        visible={visibleSnackBarWin}
        onDismiss={onDismissSnackBarWin}
        duration={1000}
      >
        Congratulation {player} Won The Game!
      </Snackbar>
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
