import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


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


export {
    registerUser,
    loginUser,
    logoutUser
};