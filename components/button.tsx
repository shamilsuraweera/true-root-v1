import { Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  className?: string; // ✅ Add this
};

export default function Button({ title, onPress, disabled = false, className = "" }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`bg-accent py-3 px-6 rounded-xl items-center ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <Text className="text-white font-bold text-base">{title}</Text>
    </Pressable>
  );
}
