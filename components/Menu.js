import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import styles from "../styles/menu";

const Menu = ({ selectedRestaurant, language }) => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("https://ouf.fi/api/menu?city=Oulu&campus=Linnanmaa");
        setMenuData(response.data);
      } catch (err) {
        setError("Failed to load menu");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text style={styles.errorText}>{error}</Text>;

  const filteredMenu = menuData.filter((restaurant) => restaurant.name === selectedRestaurant);
  if (filteredMenu.length === 0) return <Text style={styles.errorText}>No menu available</Text>;

  const menu = filteredMenu[0].menu;

  return (
    <FlatList
      data={menu}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <View style={styles.menuContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
          {item[language].map((meal, index) => (
            <View key={index} style={styles.mealContainer}>
              <Text style={styles.mealTitle}>{meal.name}</Text>
              {meal.items.map((food, idx) => (
                <Text key={idx} style={styles.foodItem}>{food.name} ({food.diets})</Text>
              ))}
            </View>
          ))}
        </View>
      )}
    />
  );
};

export default Menu;
