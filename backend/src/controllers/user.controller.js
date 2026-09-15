import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

    const { username, fullname, email, password } = req.body;

    // console.log({ username, fullname, email, password })
    // console.log(req.file)

    if (
        [username, fullname, email, password].some(field => field.trim() === "")
    ) { 
        throw new ApiError(400, "All fields are required");
    };

    const userAlreadyExists = await User.exists({
        $or: [{ email }, { username }]
    });

    if (userAlreadyExists) throw new ApiError(409, "User with email or username already exists");

    const avatarLocalPath = req.file?.path;

    const avatar = await uploadOnCloudinary(avatarLocalPath);

    const user = await User.create({
        username,
        fullname,
        email,
        password,
        avatar: avatar?.url || ""
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) throw new ApiError(500, "something went wrong while registering the User");

    return res.status(201).json(
        new ApiResponse(
            200,
            createdUser,
            "User registered successfully"
        )
    );

});

export {
    registerUser
};