import { useEffect, useState } from "react";
import type { Game } from "../types/Games";
import GameCard from "../components/GameCard";


const Home = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('https://api.rawg.io/api/games?key=9211533d711b4af58b476d0080661207&page_size=12');
                const data = await response.json();
                setGames(data.results);
            } catch (error) {
                console.error("Erro ao buscar jogos:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchGames()
    }, [])

    if (loading) return <div className="h-screen flex items-center justify-center mx-auto"><p className="text-3xl text-center font-bold ">Carregando jogos...</p></div>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} id={game.id} name={game.name} image={game.background_image} rating={game.rating} />
      ))}
    </div>
  )
}

export default Home