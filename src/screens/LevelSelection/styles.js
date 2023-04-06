import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    container: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    button: {
        marginTop: 10,
        padding: 5
    },

    buttonLabel: {
        fontSize: 20,
        color: '#EEEEEE',
        fontWeight: 'bold'
    },

    bgEasy: {
        backgroundColor: '#49b65d'
    },

    bgNormal: {
        backgroundColor: '#2765F7'
    },

    bgHard: {
        backgroundColor: '#F26337'
    }
});
