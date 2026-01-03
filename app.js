import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import tripRoutes from "./Routes/trip.routes.js";
import itineraryRoutes from "./Routes/itinerary.routes.js";
import cityRoutes from "./Routes/city.routes.js";
import activityRoutes from "./Routes/activity.routes.js";
import bugetRoutes  from "./Routes/budget.routes.js";
import shareRoutes from "./Routes/share.routes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/itineraries", itineraryRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/budgets", bugetRoutes);
app.use("/api/share", shareRoutes);

export default app;
