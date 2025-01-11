========PROJECT SUCCESS ======
TODO : implement ui with react also (IN D DRIVE)
1.//since nanoid npm package is ES module type due to this
2.all the require must be replaced by import as require is not used in that ES version
3.you have to make index.js to index.mjs
and while giving path to all you must give 
'./dbconnection.js'✅ and './dbconnection' ❌ code will give error
4.whenever you got request could not be sended :mean you have declared a wrong path or 
there exist some issues on right path or route you have to check it by give 
full path 
5.here module.exports ki bjay use export like
--export { createShortUrl };
export { getIdandRedirectUrl };
export { urlAnalytics };

==export default router;

--like things if respond not send its mean there is issue with code with that route 
most likely you have used wrong db method or using it in a wrong way 
6.for example i got error : 
url.js
The issue is likely due to the incorrect usage of the URL.findOne method. The correct way to query the database is to use the field name as the key in the query object. Additionally, there is a mistake in the getIdandRedirectUrl function where the update operation is not correctly structured. Here are the necessary changes:

url.js
Changes made:

Corrected the query object in getIdandRedirectUrl and urlAnalytics to use { shortUrlId: shortid }.
Fixed the update operation in getIdandRedirectUrl to properly push the timestamp into the visitedHist array.
 =\-\=\FIX : MODEL.findOne{ shortUrlId: shortid }✅ instead of MODEL.findOne{ shortid } ❌
 much more learn in this
 7.understanding how version can affect the whole developement process as
  i cann't use require ,full path given ,export default ABCD OR 
  export {ABCD};
  export {ABCD2}...
   one by one 
   8.ok good bye🐱‍👓😃