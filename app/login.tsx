import Button from "@/components/button";
import { useAuth } from "@/contexts/authcontext";
import { loginUser } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing info", "Please enter both email and password.");
      return;
    }

    try {
      const session = await loginUser(email, password);
      console.log("✅ Login successful:", session);
      login();
      router.replace("/(tabs)");
    } catch (err: any) {
      console.error("❌ Login failed:", err);
      Alert.alert("Login failed", err.message || "Unknown error occurred.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 justify-center items-center px-4 bg-primary"
    >
      <View className="w-full max-w-md bg-light-50 rounded-2xl p-6 shadow-lg">
        <Text className="text-3xl font-bold text-light-100 mb-6 text-center">
          Welcome Back!
        </Text>


        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-dark bg-white"
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-dark bg-white"
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Login" onPress={handleLogin} />

        <Pressable
          className="mt-4"
          onPress={() => router.push("/register")}
        >
          <Text className="text-sm text-center text-gray-600 underline">
            Don’t have an account? Register
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
