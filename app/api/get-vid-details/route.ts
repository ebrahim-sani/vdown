import ytdl, { videoInfo } from "ytdl-core";

export async function POST(req: Request): Promise<Response> {
   if (req.method !== "POST") {
      return new Response(
         JSON.stringify({ message: "Method not allowed!", statusCode: 405 }),
         { status: 405 },
      );
   }

   try {
      const { id }: { id: string } = await req.json();

      const vidInfo: videoInfo = await ytdl.getBasicInfo(id);
      const vidFormat: videoInfo = await ytdl.getInfo(id);
      const { videoDetails } = vidInfo;
      const { formats } = vidFormat;

      const activeVidFormats = formats.filter((f) => f.hasVideo && f.hasAudio);
      const activeAudFormats = formats.filter((f) => !f.hasVideo && f.hasAudio);

      console.log(activeVidFormats);

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
