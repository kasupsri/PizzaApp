import mongoose from "mongoose";
import Product from "./Product";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      max_length: 60,
    },
    address: {
      type: String,
      required: true,
      max_length: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
