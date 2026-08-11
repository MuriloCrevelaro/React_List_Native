import { View, Text, Image, TouchableOpacity } from "react-native"
import { TaskItemStyles } from "../taskitem/TaskItemStyles"

export const  TaskItem = ({ dados : {id, descricao} } ) => {
    return(
        <View style={TaskItemStyles.cordBox}>
            <Text style={TaskItemStyles.cardText}>
                {descricao} - Id:{id}
            </Text>
            <TouchableOpacity style={[TaskItemStyles.cardButton, TaskItemStyles.cardButtonEditColor]
            }>
                <Image 
                    source={require('../../../assets/Lapiz.png')} 
                    style={TaskItemStyles.Imagem}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[TaskItemStyles.cardButton, TaskItemStyles.cardButtonThasColor]}>
                <Image 
                    source={require('../../../assets/Eu(Lixeira).png')} 
                    style={TaskItemStyles.Imagem}
                />
            </TouchableOpacity>
        </View>
    )
}