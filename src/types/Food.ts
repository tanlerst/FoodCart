export type Food = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image: string;
  category: {
    name: string;
  };
  time: number;
};
