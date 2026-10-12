import { appError } from "../../../pkg/error/error.js";

export const OtpExpired = new appError('Your OTP has beed expired', 409)
export const OtpNotMatch = new appError('Your OTP not match', 404)

