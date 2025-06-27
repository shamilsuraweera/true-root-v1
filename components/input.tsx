import { Text, TextInput, View } from "react-native";

type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function Input({ label, value, onChangeText }: InputProps) {
  return (
    <View className="mb-4">
      <Text className="text-light-100 mb-1">{label}</Text>
      <TextInput
        className="border border-light-200 rounded p-2 text-white"
        placeholder={label}
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
