// backend/routes/auth.js
import express from "express";
import { getAuth } from "firebase-admin/auth";
import User from "../models/User.js";

const router = express.Router();

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { token } = req.body;

  try {
    const decodedToken = await getAuth().verifyIdToken(token);
    const { uid, email, name, picture } = decodedToken;

    let user = await User.findOne({ uid });

    if (!user) {
      user = await User.create({ uid, email, name, avatar: picture });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
