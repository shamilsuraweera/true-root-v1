import Button from "@/components/button";
import { useAuth } from "@/contexts/authcontext";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center bg-primary px-6 space-y-4">
      <Text className="text-light-100 text-2xl font-bold">Profile</Text>

      <View className="w-full bg-dark-100 p-4 rounded-lg">
        <Text className="text-light-100 mb-2">👤 Name:</Text>
        <Text className="text-light-200 mb-2">{user?.name || "N/A"}</Text>

        <Text className="text-light-100 mb-2">📧 Email:</Text>
        <Text className="text-light-200 mb-2">{user?.email || "N/A"}</Text>

        <Text className="text-light-100 mb-2">🆔 User ID:</Text>
        <Text className="text-light-200">{user?.$id}</Text>
      </View>

      <Button title="Logout" onPress={logout} />
    </View>
  );
}
