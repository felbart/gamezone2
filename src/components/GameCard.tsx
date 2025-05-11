import { Link } from "react-router";

type Props = {
  id: number;
  name: string;
  image: string;
  rating: number;
};

export default function GameCard({ id, name, image, rating }: Props) {
  return (
    <Link to={`/game/${id}`} className="block bg-white dark:bg-gray-800/50 hover:bg-gray-800 shadow rounded overflow-hidden hover:shadow-lg transition group">
      <div className="h-48 overflow-clip">
      <img src={image} alt={name} className="size-full object-cover group-hover:scale-110 transition-all duration-200 ease-in" />
      </div> 
      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-sm text-gray-600">Nota: {rating}</p>
      </div>
    </Link>
  );
}
