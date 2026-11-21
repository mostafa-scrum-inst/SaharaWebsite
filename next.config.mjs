// Static export for GitHub Pages.
// NEXT_PUBLIC_BASE_PATH is set by the deploy workflow to "/<repo>" for project
// pages, and left empty for a custom domain (e.g. saharagroup.org) or local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
