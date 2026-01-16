import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se enviaría el correo (simulación)
    alert(`Correo enviado a: ${email}\nMensaje: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <footer id="ubicacion" className="bg-zinc-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Información de contacto y redes sociales */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-zinc-900"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">JIVA GYM</h3>
                <p className="text-orange-500 text-sm">Tu mejor versión</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p className="text-gray-400 text-sm">
                    Av. Principal 123, Centro
                    <br />
                    Ciudad de México, CP 01000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-gray-400 text-sm">+52 55 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-400 text-sm">info@jivagym.com</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-medium mb-3">Síguenos</p>
              <a
                href="https://www.instagram.com/jiva_gym.x/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                @jivagym
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div>
            <h3 className="text-xl font-bold mb-4">Encuéntranos</h3>
            <div className="bg-zinc-800 rounded-lg overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6938145087653!2d-99.16558092473662!3d19.432607981860633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f6b0c0001%3A0x0!2zMTnCsDI1JzU3LjQiTiA5OcKwMDknNDguMiJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de JIVA GYM"
              />
            </div>
          </div>

          {/* Formulario de contacto rápido */}
          <div>
            <h3 className="text-xl font-bold mb-4">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Tu correo
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  rows={5}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-zinc-900 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensaje
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              Responderemos tu mensaje en menos de 24 horas
            </p>
          </div>
        </div>

        {/* Horarios de atención */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-orange-500 font-medium mb-2">
                Lunes - Viernes
              </p>
              <p className="text-gray-400">6:00 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="text-orange-500 font-medium mb-2">Sábados</p>
              <p className="text-gray-400">8:00 AM - 8:00 PM</p>
            </div>
            <div>
              <p className="text-orange-500 font-medium mb-2">Domingos</p>
              <p className="text-gray-400">8:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 JIVA GYM. Todos los derechos reservados.</p>
          <p className="mt-2">
            Transforma tu cuerpo, transforma tu vida 💪
          </p>
        </div>
      </div>
    </footer>
  );
}
