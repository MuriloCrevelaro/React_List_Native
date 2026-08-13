import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"
import { useContext, useState } from "react"
import { TaskContext } from "../../context/TaskContext"

export const FormTask = () => {
    const {postTask, getTask, putTask, taskValue, setTaskValue, editMode, setEditMode} = useContext(TaskContext)
    const saveTask = () => {
            console.log(`Texto Digitado ${taskValue}`);
            postTask(taskValue)
            setTaskValue("")

            Alert.alert("Adicionar Tarefa","Tarefa Adicionada", [
            {text: "Ok"},
            // Quando o Ok2 é precionado ele faz a função logo em ciguida
            {text: "Ok2 ", onPress: () => setTaskValue("Ok2 Pressionado")},
            ]
        )
        
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
                    if(editMode)
                        putTask()
                
                    else
                        saveTask()
                }}
            >
                <Text 
                    style={FormTaskStyles.taskButtonText}
                > Salvar </Text>
            </TouchableOpacity>
            {
                editMode && (
                    <TouchableOpacity
                        style={FormTaskStyles.taskButton}
                        onPress={() => {
                            setEditMode(false)
                            setTaskValue("")
                        }}
                    >
                        <Text 
                            style={FormTaskStyles.taskButtonText}
                        > Cancelar </Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}