import React from "react";
import { View } from "react-native";
import { Field } from "../Field";
import { styles } from "./styles";

export const MineField = ({ board, onOpenField, onSelectField }) => {

    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field
                {...field}
                key={c}
                onOpen={() => onOpenField(r, c)}
                onSelect={e => onSelectField(r, c)}
            />;
        });

        return <View style={styles.container2} key={r}>{columns}</View>;
    });

    return <View style={styles.container}>{rows}</View>;
}
