import ytdl from "ytdl-core";

export const fetchData = async (url) => {
   const vidId = await ytdl.getVideoID(url);
   const vidInfo = await ytdl.getBasicInfo(vidId);
   const vidFormat = await ytdl.getInfo(vidId);
   const { videoDetails } = vidInfo;

   const {
      player_response: {
         streamingData: { adaptiveFormats },
      },
      formats,
   } = vidFormat;

   const qualityLabels = new Set();
   const filteredFormats = [];

   console.log(vidFormat);

   for (const item of adaptiveFormats) {
      if (!qualityLabels.has(item.qualityLabel)) {
         qualityLabels.add(item.qualityLabel);
         filteredFormats.push(item);
      } else {
         for (const result of filteredFormats) {
            if (result.qualityLabel === item.qualityLabel) {
               if (item.itag < result.itag) {
                  result.itag = item.itag;
               }
               break;
            }
         }
      }
   }

   return { videoDetails, filteredFormats, formats };
};
