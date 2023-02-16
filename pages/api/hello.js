// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ytdl from "ytdl-core";
import fs from "fs";

export default async function handler(videoUrl, videoName) {
   try {
      const res = await ytdl(videoUrl).pipe(
         fs.createWriteStream(`${videoName}.mp4`),
      );
   } catch (err) {
      console.log(err);
   }
}
