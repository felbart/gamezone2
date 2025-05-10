import { Link } from "react-router";

type Props = {
  id: number;
  name: string;
  image: string;
  rating: number;
};

export default function GameCard({ id, name, image, rating }: Props) {
  return (
    <Link to={`/game/${id}`} className="block bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-600">Nota: {rating}</p>
      </div>
    </Link>
  );
}
