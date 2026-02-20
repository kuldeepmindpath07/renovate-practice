const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.github.com");
    res.json({
      message: "Renovate Practice Project 🚀",
      github_status: response.status
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
