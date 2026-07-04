import express from 'express'
import { createLeave, getLeaves, updateLeaveStatus } from '../controllers/leaveController.js';
import { protect, protectAdmin } from '../middleware/auth.js';

const leaveRoute = express.Router();

leaveRoute.get("/", protect, getLeaves);
leaveRoute.post("/", protect, createLeave);
leaveRoute.patch("/:id", protect, protectAdmin,updateLeaveStatus);

export default leaveRoute;