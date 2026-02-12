import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Manus OAuth service is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OAuth server running on port ${PORT}`);
});
