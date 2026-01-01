import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Castilla Suministros e Importaciones
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Su socio estratégico en suministros, licitaciones e importaciones desde Asia a Chile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una empresa especializada en suministros e importaciones,
              con amplia experiencia en procesos de licitación y comercio internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Compra por Licitaciones</h3>
              <p className="text-gray-600 mb-4">
                Gestión completa de compras para licitaciones públicas. Especialistas en
                materiales de construcción liviana y artículos para empresas.
              </p>
              <Link href="/servicios" className="text-blue-900 font-semibold hover:underline">
                Ver más →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Suministros Generales</h3>
              <p className="text-gray-600 mb-4">
                Artículos de oficina, hogar y empresa. Amplio catálogo de productos
                de calidad para satisfacer todas sus necesidades.
              </p>
              <Link href="/servicios" className="text-blue-900 font-semibold hover:underline">
                Ver más →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-blue-900 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Importaciones desde Asia</h3>
              <p className="text-gray-600 mb-4">
                Servicio integral de importación: búsqueda de proveedores, consolidación
                y gestión logística desde Asia a Chile.
              </p>
              <Link href="/importaciones" className="text-blue-900 font-semibold hover:underline">
                Ver más →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para optimizar sus compras?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos hoy y descubra cómo podemos ayudarle con sus necesidades
            de suministros e importaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Contacto por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
