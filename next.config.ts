import type { NextConfig } from "next";

// En-têtes de sécurité appliqués à toutes les pages.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Autorise l'accès au serveur de dev depuis un téléphone sur le même Wi-Fi.
  // 192.168.1.8 = adresse Wi-Fi du PC (elle peut changer : vérifier avec `ipconfig`).
  allowedDevOrigins: ["192.168.1.8", "169.254.83.141"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
