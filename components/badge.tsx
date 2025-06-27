import { Text, View } from "react-native";

type BadgeProps = {
  label: string;
};

export default function Badge({ label }: BadgeProps) {
  return (
    <View className="bg-accent px-3 py-1 rounded-full self-start">
      <Text className="text-white text-xs font-bold">{label}</Text>
    </View>
  );
}
