import { nanoid } from 'nanoid'
import URL from "../model/url.js"

async function createShortUrl(req, res) {
  // ki form ke input mai name ="url" hona chahiye
  const userRedirectUrl = req.body;
  if (!userRedirectUrl.url) {
    //🐱‍🐉🐱‍🐉agar url ki jaha UserinputUrl fiya name mai to url nahi diya toh error
    return res.status(400).json({ error: "Url is required" });
  }
  const nanoUrlId = nanoid(8);
  await URL.create({
    shortUrlId: nanoUrlId,
    redirecturl: userRedirectUrl.url,
    visitedHist: [],
  });
  //to render ejs file use res.render("filename",{data}) as res.send ❌ by express
  return res.render("home",{shortUrlId: nanoUrlId});
  // res.status(201).json({ shortUrl: nanoUrlId });
}

async function createShortUrlApi(req, res) {
  const userRedirectUrl = req.body;
  if (!userRedirectUrl.url) {
    return res.status(400).json({ error: "Url is required" });
  }
  const nanoUrlId = nanoid(8);
  await URL.create({
    shortUrlId: nanoUrlId,
    redirecturl: userRedirectUrl.url,
    visitedHist: [],
  });
  res.status(201).json({ shortUrl: nanoUrlId });
}

async function getIdandRedirectUrl(req, res) {
  const shortid = req.params.id;
  const EntryObj = await URL.findOneAndUpdate(
    { shortUrlId: shortid },
    { $push: { visitedHist: { Timestamp: Date.now() } } },
    { new: true }
  );
  res.redirect(EntryObj.redirecturl);
}

async function urlAnalytics(req, res) {
  const shortid = req.params.id;
  const result = await URL.findOne({ shortUrlId: shortid });
  return res.json({
    TotalClicks: result.visitedHist.length,
    analytics: result.visitedHist,
  });
}

async function handleDelete(req,res){
  const shortid = req.params.id;
  try {
    await URL.findOneAndDelete({ shortUrlId: shortid });
    return res.status(201).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.error("Error fetching redirect URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  
 } 
}

async function handleAllDelete(req,res){
  try {
    await URL.deleteMany({});
    return res.status(201).json({ message: "Every thing is Deleted Successfully" });
  }catch(err){
    console.error("Error fetching redirect URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export { createShortUrl, createShortUrlApi , getIdandRedirectUrl, urlAnalytics, handleDelete , handleAllDelete};
