import { Check } from "lucide-react";

export function PlansSection() {
  const plans = [
    {
      name: "MENSUAL",
      price: "$35",
      period: "/mes",
      features: [
        "Acceso ilimitado al gimnasio",
        "Clases grupales incluidas",
        "Duchas y casilleros",
        "Plan sin compromiso",
      ],
    },
    {
      name: "TRIMESTRAL",
      price: "$75",
      period: "/3 meses",
      popular: true,
      savings: "¡Ahorra $30!",
      features: [
        "Acceso ilimitado al gimnasio",
        "Todas las clases grupales",
        "Duchas y casilleros",
        "1 sesión con entrenador personal",
        "Plan de nutrición básico",
      ],
    },
    {
      name: "ANUAL",
      price: "$220",
      period: "/año",
      savings: "¡Ahorra $200!",
      features: [
        "Acceso ilimitado al gimnasio",
        "Todas las clases grupales",
        "Duchas y casilleros",
        "3 sesiones con entrenador personal",
        "Plan de nutrición personalizado",
        "Acceso prioritario a eventos",
        "1 invitado gratis por mes",
      ],
    },
  ];

  return (
    <section id="planes" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            NUESTROS PLANES
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400">
            Elige el plan que mejor se adapte a tus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-zinc-800 rounded-lg p-8 border-2 transition-all hover:scale-105 ${
                plan.popular
                  ? "border-orange-500 shadow-xl shadow-orange-500/20"
                  : "border-zinc-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-zinc-900 px-4 py-1 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              {plan.savings && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {plan.savings}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-orange-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-zinc-900 py-3 rounded-lg font-bold transition-colors">
                UNIRTE AL GYM
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
