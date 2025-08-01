/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: 'standalone',
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyCRcFaSNYSTTSGVQ0jg7LGQabN7GfPN-rU",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "projeto-micronegocio.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "projeto-micronegocio",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "projeto-micronegocio.firebasestorage.app",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "1089524937822",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:1089524937822:web:6e5c6be3ff400bb13f30cf",
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: "G-J8Z5RE4XTD",
  },
};

module.exports = nextConfig;