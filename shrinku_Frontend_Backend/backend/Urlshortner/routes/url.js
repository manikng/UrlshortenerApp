import express from 'express';
import { createShortUrl, createShortUrlApi, handleDelete, handleAllDelete, getIdandRedirectUrl } from "../controllers/url.js"; 
import { urlAnalytics } from '../controllers/url.js';
const router = express.Router();

// Route to create short URL
//🐱‍🐉🐱‍🐉 here / mean /url as we have used /url in index.mjs
//post req mai kya bhej rhe ho bo v imp hai 
//raw select kro and and then ek json object mai url send kro
//like {
//   "url": "http://www.google.com"
// }
router.post("/", createShortUrl);
router.post("/api", createShortUrlApi);


router.get("/analytics/:id", urlAnalytics);
router.delete("/del/:id",handleDelete);
router.delete("/delall",handleAllDelete);// /url/delall route pe call hue to sb delete ho jayega
export default router;