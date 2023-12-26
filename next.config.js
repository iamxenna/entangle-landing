/** @type {import("next").NextConfig} */
const withVideos = require("next-videos");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});
const { i18n } = require("./next-i18next.config");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPWA(
    withVideos({
      async headers() {
        return [
          {
            source: "/:all*(woff2|woff|ttf|eof)",
            locale: false,
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=9999999999, must-revalidate",
              },
            ],
          },
        ];
      },
      i18n,
      reactStrictMode: true,
    }),
  ),
);
