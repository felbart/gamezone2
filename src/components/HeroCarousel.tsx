import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import { Link } from "react-router";


export default function HeroCarousel() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=-added&page_size=3`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Erro ao buscar jogos em destaque:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div
      className="h-screen"
    >
      {games.map((game) => (  
        <div key={game.id}>
          <div
            className="relative h-screen w-full flex items-center justify-center text-white"
            style={{
              backgroundImage: `url(${game.background_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div className="relative z-10 text-center max-w-3xl px-4">
              <span className="text-sm uppercase tracking-widest text-amber-400">
                Destaque
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mt-4">
                {game.name}
              </h1>
              <p className="mt-4 text-lg text-gray-200">
                Avaliação: {game.rating}
              </p>
              <Link
                to={`/game/${game.id}`}
                className="inline-block mt-6 px-6 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition"
                >
                Ver mais
                </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
