import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Transaction } from "../models/transaction.model.js";

const createTransaction = asyncHandler(async (req, res) => {

    const { user, title, amount, type, category, date } = req.body;

    if (
        [user, title, amount, type, category, date].some(field => field?.trim() === "" || field === undefined)
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const createdTransaction = await Transaction.create({
        user,
        title,
        amount,
        type,
        category,
        date
    });

    if (!createdTransaction) throw new ApiError(500, "something went wrong while saving the transaction");

    return res
        .status(201)
        .json(
            new ApiResponse(
                200,
                createdTransaction,
                "Transaction created successfully"
            )
        );
});

const updateTransaction = asyncHandler(async (req, res) => {

    const transactionId = req.params.id;
    const { title, amount, type, category, date } = req.body;

    if (!transactionId) throw new ApiError(400, "Transaction id is required");

    const transaction = await Transaction.findById(transactionId);

    if (!transaction) throw new ApiError(404, "Transaction does not exists");

    if (title?.trim()) transaction.title = title;
    if (amount?.trim()) transaction.amount = amount;
    if (type?.trim()) transaction.type = type;
    if (category?.trim()) transaction.category = category;
    if (date?.trim()) transaction.date = date;

    const updatedTransaction = await transaction.save({ validateBeforeSave: false });

    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedTransaction, "Transaction updated successfully")
        );
});

const deleteTransaction = asyncHandler(async (req, res) => {

    const transactionId = req.params.id;

    if (!transactionId) throw new ApiError(400, "Transaction id is required");

    const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);

    if (!deletedTransaction) throw new ApiError(404, "Transaction not found");

    return res
        .status(200)
        .json(
            new ApiResponse(200, deletedTransaction, "Transaction deleted successfully")
        );
});


export {
    createTransaction,
    updateTransaction,
    deleteTransaction
}