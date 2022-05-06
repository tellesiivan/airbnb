/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoidGVsbGVzaWl2YW4iLCJhIjoiY2tuZXl0NnUyMGRmODJxcGU3a3l2N3BmbyJ9.t547vHO7WqXNCKvROzms-g",
  },
};

module.exports = nextConfig;
