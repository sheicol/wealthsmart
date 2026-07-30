import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WealthSmart</Text>
      <Text style={styles.subtitle}>
        El asesor financiero inteligente para Colombia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
  },
});
