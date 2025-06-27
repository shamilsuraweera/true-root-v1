import Badge from "@/components/badge";
import Button from "@/components/button";
import Card from "@/components/card";
import { useAuth } from "@/contexts/authcontext";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useAuth();

  const name = user?.name || "User";
  const role = user?.labels?.[0]?.toLowerCase() || "producer"; // fallback for role

  return (
    <ScrollView className="flex-1 bg-primary p-4">
      {/* Header */}
      <View className="mb-6">
        <Text className="text-light-100 text-2xl font-bold mb-1">
          Welcome, {name}
        </Text>
        <Badge label={role.toUpperCase()} />
      </View>

      {/* Role-Based Actions */}
      <View className="space-y-4 mb-6">
        {role === "producer" && (
          <Button
            title="Create New Batch"
            onPress={() => router.push("/create-batch")}
          />
        )}

        {role === "exporter" && (
          <Button
            title="Add Shipment Event"
            onPress={() => router.push("/events/new")}
          />
        )}

        {["producer", "exporter", "buyer"].includes(role) && (
          <Button title="Scan QR Code" onPress={() => router.push("/scan")} />
        )}
      </View>

      {/* Recent Activity (static placeholder) */}
      <Text className="text-light-100 text-lg font-semibold mb-2">
        Recent Activity
      </Text>

      <Card
        title="Batch #001 – Cocoa Pods"
        subtitle="Created by: Shamil • 2 days ago"
      />
      <Card
        title="Batch #001 → Drying Event"
        subtitle="Logged by: Shamil • 1 day ago"
      />
      <Card
        title="Batch #001 → Shipped"
        subtitle="Logged by: Exporter Co. • 12 hours ago"
      />
    </ScrollView>
  );
}
