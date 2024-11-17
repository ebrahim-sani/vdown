import ytdl from "ytdl-core";

export async function POST(req: Request): Promise<Response> {
   try {
      const { videoId }: { videoId: string } = await req.json();

      if (!ytdl.validateID(videoId)) {
         return new Response(
            JSON.stringify({ message: "Invalid video ID", statusCode: 400 }),
            { status: 400 },
         );
      }

      const vidInfo = await ytdl.getBasicInfo(videoId);
      const vidFormat = await ytdl.getInfo(videoId);

      const { videoDetails } = vidInfo;
      const { formats } = vidFormat;

      const activeVidFormats = formats.filter((f) => f.hasVideo && f.hasAudio);
      const activeAudFormats = formats.filter((f) => !f.hasVideo && f.hasAudio);

      const data = {
         videoDetails,
         formats,
         activeVidFormats,
         activeAudFormats,
      };

      return Response.json(data);
   } catch (error) {
      console.error("Error fetching video info:", error);
      return new Response(
         JSON.stringify({
            message: "Failed to fetch video info",
            statusCode: 500,
         }),
         { status: 500 },
      );
   }
}
