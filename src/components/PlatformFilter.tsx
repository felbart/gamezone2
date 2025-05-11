type Platform = "all" | "pc" | "playstation" | "xbox";

type Props = {
  selected: Platform;
  onSelect: (platform: Platform) => void;
};

const platforms: { id: Platform; label: string; icon: string }[] = [
  { id: "all", label: "Todos", icon: "🎮" },
  { id: "pc", label: "PC", icon: "💻" },
  { id: "playstation", label: "PlayStation", icon: "🎮" },
  { id: "xbox", label: "Xbox", icon: "🕹️" },
];

export default function PlatformFilter({ selected, onSelect }: Props) {
  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      {platforms.map((p) => {
        const isActive = selected === p.id;

        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm transition font-medium
              ${
                isActive
                  ? "bg-gradient-to-r from-teal-500 to-indigo-500 text-white"
                  : "border border-gray-500 text-gray-300 hover:text-white hover:border-white"
              }`}
          >
            <span>{p.icon}</span>
            <span>{p.label}</span>
          </button>
        );
      })}
    </div>
  );
}
