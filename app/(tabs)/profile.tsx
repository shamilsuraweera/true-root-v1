import Button from "@/components/button";
import { useAuth } from "@/contexts/authcontext";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

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
          <View className="w-full max-w-md bg-light-50 rounded-2xl p-6 shadow-lg space-y-6">
            <Text className="text-3xl font-bold text-light-100 text-center">
              Your Profile 👤
            </Text>

            <View className="bg-white rounded-xl p-4 space-y-2 shadow-sm">
              <Text className="text-gray-500 text-sm">Name</Text>
              <Text className="text-lg font-semibold text-dark">
                {user?.name || "N/A"}
              </Text>

              <Text className="text-gray-500 text-sm mt-4">Email</Text>
              <Text className="text-lg font-semibold text-dark">
                {user?.email || "N/A"}
              </Text>

              <Text className="text-gray-500 text-sm mt-4">User ID</Text>
              <Text className="text-sm text-gray-700">{user?.$id}</Text>
            </View>

            <Button title="Logout" onPress={logout} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
