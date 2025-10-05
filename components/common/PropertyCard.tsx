// components/common/PropertyCard.tsx
import React from "react";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const { name, image, price, rating, address, discount, category } = property;

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden">
      <div className="relative h-44 sm:h-56 md:h-44 lg:h-48">
        {/* use external image url - replace with <Image /> if using next/image and remote domains set */}
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">
              {address.city}, {address.state}
            </p>
            <div className="mt-2 flex gap-2 flex-wrap">
              {category.slice(0, 3).map((c) => (
                <span key={c} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${price}</div>
            <div className="text-sm text-gray-500">/night</div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.868 1.402-8.168L.132 9.21l8.2-1.192z" />
            </svg>
            <span>{rating}</span>
          </div>

          <div className="text-sm text-gray-500">
            <span className="mr-2">Beds: {property.offers.bed}</span>
            <span>Shw: {property.offers.shower}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
