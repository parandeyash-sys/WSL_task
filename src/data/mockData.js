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
      "Host will consider Transperent Detail Documents - provides the patient's transperent details for authorized medical use.",
    ],
    forbiddenMessage: "No forbidden items avaliable"
  },
  guest: {
    name: "Meghana",
    type: "Guest",
    lockerId: "locker_meghana_441",
    obligations: [
      "Guest shall share ID Proof - KYC verification of Patient",
      "Guest shall share Insurance Policy Document - To verify that patient has an insurance plan"
    ],
    forbiddenMessage: "No forbidden items avaliable"
  }
};
