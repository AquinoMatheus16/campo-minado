import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },

    flagContainer: {
        flexDirection: 'row',
    },

    flagButton: {
        marginTop: 10,
        minWidth: 30
    },

    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },

    button: {
        backgroundColor: '#999999',
        padding: 5,
    },

    buttonLabel: {
        fontSize: 20,
        color: '#DDDDDD',
        fontWeight: 'bold'
    }
});
