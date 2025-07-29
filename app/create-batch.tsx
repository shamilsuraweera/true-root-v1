import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function CreateBatch() {
  const [batchName, setBatchName] = useState("");
  const [productType, setProductType] = useState("");
  const [harvestDate, setHarvestDate] = useState("");

  const handleSubmit = () => {
    if (!batchName || !productType || !harvestDate) {
      Alert.alert("Missing info", "Please fill out all fields.");
      return;
    }

    const batch = {
      name: batchName,
      type: productType,
      harvestedAt: harvestDate,
    };

    console.log("📦 Submitting batch:", batch);

    // TODO: submit to Appwrite database here
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1 bg-primary"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center px-4 py-12">
          <View className="w-full max-w-md bg-light-50 rounded-2xl p-6 shadow-lg">
            <Text className="text-2xl font-bold text-light-100 mb-6 text-center">
              Register Batch 🌾
            </Text>

            <Input
              label="Batch Name"
              value={batchName}
              onChangeText={setBatchName}
            />

            <Input
              label="Product Type"
              value={productType}
              onChangeText={setProductType}
            />

            <Input
              label="Harvest Date"
              value={harvestDate}
              onChangeText={setHarvestDate}
            />

            <Button title="Submit Batch" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
