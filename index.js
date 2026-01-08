const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const builder = new addonBuilder({
  id: "org.erwin.subtitle",
  version: "1.0.0",
  name: "Subtitle Indonesia Test",
  description: "Addon subtitle Indonesia",
  resources: ["subtitles"],
  types: ["movie", "series"],
  catalogs: []
});

builder.defineSubtitlesHandler(async ({ id, type }) => {
  console.log("📥 STREMIO REQUEST:", id, type);

  return {
    subtitles: [
      {
        id: "test-id",
        lang: "id",
        label: "Indonesia (TEST)",
        url: "https://raw.githubusercontent.com/andreyvit/subtitle-tools/master/sample.srt",
        mime: "application/x-subrip"
      }
    ]
  };
});

serveHTTP(builder.getInterface(), { port: 7000 });

console.log("✅ Addon running");
