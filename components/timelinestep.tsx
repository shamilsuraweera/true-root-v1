import { Text, View } from "react-native";

type TimelineStepProps = {
  step: {
    type: string;
    time: string;
  };
};

export default function TimelineStep({ step }: TimelineStepProps) {
  return (
    <View className="border-l-4 border-accent pl-4 pb-3">
      <Text className="text-light-100 font-semibold">{step.type}</Text>
      <Text className="text-light-300 text-xs">{step.time}</Text>
    </View>
  );
}
