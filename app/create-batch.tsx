import Button from "@/components/button";
import Input from "@/components/input";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

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
    <View className="p-4 flex-1 bg-primary">
      <Text className="text-light-100 text-xl mb-4">Register Batch</Text>

      <Input label="Batch Name" value={batchName} onChangeText={setBatchName} />
      <Input label="Product Type" value={productType} onChangeText={setProductType} />
      <Input label="Harvest Date" value={harvestDate} onChangeText={setHarvestDate} />

      <Button title="Submit Batch" onPress={handleSubmit} />
    </View>
  );
}
