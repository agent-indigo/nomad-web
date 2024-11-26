const VERCEL_URL = process.env.VERCEL_URL ?? ''
const devUrl = 'http://localhost:3000'
const prodUrl = `https://${VERCEL_URL}`
const nextConfig = {
  env: {
    NEXT_PUBLIC_DOMAIN: VERCEL_URL === '' ? devUrl : prodUrl,
    NEXT_PUBLIC_API_DOMAIN: `${VERCEL_URL === '' ? devUrl : prodUrl}/api`,
    NEXTAUTH_URL: VERCEL_URL === '' ? devUrl : prodUrl
  }
}
export default nextConfig