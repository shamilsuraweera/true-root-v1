import Button from "@/components/button";
import { useAuth } from "@/contexts/authcontext";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

// MOCK DATA – replace with real DB call later
const mockBatch = {
  id: "batch001",
  name: "Batch #001",
  type: "Cocoa Pods",
  harvestedAt: "2025-06-20",
  createdBy: "Shamil",
};

const mockEvents = [
  {
    id: "e1",
    type: "Harvested",
    notes: "Harvested at farm site A",
    createdBy: "Shamil",
    createdAt: "2025-06-20",
  },
  {
    id: "e2",
    type: "Fermented",
    notes: "Fermentation took 3 days",
    createdBy: "Shamil",
    createdAt: "2025-06-23",
  },
  {
    id: "e3",
    type: "Shipped",
    notes: "Sent to exporter",
    createdBy: "Exporter Co.",
    createdAt: "2025-06-28",
  },
];

export default function BatchDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();

  const role = user?.labels?.[0]?.toLowerCase() || "unknown";

  const canAddEvent = ["producer", "exporter"].includes(role);

  return (
    <ScrollView className="flex-1 bg-primary px-4 py-6">
      {/* Header */}
      <Text className="text-light-100 text-2xl font-bold mb-1">
        {mockBatch.name}
      </Text>
      <Text className="text-light-300 mb-4">
        Type: {mockBatch.type} • Harvested: {mockBatch.harvestedAt}
      </Text>

      {/* Add Event Button */}
      {canAddEvent && (
        <Button
          title="Add Event"
          onPress={() => router.push("/events/new")}
          className="mb-6"
        />
      )}

      {/* Timeline */}
      <Text className="text-light-100 text-lg font-semibold mb-3">
        Traceability Events
      </Text>

      <View className="space-y-4">
        {mockEvents.map((event) => (
          <View
            key={event.id}
            className="bg-light-50 rounded-xl p-4 shadow-md"
          >
            <Text className="text-dark font-semibold">{event.type}</Text>
            <Text className="text-gray-700 text-sm mt-1">{event.notes}</Text>
            <Text className="text-gray-400 text-xs mt-2">
              Logged by: {event.createdBy} • {event.createdAt}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
