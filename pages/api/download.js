// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ytdl from "ytdl-core";

// export default async function handler(videoUrl, videoFormat, videoName) {
//    try {
//       const res = await ytdl(videoUrl);
//    } catch (err) {
//       console.log(err);
//    }
// }

import NextCors from "nextjs-cors";

export default async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
      // Options
      methods: ["GET"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   await ytdl(videoUrl);

   // Rest of the API logic
   res.json({ message: "Hello NextJs Cors!" });
}
