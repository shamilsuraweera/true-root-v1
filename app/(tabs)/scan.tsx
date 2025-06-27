import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function ScanScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6 space-y-4">
      <Ionicons name="qr-code-outline" size={48} color="#AB8BFF" />
      <Text className="text-light-100 text-xl text-center font-semibold">
        QR Scanner is coming soon!
      </Text>
      <Text className="text-light-300 text-sm text-center">
        This screen will allow you to scan product QR codes and view their full traceability history.
      </Text>
    </View>
  );
}
