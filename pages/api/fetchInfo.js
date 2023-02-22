import ytdl from "ytdl-core";

export default async function handler(req, res) {
   // const { url } = req.url;
   // console.log(url[0]);

   const vidId = await ytdl.getVideoID("https://youtu.be/JdOKdypKUjE");
   const vidInfo = await ytdl.getBasicInfo(vidId);
   const vidFormat = await ytdl.getInfo(vidId);
   const { videoDetails } = vidInfo;

   const { formats } = vidFormat;

   let activeVidFormats = [];
   let activeAudFormats = [];
   for (let k = 0; k < formats.length; k++) {
      const vidFormat = formats[k];
      if (vidFormat.hasVideo === true && vidFormat.hasAudio === true) {
         activeVidFormats.push(vidFormat);
      } else if (vidFormat.hasVideo === false && vidFormat.hasAudio === true) {
         activeAudFormats.push(vidFormat);
      }
   }

   const data = { videoDetails, formats, activeVidFormats, activeAudFormats };
   res.json({ data });
}
