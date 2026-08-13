import { createContext, useState } from "react";
import api from "../services/FakeAPIService";

export const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [listagemTarefas , setListagemTarefas] = useState([])
    const [taskValue, setTaskValue] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [idToEdit, setIdToEdit] = useState(false)


    //criar as funções 
    // Get task
    const getTask = async() => {
        try {
            //endereço de servidor (protocolo://endereçoDoServidor:porta/endpoint)
            const APIreturn = await api.get(`${api}/taskpoint`)
            const APIdata = APIreturn.data
            setListagemTarefas(APIdata)
        } catch (error) {
            console.log("Deu erro na API")
            console.log(error)
        }
    }
    // Cad tesk
    const postTask = async(taskValue) => {
        try {
            await api.post(`${api}/taskpoint`,{
                descricao: taskValue
            })
            alert("Tarefa Cadastrada com sucesso")
            setTaskValue("")
            await getTask()
        } catch (error) {
            console.log("Deu errado ao cadastrar")
            console.log(error)
        }
    }

    const putTaskPreview = (tarefa) => {
        setTaskValue(tarefa.descricao)
        setEditMode(true)
        setIdToEdit(tarefa.id)
    }

    // Put task
    const putTask = async(id) => {
        try {

            await api.put(`${api}/taskpoint/taskpoint/${idToEdit}`,{
                descricao: taskValue
            })
             await getTask()

             setIdToEdit(0)
             setTaskValue("")
             setEditMode(false)
             alert("Atualizado com sucesso")
        } catch (error) {
            console.log("Deu errado ao editar")
            console.log(error)
        }

    }

    // Delet task
    const deleteTask = async (id) => {
        try {
            await api.delete(`http://172.16.2.40:3000/taskpoint/${id}`)
            await getTask()
        } catch (error) {
            console.log("Deu errado ao deletar")
            console.log(error)
        }

    }


    return(
        <TaskContext.Provider
            value={{
                listagemTarefas ,
                setListagemTarefas,
                getTask,
                postTask,
                putTask,
                putTaskPreview,
                deleteTask,
                taskValue,
                setTaskValue,
                editMode,
                setEditMode,
                idToEdit,
                setIdToEdit
            }}>
            {children}
        </TaskContext.Provider>
    )
}