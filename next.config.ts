import {NextConfig} from 'next'
import {Rewrite} from 'next/dist/lib/load-custom-routes'
const domain: string = process.env.VERCEL_URL ?? process.env.DOMAIN ?? 'localhost:3000'
const url: string = `http${domain === 'localhost:3000' ? '' : 's'}://${domain}`
const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_DOMAIN: url,
    NEXT_PUBLIC_API_DOMAIN: `${url}/api`,
    NEXTAUTH_URL: url,
    NEXTAUTH_SECRET: process.env.AUTH_SECRET ?? 'd3v3l0pm3nt53cr3tk3yn0t53cur3@t@11n3v3ru53!npr0duct!0n3v3r!!!'
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: '**'
    }]
  },
  output: process.env.VERCEL_URL ? undefined : 'standalone',
  reactStrictMode: true,
  generateBuildId: (): string => `nomad-web-${Date.now()}`,
  rewrites: async (): Promise<Rewrite[]> => [{
    source: '/nomad/_next/:path*',
    destination: '/_next/:path*'
  }, {
    source: '/.well-known/:path*',
    destination: '/api/ap/well-known/:path*'
  }, {
    source: '/.wellknown/:path*',
    destination: '/api/ap/well-known/:path*'
  }, {
    source: '/users/:path*',
    destination: '/api/ap/users/:path*'
  }, {
    source: '/inbox',
    destination: '/api/ap/inbox'
  }, {
    source: '/nodeinfo',
    destination: '/api/ap/nodeinfo'
  }]
}
export default nextConfig