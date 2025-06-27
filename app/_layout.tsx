import { AuthProvider, useAuth } from "@/contexts/authcontext";
import { Slot, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import "./globals.css";

function InnerLayout() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthPage = pathname === "/login" || pathname === "/register";

    if (isLoggedIn === false && !isAuthPage) {
      router.replace("/login");
    }

    if (isLoggedIn === true && isAuthPage) {
      router.replace("/(tabs)"); // or "/" depending on your main route
    }
  }, [isLoggedIn, pathname]);

  if (isLoggedIn === null) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ActivityIndicator color="#AB8BFF" />
      </View>
    );
  }

  return <Slot />;
}

export default function Layout() {
  return (
    <AuthProvider>
      <InnerLayout />
    </AuthProvider>
  );
}
