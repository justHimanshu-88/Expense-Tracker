import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";


const generateAccessAndRefreshTokens = async (user) => {

    try {
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });

        return {
            accessToken, refreshToken
        };

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token");
    }

};

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

const loginUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;


    if (!(username || email)) throw new ApiError(400, "username or email is required");

    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) throw new ApiError(404, "User does not exists");

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) throw new ApiError(401, "Password Incorrect");

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, loggedInUser, "User logged In successfully"
        )
    );

});

const logoutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: null
            }
        }
    );

    const options = {
        httpOnly: true,
        secure: true
    };

    return res
    .status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, {}, "User logged Out Successfully")
    );

});

const refreshAccessToken = asyncHandler(async (req, res) => {

    try {
        const token = req.cookies.refreshToken;

        if (!token) throw new ApiError(401, "Unauthorized: Token not found");

        const decodedToken = jwt.verify(
            token,
            process.env.REFRESH_TOKEN_SECRET
        );

        const user = await User.findById(decodedToken?._id);

        if (!user) throw new ApiError(401, "Invalid refresh token");

        if (token !== user?.refreshToken) throw new ApiError(401, "Refresh token is expired or tampered");

        const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user);

        const options = {
            httpOnly: true,
            secure: true,
        };

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {},
                "Access token refreshed successfully"
            )
        );

    } catch (error) {
        throw new ApiError(401, error?.message || "invalid refresh token")
    }

});

const changeCurrentPassword = asyncHandler(async (req, res) => {

    const { oldPassword, newPassword } = req.body;
    
    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if (!isPasswordCorrect) throw new ApiError(400, "Invalid old Password");

    user.password = newPassword;
    await user.save({validateBeforeSave: false});

    return res
    .status(200)
    .json(
        new ApiResponse(200, {}, "Password changed successfully")
    );

});

const getCurrentUser = asyncHandler((req, res) => {

    return res
    .status(200)
    .json(
        new ApiResponse(200, req.user, "Current user fetched successfully")
    );
});

const updateAccountDetails = asyncHandler(async (req, res) => {

    const { fullname, username, email } = req.body;
    const user = req.user;

    if (fullname) user.fullname = fullname;
    if (username) user.username = username;
    if (email) user.email = email;

    const updatedUser = await user.save();

    return res
    .status(200)
    .json(
        new ApiResponse(200, updatedUser, "Account details updated successfully")
    );
});

const updateUserAvatar = asyncHandler(async (req, res) => {
    
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) throw new ApiError(400, "Avatar file is missing");

    const user = req.user;

    const oldAvatar = user.avatar;

    const newAvatar = await uploadOnCloudinary(avatarLocalPath);

    if (!newAvatar?.url) throw new ApiError(400, "Error while uploading on cloudinary");

    user.avatar = newAvatar.url;

    const updatedUser = await user.save({validateBeforeSave: false});

    // Deletion of Old Avatar

    const urlParts = oldAvatar.split("/");
    const filenameWithExt = urlParts[urlParts.length - 1];

    const publicId = filenameWithExt.split('.')[0];
    
    await cloudinary.uploader.destroy(publicId);
    
    return res
    .status(200)
    .json(
        new ApiResponse(200, updatedUser, "Avatar image updated successfully")
    );
});


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar
};