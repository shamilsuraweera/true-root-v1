import Button from "@/components/button";
import { useAuth } from "@/contexts/authcontext";
import { loginUser } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

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
      login(); // update auth context
      router.replace("/(tabs)");
    } catch (err: any) {
      console.error("❌ Login failed:", err);
      Alert.alert("Login failed", err.message || "Unknown error occurred.");
    }
  };

  return (
    <View className="flex-1 justify-center p-4 bg-primary">
      <Text className="text-light-100 text-2xl mb-4">Login</Text>

      <TextInput
        className="border border-light-200 rounded p-2 mb-4 text-white"
        placeholder="Email"
        placeholderTextColor="#ccc"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="border border-light-200 rounded p-2 mb-4 text-white"
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <Pressable className="mt-4" onPress={() => router.push("/register")}>
        <Text className="text-light-100 text-sm text-center underline">
          Don’t have an account? Register
        </Text>
      </Pressable>
    </View>
  );
}
