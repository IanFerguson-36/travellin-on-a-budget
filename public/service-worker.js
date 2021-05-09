const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "db.js",
  "favicon.ico",
  "index.js",
  "manifest.webmanifest",
  "service-worker.js",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "styles.css",
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((result) => {
        console.log("Files have been pre-cached successfully!");
        caches
          .addAll(FILES_TO_CACHE)
          .THEN((RESULT) => {
            console.log("the result of the add all is", result);
          })
          .catch((err) => {
            console.log("Add all error: ", err);
          });
      })
      .catch((err) => {
        console.log(err);
      })
  );
  self.skipWaiting();
});
