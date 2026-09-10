import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ["Income", "Expense"],
            required: true
        },
        category: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Transaction = mongoose.model("Transaction", transactionSchema);