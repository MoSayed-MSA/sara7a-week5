import { Router } from 'express';
import * as authController from './controller/auth.controller.js';
import { withCache } from '../../lib/cache/withCashe.middleware.js';
import { idempotency } from '../../lib/idempotency/idempotency.js';

const authRouter = Router();

authRouter.post('/register', authController.register);
authRouter.patch('/verify', authController.verifyOtp);
authRouter.post('/signin', authController.signIn);
authRouter.post('/send-otp', authController.sendOtp);
authRouter.patch('/reset-pass', idempotency(), authController.forgetPassword);
authRouter.post('/login-with-google', authController.loginWithGoogle);
authRouter.get('/users', withCache(60), authController.getAllUsers);

export default authRouter;