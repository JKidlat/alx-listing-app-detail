export interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: {
    city: string;
    country: string;
  };
  image: string;
  description: string;
  category: string[];
  reviews: ReviewProps[];
  price: number;
}
