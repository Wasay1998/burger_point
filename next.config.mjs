/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "img.freepik.com"
            },
            {
                protocol: "https",
                hostname: "static.vecteezy.com"
            },
            {
                protocol:"https",
                hostname:"img.icons8.com"
            }
            
        ]
    }
};

export default nextConfig;
