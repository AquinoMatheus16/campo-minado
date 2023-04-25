import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Flag } from "../Flag";

export const Header = ({ onFlagPress, flagsLeft, onNewGame }) => {

    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={onFlagPress} style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {flagsLeft}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onNewGame} onLongPress={() => Linking.openURL("https://github.com/AquinoMatheus16")}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    );
}
