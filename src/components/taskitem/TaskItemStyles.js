import { StyleSheet } from "react-native";

export const TaskItemStyles = StyleSheet.create({
    cordBox: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginBottom: 15, 
        backgroundColor: "#313640",
        borderRadius: 10,
    },
    cardText: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
    },
    cardButton: {
        width: 45,
        height: 45,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 10,
    },
    cardButtonEditColor: {
        borderColor: '#9ABAEE'
    },
    cardButtonThasColor: {
        borderColor: '#B75D63'
    },
    cardButtonImage: {

    }
})