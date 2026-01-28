import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";

import { useAuthStore } from "./src/store/useAuthStore";
import { useThemeStore } from "./src/store/useThemeStore";

export default function App() {
  const { isDark } = useThemeStore();
  const { setLoading } = useAuthStore();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />
      <AppNavigator />
    </>
  );
}
