//note nanoid is es5 hai  module so .js extension dena must hai
//and package.json mai type:module and
//sari require() ko replace import se as ES mai require() nahi chalta

//all imports
import express from "express";
import mongoDbConnection from "./dbconnection.js";
import urlRouter from "./routes/url.js";
import { urlAnalytics } from "./controllers/url.js";
import staticRouter from "./routes/staticRoutes.js";
import URL from "./model/url.js";
import path from "path";

import cors from "cors";

//for ejs 1. app ke views mai ejs ko set 2.and sari ejs file(views) kahan hai ye batana padega
//3.but path ke liye path module and path.resolve(__dirname, 'views') use karna padega
//4. and res.render("filename") use karna padega
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));


// Increase the maximum number of listeners to avoid the MaxListenersExceededWarning
// EventEmitter.defaultMaxListeners = 15;

//Connection to the database
mongoDbConnection("mongodb://127.0.0.1:27017/urlshortener")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to database", error);
  });

//Middleware : whenerever dealing with urls we have to use
//🐱‍🐉🐱‍🐉middleware urlencoded and json to parse the data
// app.use(express.urlencoded({extended:true}));
app.use(express.json()); //to support json data
app.use(express.urlencoded({ extended: false })); //to support form data

//routes
app.use("/url", urlRouter);
app.use("/", staticRouter); // Home page route

app.get("/url/analytics/:id", urlAnalytics);

//redirect the user to the original URL with shorturl
app.get("/url/:id", async (req, res) => {
  const shortid = req.params.id;

  try {
    const EntryObj = await URL.findOneAndUpdate(
      { shortUrlId: shortid },
      { $push: { visitedHist: { Timestamp: Date.now() } } },
      { new: true } // Return the updated document
    );

    if (!EntryObj) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(EntryObj.redirecturl);
  } catch (error) {
    console.error("Error fetching redirect URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

app.get("/test", async (req, res) => {
  const urls = await URL.find({});
  //   console.log("urls data", urls);
  // To see the data type
  //   console.log("urls datatype", urls);
  return res.render("home", { Allurls: urls });
});

app.get("/api/test", async (req,res)=>{
  res.json({message:"Hello from API testing nodejs +vite +ejs integration"}) 
})