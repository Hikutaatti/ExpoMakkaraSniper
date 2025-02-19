import React, { useState } from "react";
import { View, StatusBar, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import Menu from "./components/Menu";
import { Picker } from "@react-native-picker/picker";

const App = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState("Julinia");
  const [language, setLanguage] = useState("en"); // Default is English

  // Toggle language and flag
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fi" : "en"));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ padding: 10, backgroundColor: "#fff", flexDirection: "row", alignItems: "center", justifyContent: "space-between", elevation: 2 }}>
        <Picker
          selectedValue={selectedRestaurant}
          onValueChange={(itemValue) => setSelectedRestaurant(itemValue)}
          style={{ flex: 1 }}
        >
          <Picker.Item label="Julinia" value="Julinia" />
          <Picker.Item label="Mara" value="Mara" />
          <Picker.Item label="Kerttu" value="Kerttu" />
        </Picker>


        {/* Language Toggle Button */}
        <TouchableOpacity onPress={toggleLanguage} style={{ marginLeft: 10 }}>
          <Image
            source={language === "en" ? require("./assets/uk.png") : require("./assets/fin.png")}
            style={{ width: 30, height: 20 }}
          />
        </TouchableOpacity>
      </View>

      <Menu selectedRestaurant={selectedRestaurant} language={language} />
    </View>
  );
};

export default App;
