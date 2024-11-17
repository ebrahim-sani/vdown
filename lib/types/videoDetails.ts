export type VideoDetails = {
   age_restricted: boolean;
   allowRatings: boolean;
   author: Author;
   availableCountries: string[];
   category: string;
   channelId: string;
   chapters: Chapter[]; // If chapters are always an array
   description: string;
   dislikes: number | null;
   embed: {
      iframeUrl: string;
      width: number;
      height: number;
   };
   externalChannelId: string;
   hasYpcMetadata: boolean;
   isCrawlable: boolean;
   isFamilySafe: boolean;
   isLiveContent: boolean;
   isOwnerViewing: boolean;
   isPrivate: boolean;
   isShortsEligible: boolean;
   isUnlisted: boolean;
   isUnpluggedCorpus: boolean;
   keywords: string[];
   lengthSeconds: string; // Duration of the video in seconds
   likes: number | null;
   media: Record<string, unknown>; // Placeholder for media object if unknown
   ownerChannelName: string;
   ownerProfileUrl: string;
   publishDate: string; // ISO date format
   storyboards: Storyboard[]; // If storyboards are always an array
   thumbnails: Thumbnail[];
   title: string;
   uploadDate: string; // ISO date format
   videoId: string;
   video_url: string;
   viewCount: string; // View count as a string
};

type Chapter = {
   title: string;
   start_time: number; // Start time in seconds
} | null;

type Storyboard = {
   url: string;
   width: number;
   height: number;
   count: number;
   duration: number;
};

type Thumbnail = {
   url: string;
   width: number;
   height: number;
};

type Author = {
   id: string; // Unique identifier for the channel
   name: string; // Channel name
   user: string; // User handle (e.g., @PopcornPicksYT)
   user_url: string; // URL to the user profile
   channel_url: string; // URL to the YouTube channel
   external_channel_url: string; // Alternate channel URL
   subscriber_count: number; // Number of subscribers
   verified: boolean; // Verification status
   thumbnails: Thumbnail[]; // Array of thumbnails for the author
};
