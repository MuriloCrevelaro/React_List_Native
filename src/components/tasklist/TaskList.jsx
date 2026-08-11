import { ScrollView, Text, View } from "react-native"
import { TaskListStyles } from "./TaskListStyles"
import { TaskItem } from "../taskitem/TaskItem"
import { useEffect, useState } from "react"

export const TaskList = () => {

    const [listaTarefas, setListaTarefas] = useState([])
    const [taskValue, setTaskValue]

    //criar as funções 
    // Get task
    const getTask = async() => {
        try {
            //endereço de servidor (protocolo://endereçoDoServidor:porta/endpoint)
            const APIreturn = await axios.get('http://172.16.36.26:8081')
            const dataAPI = APIreturn.data
            setListaTarefas(dataAPI)
        } catch (error) {
            alert(message.error)
        }
    }
    // Cad tesk
    const cadTask = async() => {
        try {
            const APIreturn = await axios.post('http://172.16.36.26:8081'), {descricao:}
        } catch (error) {
            console.log("Deu errado ao chamar a api")
            console.log(error)
        }
    }
    // Put task
    const putTask = async() => {}

    // Delet task
    const deletTask = async() => {}

    useEffect(() => {
        getTask()
    }, [])
    
    return(
        <ScrollView style={TaskListStyles.taskListContainer}>
                {listaTarefas.map((tarefa) => {
                    return(
                        <TaskItem dados={tarefa} key={tarefa.id} />
                    )
                })
            }
        </ScrollView>
    )
}