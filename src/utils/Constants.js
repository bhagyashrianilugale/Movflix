
export const USER_AVATAR = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SEARCH_PAGE_BG_URL = "https://media.assettype.com/nationalherald%2F2020-10%2F9591d213-f9d1-4423-836e-38a0cb6be4ef%2Ffilm.jpg?rect=0%2C116%2C1200%2C675&auto=format%2Ccompress&fmt=webp&w=2560&h=1440";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFlYTcwNGU4N2FkNWYxZjRlODIzZDFhNjgxNDVmNCIsInN1YiI6IjY2NTQyNTVjZWNiNWNjOWE3OTMxYTUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WW75-2JQ8Fg_suEv2Hroq04MUaQ6GNH9-uRxTweXi2c'
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200";

export const SUPPORTED_LANG = [
  { identifier: "en",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "Hindi"
  },
  {
    identifier: "spanish",
    name: "Spanish"
  },
  {
    identifier: "french",
    name: "French"
  },
  {
    identifier: "marathi",
    name: "Marathi"
  },
  {
    identifier: "tamil",
    name: "Tamil"
  },
  {
    identifier: "gujarati",
    name: "Gujarati"
  },
  {
    identifier: "bhojpuri",
    name: "Bhojpuri"
  }
];


export const youTubeOpts = {
  height: '460',
  width: '799',
  playerVars: {
  autoplay: 1,          // Do not autoplay
  controls: 1,          // Hide controls
  modestbranding: 1,    // Minimal branding
  mute: 0,              // Do not mute the video
  start: 0,             // Start the video at 0 seconds
  end: 0, 
  rel: 1,              // End the video at the video's end
  playsinline: 1,       // Play inline on iOS
  cc_load_policy: 1,    // Do not show closed captions by default
  iv_load_policy: 3,    // Hide video annotations
  fs: 1,                // Hide fullscreen button
  disablekb: 1,         // Disable keyboard controls
}};


