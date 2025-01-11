import express from 'express'
import URL from "../model/url.js";


const router = express.Router()
router.get("/",async (req, res) => {
    const urls = await URL.find({});
    return res.render("home",{Allurls:urls});//ye data locals mai store ho jayega
    //so u can use if(locals.Allurls.length>0) in ejs file taki if ye na ho to bo chij
    //rende na ho aur Allurls are not define error na ayae
  });

  router.get("/api",async (req, res) => {
    const urls = await URL.find({});
    return res.send({Allurls:urls});//ye data locals mai store ho jayega
    //so u can use if(locals.Allurls.length>0) in ejs file taki if ye na ho to bo chij
    //rende na ho aur Allurls are not define error na ayae
  });
export default router;