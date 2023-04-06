import React, { useState } from 'react';
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

export default function Apppp() {

  const createState = () => {
    const cols = params.getColumnsAmount();
    const row = params.getRowsAmount();
    return {
      board: createMinedBoard(row, cols, minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const row = params.getRowsAmount();
    return Math.ceil(cols * row * params.difficultLevel);
  }

  const [boardState, setBoardState] = useState(createState());

  const onOpenField = (row, column) => {

    const board = cloneBoard(boardState.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeeeeu!', 'Que buuuuurro! ')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você venceu! ...deu sorte')
    }

    setBoardState({ board: board, lost: lost, won: won });
  }

  const onSelectField = (row, column) => {

    const board = cloneBoard(boardState.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu! ...deu sorte')
    }

    setBoardState({ board: board, won: won });
  }

  const onLevelSelected = level => {
    params.difficultLevel = level;
    setBoardState(createState());
  }

  return (
    <View style={styles.container}>

      <LevelSelection
        isVisible={boardState.showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => setBoardState({ showLevelSelection: false })}
      />

      <Header
        flagsLeft={minesAmount() - flagsUsed(boardState.board)}
        onNewGame={() => setBoardState(createState())}
        onFlagPress={() => setBoardState({ showLevelSelection: true })}
      />

      <View style={styles.board}>
        <MineField
          board={boardState.board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>

    </View>
  );
};
