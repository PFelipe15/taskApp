import React from "react";
import { Text, View, StatusBar, Input } from "react-native";
import { styles } from "./styles";
import TitleApp from "../../components/TitleApp";
export default function Home() {
  return (
    <View style={styles.Container}>
      <StatusBar />
     <TitleApp/>
      <View style={styles.main}>
    
      </View>
    </View>
  );
}
