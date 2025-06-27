// filepath: app/register.tsx

import Button from "@/components/button";
import Input from "@/components/input";
import { useAuth } from "@/contexts/authcontext";
import { getCurrentUser, loginUser, registerUser } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

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

      // 🟢 Immediately login to create session
      await loginUser(email, password);
      const current = await getCurrentUser();
      console.log("👤 Current user:", current);

      setUser(current);
      login(); // update auth state
      router.replace("/"); // go to home (or /dashboard)

    } catch (error: any) {
      Alert.alert("Registration Error", error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-primary px-4 justify-center">
      <Text className="text-light-100 text-2xl font-bold mb-6">Create Account</Text>

      <Input label="Name" value={name} onChangeText={setName} />
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input label="Password" value={password} onChangeText={setPassword} />

      <Button title={loading ? "Creating..." : "Register"} onPress={handleRegister} />

      <Text
        className="text-light-300 text-center mt-4"
        onPress={() => router.push("/login")}
      >
        Already have an account? <Text className="text-accent">Login</Text>
      </Text>
    </View>
  );
}
