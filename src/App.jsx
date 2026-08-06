import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Styles } from "./Styles";  
import { Header } from "./components/Header/Header";
import { FrmCarTask } from "./components/frmCadTask/FrmCarTask";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeArea}>
        <Header />
        <FrmCarTask />
        <View style={Styles.container}>
          <Text>My App</Text>
          <StatusBar  style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App;