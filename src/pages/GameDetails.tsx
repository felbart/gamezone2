import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Game } from "../types/Game"; 

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do jogo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Carregando detalhes...</p>;
  if (!game) return <p className="text-center mt-10">Jogo não encontrado.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
      <img src={game.background_image} alt={game.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{game.name}</h1>
      <p className="text-gray-600 mt-2">Nota: {game.rating}</p>
      <p className="mt-4 text-gray-800 leading-relaxed">{game.description_raw}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Plataformas:</h2>
        <ul className="list-disc list-inside text-gray-700">
          {game.platforms?.map((p) => (
            <li key={p.platform.id}>{p.platform.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
