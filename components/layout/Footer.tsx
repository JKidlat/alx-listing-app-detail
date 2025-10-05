// components/layout/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <div>© {new Date().getFullYear()} ListingApp. All rights reserved.</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
