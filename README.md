# 🌱 True Root — Supply Chain Traceability App

**True Root** is a mobile-first, full-stack traceability system that enables farmers, exporters, and buyers to record, track, and verify the entire lifecycle of agricultural or factory-based products — from origin to consumer — using QR codes, event logs, and secure role-based access.

## 🛠 Tech Stack

- **Frontend:** React Native + Expo (TypeScript)
- **Backend:** Appwrite Cloud (Auth, DB, Functions, Storage)
- **Styling:** NativeWind (TailwindCSS for React Native)
- **Routing:** `expo-router`
- **QR Scanning:** `expo-barcode-scanner`
- **Location:** `expo-location`
- **Testing:** Jest, React Native Testing Library

## ✅ MVP Features

- 🔐 Role-based authentication  
- 📦 Batch creation with unique IDs  
- 📄 Event logs with metadata + file support  
- 📍 Optional GPS tagging  
- 📷 QR code generation & scanning  
- 🧾 Timeline view of batch history  
- 🌐 Offline-ready architecture (coming soon)

## 🧩 Roles & Permissions

| Role      | Capabilities                                                       |
|-----------|---------------------------------------------------------------------|
| Producer  | Create product batches, log transformation events                  |
| Exporter  | Add shipping info, attach transport docs                           |
| Buyer     | Scan QR codes to view batch history                                |
| Admin     | Full visibility and control over system data                       |

## 🧬 Data Model

- **Users** (with role-based access)
- **Products** (optional grouping layer)
- **Batches** (trackable unit of goods)
- **Events** (transformation, shipment, grading, etc.)
- **QR Metadata** (links QR codes to batches)
- **Files** (attachments to events or batches)