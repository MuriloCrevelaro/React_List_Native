import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"
import { useState } from "react"

export const FormTask = () => {

    const [taskValue, setTaskValue] = useState("")
    const saveTask = () => {
        console.log(`Texto Digitado ${taskValue}`);
        
    }

    return (
        <View style={FormTaskStyles.formTaskBox}>
            <TextInput
             style={FormTaskStyles.taskInputName} 
             placeholder="Adicione uma tarefa"
             value={taskValue}
             onChangeText={(textoDigitado) => {
                setTaskValue(textoDigitado)
             }}
            />
            <TouchableOpacity
                style={FormTaskStyles.taskButton}
                onPress={() => {
                    saveTask()
                    Alert.alert("Adicionar Tarefa","Tarefa Adicionada", [
                            {text: "Ok"},
                            // Quando o Ok2 é precionado ele faz a função logo em ciguida
                            {text: "Ok2 ", onPress: () => setTaskValue("Ok2 Pressionado")},
                        ]
                    )
                }}
            >
                <Text 
                    style={FormTaskStyles.taskButtonText}
                > Adicionar </Text>
            </TouchableOpacity>
        </View>
    )
}