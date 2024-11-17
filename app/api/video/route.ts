import ytdl from "ytdl-core";

export async function POST(req: Request): Promise<Response> {
   try {
      const { videoUrl, title } = await req.json();

      if (!videoUrl) {
         return new Response("Video URL missing", { status: 400 });
      }

      // Validate YouTube URL
      if (!ytdl.validateURL(videoUrl)) {
         return new Response("Invalid YouTube URL", { status: 400 });
      }

      // Create a Node.js readable stream using ytdl
      const videoStream = ytdl(videoUrl, { quality: "highest" });

      // Create a readable web stream
      const readableStream = new ReadableStream({
         start(controller) {
            videoStream.on("data", (chunk) => controller.enqueue(chunk));
            videoStream.on("end", () => controller.close());
            videoStream.on("error", (err) => {
               console.error("Stream error:", err);
               controller.error(err);
            });
         },
      });

      // Return the ReadableStream in the Response
      return new Response(readableStream, {
         headers: {
            "Content-Type": "video/mp4",
            "Content-Disposition": `attachment; filename="${title.replace(
               /[^\w\s-]/g,
               "",
            )}.mp4"`,
            "Transfer-Encoding": "chunked", // Ensure streaming response
         },
      });
   } catch (error) {
      console.error("Error in POST /api/video:", error);
      return new Response("Failed to process video download", { status: 500 });
   }
}
