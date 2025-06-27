// app/events/new.tsx
import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

export default function NewEventScreen() {
  const [eventType, setEventType] = useState("");
  const [notes, setNotes] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = () => {
    if (!eventType || !notes) {
      Alert.alert("Missing fields", "Please enter the event type and notes.");
      return;
    }

    const event = {
      type: eventType,
      notes,
      attachment,
    };

    console.log("📦 Submitting event:", event);

    // TODO: Save event to Appwrite DB
  };

  return (
    <View className="flex-1 bg-primary p-4">
      <Text className="text-light-100 text-xl mb-4">Add Event</Text>

      <Input
        label="Event Type (e.g. Drying, Shipping)"
        value={eventType}
        onChangeText={setEventType}
      />

      <Input
        label="Notes"
        value={notes}
        onChangeText={setNotes}
      />

      <Input
        label="Attached File (image/pdf)"
        value={attachment}
        onChangeText={setAttachment}
      />

      <Button title="Submit Event" onPress={handleSubmit} />
    </View>
  );
}
