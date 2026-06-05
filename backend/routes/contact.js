const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await Contact.create({
      name,
      email,
      message
    });

    res.json({
      success: true
    });

  } catch (error) {
    res.status(500).json({
      success: false
    });
  }
});

module.exports = router;