/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"]
    },
    env: {
        siteTitle: "Steve Lutz Dev",
        siteDescription:
            "Steve Lutz Dev Portfolio.",
        siteKeywords:
            "Personal portfolio, landing page, page template, developer portfoliom designer portfolio",
        siteUrl: "https://stevelutz.dev",
        siteImagePreviewUrl: "images/lane.png",
        twitterHandle: "@coasttocoastdev__"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
