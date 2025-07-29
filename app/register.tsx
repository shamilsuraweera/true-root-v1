// filepath: app/register.tsx

import Button from "@/components/button";
import { useAuth } from "@/contexts/authcontext";
import { getCurrentUser, loginUser, registerUser } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const { login, setUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Missing fields", "Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const newUser = await registerUser(email, password, name);
      console.log("✅ User created:", newUser);

      await loginUser(email, password);
      const current = await getCurrentUser();
      console.log("👤 Current user:", current);

      setUser(current);
      login();
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Registration Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-primary"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center px-4 py-12">
          <View className="w-full max-w-md bg-light-50 rounded-2xl p-6 shadow-lg">
            <Text className="text-3xl font-bold text-light-100 mb-6 text-center">
              Create Account
            </Text>

            <TextInput
              className="bg-white text-dark border border-gray-300 rounded-xl px-4 py-3 mb-4"
              placeholder="Name"
              placeholderTextColor="#999"
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              className="bg-white text-dark border border-gray-300 rounded-xl px-4 py-3 mb-4"
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              className="bg-white text-dark border border-gray-300 rounded-xl px-4 py-3 mb-6"
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <Button
              title={loading ? "Creating..." : "Register"}
              onPress={handleRegister}
            />

            <Text
              className="text-sm text-center text-gray-600 mt-4"
              onPress={() => router.push("/login")}
            >
              Already have an account?{" "}
              <Text className="text-accent underline">Login</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
