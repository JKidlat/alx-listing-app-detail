// pages/index.tsx
import { useMemo, useState } from "react";
import { PROPERTYLISTINGSAMPLE, HERO_IMAGE } from "@/constants";
import type { PropertyProps } from "@/interfaces";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Free Reschedule",
  "Pool",
  "Beachfront",
  "Pet Friendly",
  "Mountain View"
];

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (label: string) => {
    setActiveFilters((prev) => (prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]));
  };

  // Filter properties by whether any category includes the filter label (simple contain)
  const filteredProperties = useMemo(() => {
    if (activeFilters.length === 0) return PROPERTYLISTINGSAMPLE;
    return PROPERTYLISTINGSAMPLE.filter((p) =>
      activeFilters.every((f) => p.category.some((c) => c.toLowerCase().includes(f.split(" ")[0].toLowerCase())))
    );
  }, [activeFilters]);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative h-64 md:h-96 flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(6,21,64,0.45), rgba(6,21,64,0.45)), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-semibold">Find your favorite place here!</h1>
          <p className="mt-3 text-sm md:text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <input
              className="w-full max-w-xl px-4 py-2 rounded-l-full outline-none text-gray-700"
              placeholder="Search by city, landmark, or property name..."
            />
            <button className="px-4 py-2 bg-indigo-600 rounded-r-full text-white">Search</button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mt-6">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((label) => (
            <Pill key={label} label={label} onClick={toggleFilter} active={activeFilters.includes(label)} />
          ))}
        </div>
      </section>

      {/* Listing */}
      <section className="container mx-auto px-4 mt-6 pb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Available Properties</h2>
          <div className="text-sm text-gray-600">{filteredProperties.length} stays</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property: PropertyProps, idx: number) => (
            <PropertyCard key={idx} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
