import React, { Component, useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { Header } from '../src/components/Header';
import { MineField } from '../src/components/MineField';
import {
  cloneBoard,
  createMinedBoard,
  flagsUsed,
  hadExplosion,
  invertFlag,
  openField,
  showMines,
  wonGame
} from '../src/functions';
import { params } from '../src/params';
import { styles } from '../styles';
import { LevelSelection } from '../src/screens/LevelSelection';

// IGNOREM

export default function Appp() {

  const [board, setBoard] = useState(createState());
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection, setShowLevelSelection] = useState(false);

  function minesAmount() {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  function createState() {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return createMinedBoard(rows, cols, minesAmount());
  }

  function onOpenField(row, column) {
    const newBoard = cloneBoard(board);
    openField(newBoard, row, column);
    const lost = hadExplosion(newBoard);
    const won = wonGame(newBoard);

    if (lost) {
      showMines(newBoard);
      Alert.alert('Perdeeeeu!', 'Que buuuurro!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }

    setBoard(newBoard);
    setLost(lost);
    setWon(won);
  }

  function onSelectField(row, column) {
    const newBoard = cloneBoard(board);
    invertFlag(newBoard, row, column);
    const won = wonGame(newBoard);

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }

    setBoard(newBoard);
    setWon(won);
  }

  function onLevelSelected(level) {
    params.difficultLevel = level;
    setBoard(createState());
    setShowLevelSelection(false);
  }

  return (
    <View style={styles.container}>
      <LevelSelection
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setShowLevelSelection(false)}
      />

      <Header
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={() => {
          setBoard(createState());
          setWon(false);
          setLost(false);
        }}
        onFlagPress={() => setShowLevelSelection(true)}
      />

      <View style={styles.board}>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </View>
  );
};

