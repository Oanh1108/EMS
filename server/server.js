import express from "express"
import cors from 'cors'
import multer from "multer";
import dotenv from 'dotenv'
import { connectDB } from "./cofig/db.js";
dotenv.config();
// import "dotenv/config";
import dns from 'dns'
dns.setServers(['1.1.1.1','8.8.8.8'])
import employeesRouter from "./routes/employeeRoutes.js";
import authRouter from "./routes/authRoutes.js";
import profileRouter from "./routes/profileRoutes.js";
import attendanceRouter from "./routes/attendanceRoutes.js";
import leaveRoute from "./routes/leaveRoutes.js";
import payslipRouter from "./routes/payslipsRoutes.js";
import dashboardRouter from "./routes/dashboardRoutes.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware
app.use(cors())
app.use(express.json())
app.use(multer().none())


// Routes
app.use("/api/employees", employeesRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/attendance", attendanceRouter);
app.use("/api/leaves", leaveRoute);
app.use("/api/payslips", payslipRouter);
app.use("/api/dashboard", dashboardRouter);

// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));

connectDB().then(()=>(
    app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`))
))

