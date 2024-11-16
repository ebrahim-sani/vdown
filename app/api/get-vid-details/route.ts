import ytdl, { videoInfo } from "ytdl-core";

export async function POST(req: Request): Promise<Response> {
   if (req.method !== "POST") {
      return new Response(
         JSON.stringify({ message: "Method not allowed!", statusCode: 405 }),
         { status: 405 },
      );
   }

   try {
      // Parse request body
      const { vidId }: { vidId: string } = await req.json();

      // Fetch video details and formats
      const vidInfo: videoInfo = await ytdl.getBasicInfo(vidId);
      const vidFormat: videoInfo = await ytdl.getInfo(vidId);
      const { videoDetails } = vidInfo;
      const { formats } = vidFormat;

      // Filter formats into active video and audio formats
      const activeVidFormats = formats.filter((f) => f.hasVideo && f.hasAudio);
      const activeAudFormats = formats.filter((f) => !f.hasVideo && f.hasAudio);

      // Structure response data
      const data = {
         videoDetails,
         formats,
         activeVidFormats,
         activeAudFormats,
      };
      return Response.json(data);
   } catch (error) {
      console.log("Error processing video information:", error);
      return new Response(
         JSON.stringify({
            message: "Error processing request",
            statusCode: 500,
         }),
         { status: 500 },
      );
   }
}
