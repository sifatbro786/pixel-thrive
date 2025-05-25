/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            new URL(
                "https://media.istockphoto.com/id/1358784074/photo/spiral-with-blue-and-purple-glossy-blocks-abstract-illustration-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=Oqo8hZgFFglgyW_1Hc06XutyMt1jDRtW7-9noTJw_zE=",
            ),
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: "https",
                hostname: "www.freepik.com",
            },
        ],
    },
};

export default nextConfig;
