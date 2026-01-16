import { ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function ProductsSection() {
  const products = [
    {
      name: "Proteína Whey Premium",
      category: "Proteínas",
      price: "$45",
      badge: "HOT",
      image:
        "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwc3VwcGxlbWVudHxlbnwxfHx8fDE3NjgzOTc3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "BCAA Energy 2:1:1",
      category: "Aminoácidos",
      price: "$35",
      badge: "HOT",
      image:
        "https://images.unsplash.com/photo-1701859083407-9f95f247399f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3VwcGxlbWVudCUyMGJvdHRsZXxlbnwxfHx8fDE3Njg0MTg1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Pre-Workout Boost",
      category: "Pre-Entreno",
      price: "$40",
      badge: "HOT",
      image:
        "https://images.unsplash.com/photo-1704650311162-153bbf7f17b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjB3b3Jrb3V0JTIwc3VwcGxlbWVudHxlbnwxfHx8fDE3Njg0MDc0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TIENDA DE SUPLEMENTOS
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400">
            Potencia tus resultados con nuestros productos destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-zinc-900 rounded-lg overflow-hidden group hover:shadow-xl hover:shadow-orange-500/20 transition-all"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Imagen del producto */}
              <div className="relative h-64 overflow-hidden bg-zinc-800">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Información del producto */}
              <div className="p-6">
                <p className="text-sm text-orange-500 mb-2">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    {product.price}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-zinc-900 p-3 rounded-full transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#tienda"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-orange-500 text-orange-500 hover:text-zinc-900 border-2 border-orange-500 px-8 py-3 rounded-lg font-bold transition-all"
          >
            <ShoppingCart className="w-5 h-5" />
            VER TIENDA
          </a>
        </div>
      </div>
    </section>
  );
}
