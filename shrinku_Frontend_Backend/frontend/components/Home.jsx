import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
    const [AllUrls, setAllUrls] = useState([]);
    const [shortUrlId, setShortUrlId] = useState('');
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then((response) => {
                console.log("response ",response.data.Allurls);

                setAllUrls(response.data.Allurls);
            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);
console.log("the all urls ",AllUrls)

async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const url = formData.get("url");

    try {
        const response = await axios.post("http://localhost:8000/url/api", { url });
        console.log("Shortened URL: ", response.data);
        setShortUrlId( response.data.shortUrl);
    } catch (error) {
        console.error("There was an error creating the short URL!", error);
    }
}

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col items-center mb-4'>
           <div className='flex justify-center items-center w-full py-10'>
               <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-lg w-full max-w-lg'>
                   <label htmlFor="userinputurl" className='block text-lg font-semibold mb-4'>Enter your URL:</label>
                   <input className='border border-orange-400 rounded-md p-3 w-full mb-6' type="text" name="url" id="userinurl" placeholder="https://example.com" />
                   <button type="submit" className='w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300'>Generate Short URL</button>
               </form>
           </div>
            {shortUrlId && (
                <div className='bg-white p-4 rounded-lg shadow-md w-full max-w-lg my-4'>
                    <p className='text-center text-lg'>Generated short URL: <a href={`http://localhost:8000/url/${shortUrlId}`} className='text-blue-500 underline'>http://localhost:8000/url/{shortUrlId}</a></p>
                </div>
            )}
            <div className='w-full max-w-4xl mt-10 mb-4'>
                <table className='min-w-full bg-white rounded-lg shadow-md overflow-hidden'>
                    <thead className='bg-gray-800 text-white'>
                        <tr>
                            <th className='py-3 px-4'>S.no</th>
                            <th className='py-3 px-4'>Redirect URL</th>
                            <th className='py-3 px-4'>Short URL</th>
                            <th className='py-3 px-4'>Visits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllUrls.map((url, idx) =>  (
                            <tr key={idx} className='even:bg-gray-100'>
                                <td className='py-3 px-4 border-b'>{idx + 1}</td>
                                <td className='py-3 px-4 border-b'>{url.redirecturl}</td>
                                <td className='py-3 px-4 border-b'><a href={`http://localhost:8000/url/${url.shortUrlId}`} className='text-blue-500 underline'>http://localhost:8000/url/{url.shortUrlId}</a></td>
                                <td className='py-3 px-4 border-b'>{url.visitedHist.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home