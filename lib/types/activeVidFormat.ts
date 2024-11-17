export type VideoFormat = {
   approxDurationMs: string; // Duration of the video in milliseconds
   audioBitrate?: number; // Audio bitrate in kbps
   audioChannels?: number; // Number of audio channels
   audioCodec?: string; // Codec used for audio
   audioQuality?: string; // Quality description for audio
   audioSampleRate?: string; // Audio sample rate in Hz
   averageBitrate?: number; // Average bitrate in bps
   bitrate?: number; // Bitrate in bps
   codecs?: string; // Combined audio and video codecs
   container?: string; // Container format (e.g., mp4)
   contentLength?: string; // Content length in bytes
   fps?: number; // Frames per second
   hasAudio: boolean; // Indicates if format includes audio
   hasVideo: boolean; // Indicates if format includes video
   height?: number; // Height of the video in pixels
   isDashMPD: boolean; // DASH streaming format support
   isHLS: boolean; // HLS streaming format support
   isLive: boolean; // Indicates if it's a live video
   itag: number; // Format identifier
   lastModified?: string; // Last modified timestamp
   mimeType?: string; // MIME type for the format
   projectionType?: string; // Type of video projection
   quality?: string; // Quality description (e.g., "medium")
   qualityLabel?: string; // Human-readable quality label (e.g., "360p")
   url: string; // URL for the format
   videoCodec?: string; // Codec used for video
   width?: number; // Width of the video in pixels
};
