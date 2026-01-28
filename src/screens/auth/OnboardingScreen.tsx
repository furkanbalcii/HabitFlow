import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "../../constants/theme";
import { useThemeStore } from "../../store/useThemeStore";

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const { isDark } = useThemeStore();
  const colors = isDark ? COLORS.dark : COLORS.light;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: colors.text }]}>
          Welcome to HabitFlow
        </Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Build better habits, one day at a time
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("Login" as never)}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: SPACING.lg,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: "bold",
    marginBottom: SPACING.md,
    textAlign: "center",
  },
  subtitle: {
    fontSize: FONT_SIZES.lg,
    textAlign: "center",
  },
  button: {
    padding: SPACING.lg,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: SPACING.xl,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: FONT_SIZES.lg,
    fontWeight: "600",
  },
});
