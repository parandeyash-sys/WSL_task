export const connectionData = {
  id: "conn_001",
  name: "Patient Health Records Connection",
  description: "Secure data exchange for patient medical history and diagnostics.",
  status: "Established",
  host: {
    name: "Kaveri Hospital",
    type: "Host",
    lockerId: "locker_kaveri_092",
    obligations: [
      "Ensure 99.9% availability of health record endpoints.",
      "Encrypt all data in transit using TLS 1.3.",
      "Maintain audit logs of all access requests for 2 years.",
      "Provide a recovery mechanism for lost data keys."
    ],
    forbidden: [
      "Sharing patient data with third-party marketing agencies.",
      "Storing raw biometric data in unencrypted format."
    ]
  },
  guest: {
    name: "Meghana",
    type: "Guest",
    lockerId: "locker_meghana_441",
    obligations: [
      "Use data only for intended medical consultation purposes.",
      "Notify host immediately of any credential compromise.",
      "Do not store downloaded records on public cloud storage."
    ],
    forbidden: [] // Testing the "if available" condition
  }
};
