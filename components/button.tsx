import { Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled = false }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`bg-accent py-3 px-6 rounded-xl items-center ${disabled ? "opacity-50" : ""}`}
    >
      <Text className="text-white font-bold text-base">{title}</Text>
    </Pressable>
  );
}
