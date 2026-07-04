import express from 'express'
import { createLeave, getLeaves, updateLeaveStatus } from '../controllers/leaveController.js';

const leaveRoute = express.Router();

leaveRoute.get("/", getLeaves);
leaveRoute.post("/", createLeave);
leaveRoute.patch("/:id", updateLeaveStatus);

export default leaveRoute;