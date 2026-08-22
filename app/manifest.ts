import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MARK Capital Management",
    short_name: "MARK",
    description:
      "MARK is an independent, pan-European real estate investment and asset manager, managing private real estate across Europe since 2004.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f3f3",
    theme_color: "#181818",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
