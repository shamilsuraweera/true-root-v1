# 🌱 True Root — Traceability App (MVP)

**True Root** is a full-stack, mobile-first app that enables transparent lifecycle traceability for products across agricultural and factory-based supply chains. It leverages QR codes, event logging, and role-based access to ensure accountability from origin to end-user.

---

## 🚀 Project Goal

The goal of this MVP is to build a **modular, open-source system** where Producers, Exporters, Buyers, and Admins can:

- Record product batches and their transformations
- Log trace events (e.g., drying, packaging, shipping)
- Scan QR codes to view product history
- Access only the data relevant to their role

---

## ⚙️ Tech Stack

| Layer           | Stack                                                                 |
|----------------|-----------------------------------------------------------------------|
| **Frontend**    | React Native + Expo (TypeScript)                                      |
| **Styling**     | TailwindCSS via NativeWind                                            |
| **Routing**     | `expo-router`                                                         |
| **State**       | React Context (Auth), optional Zustand for global state               |
| **Backend**     | [Appwrite Cloud](https://appwrite.io) (auth, database, storage, etc.) |
| **Auth**        | Appwrite Account + Session-based login                                |
| **QR Codes**    | `expo-barcode-scanner`                                                |
| **Location**    | `expo-location` (optional for event GPS)                              |
| **Storage**     | Appwrite File Storage (PDFs, images)                                  |
| **Dev Env**     | Docker DevContainer (VS Code)                                         |
| **Testing**     | Jest + React Native Testing Library                                   |

---

## 📁 Folder Structure
