import { StyleSheet } from "react-native";

export default StyleSheet.create({
  menuContainer: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  mealContainer: {
    marginTop: 10,
  },
  mealTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    marginBottom: 3,
  },
  foodItem: {
    fontSize: 14,
    color: "#777",
    paddingLeft: 10,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
    marginTop: 20,
  },
});
