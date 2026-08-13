import { View, Text, Image, TouchableOpacity, Alert } from "react-native"
import { TaskItemStyles } from "../taskitem/TaskItemStyles"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

export const  TaskItem = ({ dados : {id, descricao} } ) => {

    const { deleteTask, putTaskPreview } = useContext(TaskContext)
    const deleteTaskConfirm = async (tarefa) => {
        Alert.alert('Apagar',`Deseja deletar ${tarefa.descricao}`, [
            {text: "Cancelar"},
            {text: "Deletar", onPress: () => deleteTask(tarefa.id)}
        ])
    }


    return(
        <View style={TaskItemStyles.cordBox}>
            <Text style={TaskItemStyles.cardText}>
                {descricao}
            </Text>
            <TouchableOpacity style={[TaskItemStyles.cardButton, TaskItemStyles.cardButtonEditColor]}
                onPress={() => {
                    putTaskPreview({id, descricao})
                }}
            >
                <Image 
                    source={require('../../../assets/Lapiz.png')} 
                    style={TaskItemStyles.Imagem}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={[TaskItemStyles.cardButton, TaskItemStyles.cardButtonThasColor]}
                onPress={() => {
                    deleteTaskConfirm({id, descricao})
                }}
            >
                <Image 
                    source={require('../../../assets/Eu(Lixeira).png')} 
                    style={TaskItemStyles.Imagem}
                />
            </TouchableOpacity>
        </View>
    )
}