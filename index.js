require("dotenv").config({ path: "./config/.env" }); // config dotenv
require("./config/database").connect();

const app = require("./app");

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// unhandled rejection errors
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});
