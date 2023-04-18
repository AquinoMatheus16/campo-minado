import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { params } from "../../params";
import { Mine } from "../Mine";
import { Flag } from "../Flag";

export const Field = ({ mined, opened, nearMines, exploded, flagged, onOpen, onSelect }) => {

    const styleField = [styles.field];
    const [isBlocked, setIsBlocked] = useState(false);

    if (opened) {
        styleField.push(styles.opened);
    }

    if (exploded) {
        styleField.push(styles.exploded);
    }

    if (flagged) {
        styleField.push(styles.flagged);
    }

    if (!opened && !exploded) {
        styleField.push(styles.regular);
    }

    let color = null;
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2A28D7';

        if (nearMines == 2) color = '#2B520F';

        if (nearMines > 2 && nearMines < 6) color = '#F9060A';

        if (nearMines >= 6) color = '#F221A9';
    }

    function handleLongPress(shouldBlock = true) {
        setIsBlocked(shouldBlock);
        onSelect();
    }

    function handlePress() {
        if (!isBlocked) {
            onOpen();
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress} onLongPress={() => handleLongPress(!isBlocked)}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
                    :
                    false
                }
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },

    regular: {
        backgroundColor: '#999999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333333',
        borderBottomColor: '#333333'
    },

    opened: {
        backgroundColor: '#999999',
        borderColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center'
    },

    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },

    exploded: {
        backgroundColor: '#ff0000',
        borderColor: '#ff0000'
    },

    flagged: {

    }
});
