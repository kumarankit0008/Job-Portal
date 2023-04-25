const express = require("express");
const mongoose = require("mongoose");
// const multer = require("multer");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("uploads")); //image upload
app.use(cookieParser());
app.use(cors());
// database connection is here
const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("MongoDB connnected"));
mongoose.connection.on("error", (error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ success: "server is running" });
});

//import all routes 
const blogsRoute = require("./routers/blogsRoute");
const userRoute = require("./routers/userRoute");
const adminUsers = require("./routers/adminUsers");
const searchRoute = require("./routers/searchRoute");
const roleAuthCheck = require("./Middlewares/roleAuthCheck"); //role checking middleware
const emailCampaign = require("./routers/emailCampaignRoute"); //email campaign imported
const category = require("./routers/categoryRoute");
const jobRoute = require("./routers/jobRoute");
const applicantRoute = require("./routers/applicantRouter");
const recruiterRoute = require("./routers/recruiterRouter");
const featureJobsRoute = require("./routers/featureJobsRoute");
const createPayment = require("./routers/createPaymentRoute");
// create all routes here
app.use("/api/blogs", blogsRoute); //dynamic blog post
app.use("/api/admin", roleAuthCheck, adminUsers); //admin user route
app.use("/api/email-campaign", emailCampaign); //for email campaign
app.use("/api/user", userRoute); //for login and register
app.use("/api/search", searchRoute); //for search result
app.use("/api/jobs/", jobRoute);
app.use("/api/category/", category);
app.use("/api/applicant/", applicantRoute);
app.use("/api/recruiter/", recruiterRoute);
app.use("/api/feature/jobs", featureJobsRoute);
app.use("/api/create-payment", createPayment);

// All default error handling function
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  } else {
    res.status(500).json({ error: err });
  }
}
app.use(errorHandler);
app.listen(PORT, () => {
  console.log("app is listening on port 4000");
});
