import type { JSX } from "react";
import { FaDesktop, FaGamepad, FaPlaystation, FaXbox } from "react-icons/fa";

type Platform = "all" | "pc" | "playstation" | "xbox";

type Props = {
  selected: Platform;
  onSelect: (platform: Platform) => void;
};

const platforms: { id: Platform; label: string; icon: JSX.Element }[] = [
  { id: "all", label: "Todos", icon: <FaGamepad size={18} /> },
  { id: "pc", label: "PC", icon: <FaDesktop size={18} /> },
  { id: "playstation", label: "PlayStation", icon: <FaPlaystation size={18} /> },
  { id: "xbox", label: "Xbox", icon: <FaXbox size={18} /> }, // até podemos substituir por outro ícone depois
];

export default function PlatformFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex md:justify-center justify-start gap-4 mb-10 flex-wrap">
      {platforms.map((p) => {
        const isActive = selected === p.id;

        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`flex items-center gap-2 px-5 py-2 text-sm transition font-mono uppercase font-bold hover:cursor-pointer
              ${
                isActive
                  ? "bg-gradient-to-r from-teal-500 to-indigo-500 text-white"
                  : "border border-gray-500 text-gray-300 hover:text-white hover:border-white"
              }`}
          >
            {p.icon}
            <span>{p.label}</span>
          </button>
        );
      })}
    </div>
  );
}
