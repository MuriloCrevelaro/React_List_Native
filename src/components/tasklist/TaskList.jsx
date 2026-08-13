import { TaskListStyles } from "./TaskListStyles"
import { ScrollView} from "react-native"
import { TaskItem } from "../taskitem/TaskItem"
import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../../context/TaskContext"

export const TaskList = () => {

    const {listagemTarefas, getTask} = useContext(TaskContext)
    

     useEffect(() => {
   try {
    getTask()
   } catch (error) {
    console.log(error)
   }
  }, [])
    
    return(
        <ScrollView style={TaskListStyles.taskListContainer}>
                {listagemTarefas.map((tarefa) => {
                    return(
                        <TaskItem dados={tarefa} key={tarefa.id} />
                    )
                })
            }
        </ScrollView>
    )
}