import NextCors from "nextjs-cors";
import ytdl from "ytdl-core";

async function downloadVideo(videoUrl, videoFormat, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   // await NextCors(videoUrl, res, {
   //    // Options
   //    methods: ["GET"],
   //    origin: "*",
   //    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   // });

   const res = await ytdl(videoUrl);

   // Rest of the API logic
   res.json({ message: "Hello NextJs Cors!" });
}

export default downloadVideo;
