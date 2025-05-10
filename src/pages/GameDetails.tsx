import { useParams } from "react-router";

export default function GameDetails() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Detalhes do Jogo ID: {id}</h1>
      {/* Em breve: buscar detalhes da API usando o ID */}
    </div>
  );
}
