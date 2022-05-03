import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 gap-6 px-8 py-16 mx-auto md:gap-4 bg-slate-100 md:justify-items-center md:px-26 md:grid-cols-4">
      <div>
        <h5 className="text-sm font-semibold ">About</h5>
        <div className="mt-3 space-y-2.5 text-xs text-gray-700">
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
      <div>
        <h5 className="text-sm font-semibold ">Support</h5>
        <div className="mt-3 space-y-2.5 text-xs text-gray-700">
          <p>Help Center</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Supporting people with disabilities</p>
        </div>
      </div>
      <div>
        <h5 className="text-sm font-semibold ">Hosting</h5>
        <div className="mt-3 space-y-2.5 text-xs text-gray-700">
          <p>Try hosting</p>
          <p>AirCover for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
      </div>
      <div>
        <h5 className="text-sm font-semibold ">Developers</h5>
        <div className="mt-3 space-y-2.5 text-xs text-gray-700">
          <p>Our API</p>
          <p>Documentation</p>
          <p>Sandbox</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
      </div>
    </footer>
  );
}
