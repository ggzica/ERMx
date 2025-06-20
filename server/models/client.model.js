import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: [true, "First Name is required"] },
    lastName: { type: String, required: [true, "Last Name is required"] },
    dateOfBirth: { type: Date, required: [true, "Date Of Birth is required"] },
    ramqNbr: { type: String, required: false },
    address: { type: String, required: false },
    gender: { type: String, required: false },
    insuranceNbr: { type: String, required: false },
    emailAddress: { type: String, required: false },
    phoneNbr: { type: String, required: false },
    charts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chart",
      },
    ],
    active: { type: Boolean, default: true },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
export default Client;
