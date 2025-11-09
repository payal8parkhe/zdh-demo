const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Hello From Zero Downtime Hub!</h1>
    <p>This app was deployed via API.</p>
    <p>Time: ${new Date().toLocaleString()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
