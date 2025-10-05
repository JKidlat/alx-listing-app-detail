// components/layout/Header.tsx
import Link from "next/link";
import React from "react";

const types = ["Rooms", "Villa", "Mansion", "Countryside", "Apartment"];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="text-2xl font-bold text-indigo-600">ListingApp</a>
          </Link>

          <div className="hidden md:flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-full">
            <input
              className="bg-transparent outline-none text-sm w-56"
              placeholder="Search city, property..."
              aria-label="Search"
            />
            <button className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
              Search
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-3 text-sm text-gray-600">
            {types.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full hover:bg-gray-100 cursor-pointer">
                {t}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="#">
              <a className="text-sm text-gray-700 hover:underline">Sign in</a>
            </Link>
            <Link href="#">
              <a className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-full">Sign up</a>
            </Link>
          </div>
        </div>
      </div>

      {/* small-screen search area */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-3 py-2"
            placeholder="Search city, property..."
            aria-label="mobile-search"
          />
          <button className="bg-indigo-600 text-white px-3 py-2 rounded">Go</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
