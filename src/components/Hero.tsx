import PrimaryButton from "./Button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center bg-black text-white">
      {/* Background image (direita) */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-right"
        style={{
          backgroundImage:
            "url('https://media.rawg.io/media/games/4f4/4f48e4cb76dc6c8326b5b3c7fc3759b6.jpg')", 
        }}
      />

      {/* Gradient escuro à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl px-8 md:px-16">
        <span className="text-sm uppercase text-sky-400 tracking-wide">
          Lançamento
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-3">
          Grand Theft Auto IV
        </h1>
        <p className="text-lg text-gray-300 mt-6 max-w-xl">
          WELCOME TO LEONIDA Grand Theft Auto VI heads to the state of Leonida, home to the neon-soaked streets of Vice City and beyond in the biggest, most immersive evolution of the Grand Theft Auto series yet.
        </p>

        <PrimaryButton to="/game/2544570">
          SAIBA MAIS →
        </PrimaryButton>
      </div>
    </section>
  );
}
