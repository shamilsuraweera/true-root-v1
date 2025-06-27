import { Text, View } from "react-native";

type CardProps = {
  title: string;
  subtitle: string;
};

export default function Card({ title, subtitle }: CardProps) {
  return (
    <View className="bg-dark-100 p-4 rounded-xl mb-3">
      <Text className="text-light-100 font-bold text-lg mb-1">{title}</Text>
      <Text className="text-light-300 text-sm">{subtitle}</Text>
    </View>
  );
}
