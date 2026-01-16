export function HeroSection({ backgroundImage }: { backgroundImage: string }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            SÉ MÁS FUERTE QUE
            <br />
            <span className="text-orange-500">TUS EXCUSAS</span>
          </h2>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Transforma tu cuerpo y tu mente en JIVA GYM
          </p>
          <a
            href="#planes"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-zinc-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            COMIENZA AHORA
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
