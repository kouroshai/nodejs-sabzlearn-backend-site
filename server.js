const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;


//!connect to DB
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); // برای جلوگیری از اجرای سرور در صورت قطع بودن مونگو
  }
})();


//! saidiraad code
// (async () => {
//   await mongoose.connect(process.env.MONGO_URI);
//   console.log("MongoDB Connected :))");
// })();

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
