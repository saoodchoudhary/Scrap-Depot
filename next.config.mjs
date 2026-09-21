/** @type {import('next').NextConfig} */
const nextConfig = {
  // nodemailer is a server-only dependency; leave it to Node rather than bundling it.
  serverExternalPackages: ["nodemailer"],
};

export default nextConfig;
