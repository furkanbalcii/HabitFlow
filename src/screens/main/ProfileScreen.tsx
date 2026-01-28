import React from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import {
    BORDER_RADIUS,
    COLORS,
    FONT_SIZES,
    SPACING,
} from "../../constants/theme";
import { useAuthStore } from "../../store/useAuthStore";
import { useThemeStore } from "../../store/useThemeStore";

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const colors = isDark ? COLORS.dark : COLORS.light;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View
          style={[
            styles.avatar,
            { backgroundColor: colors.primary, borderColor: colors.border },
          ]}
        >
          <Text style={styles.avatarText}>
            {user?.displayName?.charAt(0).toUpperCase() || "U"}
          </Text>
        </View>
        <Text style={[styles.name, { color: colors.text }]}>
          {user?.displayName || "User"}
        </Text>
        <Text style={[styles.email, { color: colors.textSecondary }]}>
          {user?.email}
        </Text>
      </View>

      <View style={styles.section}>
        <View
          style={[
            styles.settingItem,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
        >
          <Text style={[styles.settingText, { color: colors.text }]}>
            Dark Mode
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.border, true: colors.primary }}
            thumbColor="#ffffff"
          />
        </View>

        <TouchableOpacity
          style={[
            styles.settingItem,
            { backgroundColor: colors.card, borderColor: colors.border },
          ]}
          onPress={logout}
        >
          <Text style={[styles.settingText, { color: colors.error }]}>
            Çıkış Yap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg,
  },
  header: {
    alignItems: "center",
    marginBottom: SPACING.xl,
    paddingVertical: SPACING.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    marginBottom: SPACING.md,
  },
  avatarText: {
    color: "#ffffff",
    fontSize: FONT_SIZES.xxl,
    fontWeight: "bold",
  },
  name: {
    fontSize: FONT_SIZES.xl,
    fontWeight: "bold",
    marginBottom: SPACING.xs,
  },
  email: {
    fontSize: FONT_SIZES.md,
  },
  section: {
    gap: SPACING.md,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
  },
  settingText: {
    fontSize: FONT_SIZES.md,
    fontWeight: "500",
  },
});
