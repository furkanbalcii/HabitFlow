import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS, FONT_SIZES, SPACING } from "../../constants/theme";
import { useThemeStore } from "../../store/useThemeStore";

export default function HomeScreen() {
  const { isDark } = useThemeStore();
  const colors = isDark ? COLORS.dark : COLORS.light;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.greeting, { color: colors.text }]}>
        Good Morning! 👋
      </Text>
      <Text style={[styles.date, { color: colors.textSecondary }]}>
        {new Date().toLocaleDateString("tr-TR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>

      <View style={styles.emptyState}>
        <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
          Henüz alışkanlık eklemediniz
        </Text>
        <Text style={[styles.emptySubtext, { color: colors.textSecondary }]}>
          + butonuna tıklayarak başlayın
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: SPACING.lg,
  },
  greeting: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    marginBottom: SPACING.xs,
  },
  date: {
    fontSize: FONT_SIZES.md,
    marginBottom: SPACING.xl,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.xxl * 2,
  },
  emptyText: {
    fontSize: FONT_SIZES.lg,
    marginBottom: SPACING.sm,
  },
  emptySubtext: {
    fontSize: FONT_SIZES.md,
  },
});
