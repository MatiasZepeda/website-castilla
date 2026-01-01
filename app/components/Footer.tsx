import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#292524] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Castilla Suministros</h3>
            <p className="text-stone-400">
              Suministros e importaciones de calidad para su empresa
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="flex flex-col gap-2">
              <Link href="/quienes-somos" className="text-stone-400 hover:text-[#ea580c] transition-colors">
                Quiénes Somos
              </Link>
              <Link href="/servicios" className="text-stone-400 hover:text-[#ea580c] transition-colors">
                Servicios
              </Link>
              <Link href="/importaciones" className="text-stone-400 hover:text-[#ea580c] transition-colors">
                Importaciones
              </Link>
              <Link href="/sectores" className="text-stone-400 hover:text-[#ea580c] transition-colors">
                Sectores
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-2 text-stone-400">
              <p>Email: contacto@castilla.cl</p>
              <p>Teléfono: +56 9 1234 5678</p>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#059669] hover:text-emerald-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Castilla Suministros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
