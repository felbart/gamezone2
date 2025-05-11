import { useEffect, useState } from "react";
import type { Game } from "../types/Game";
import GameCard from "./GameCard";
import SectionTitle from "./SectionTitle";
import PlatformFilter from "./PlatformFilter";

type Platform = "all" | "pc" | "playstation" | "xbox";

const platformMap: Record<Platform, number | undefined> = {
  all: undefined,
  pc: 4,
  playstation: 18,
  xbox: 1,
};

export default function FeaturedGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [selected, setSelected] = useState<Platform>("all");

  useEffect(() => {
    const fetchFeatured = async () => {
      const platformParam = platformMap[selected]
        ? `&platforms=${platformMap[selected]}`
        : "";
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&ordering=-added&page_size=12${platformParam}`
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Erro ao buscar jogos em destaque:", error);
      }
    };

    fetchFeatured();
  }, [selected]);

  return (
    <section className="py-16 px-6">
  <div className="max-w-7xl mx-auto px-8 md:px-16">
    <SectionTitle
      subtitle="Descubra o que está bombando"
      title="Jogos em Destaque"
    />

    <PlatformFilter selected={selected} onSelect={setSelected} />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          image={game.background_image}
          rating={game.rating}
        />
      ))}
    </div>
  </div>
</section>
  );
}
