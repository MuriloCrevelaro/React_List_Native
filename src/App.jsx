import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./Styles";
import { Header } from "./components/header/Header";
import { FormTask } from "./components/formtask/FormTask";
import { TaskList } from "./components/tasklist/TaskList";


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeArea}>
        <View style={Styles.container}>
          <Header />
          <FormTask />
          <TaskList />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
