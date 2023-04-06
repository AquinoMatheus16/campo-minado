import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';

export const LevelSelection = ({ onCancel, isVisible, onLevelSelected }) => {

    return (
        <Modal
            onRequestClose={onCancel}
            visible={isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => onLevelSelected(0.1)}
                    >
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => onLevelSelected(0.2)}
                    >
                        <Text style={styles.buttonLabel}>Intermediário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => onLevelSelected(0.3)}
                    >
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
