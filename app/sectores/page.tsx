import Link from "next/link";

export default function Sectores() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold mb-6">Sectores que Atendemos</h1>
          <p className="text-xl max-w-3xl">
            Soluciones especializadas para diversos sectores productivos y comerciales
          </p>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-16">
            {/* Sector 1: Construcción */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Empresas Constructoras
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Proveemos materiales de construcción liviana, herramientas y equipamiento
                  para proyectos de construcción de todo tamaño.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Productos destacados:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tabiquería y perfilería metálica
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Placas de yeso y fibrocemento
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Aislación térmica y acústica
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pinturas y revestimientos
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Herramientas y equipos de seguridad
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ventajas para constructoras:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Entregas programadas según avance de obra</li>
                  <li>✓ Volúmenes grandes a precios mayoristas</li>
                  <li>✓ Asesoría técnica especializada</li>
                  <li>✓ Facturación adaptada a sus necesidades</li>
                  <li>✓ Experiencia en licitaciones públicas</li>
                </ul>
              </div>
            </div>

            {/* Sector 2: Oficinas y PYMEs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ventajas para oficinas:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Catálogo completo de artículos de oficina</li>
                  <li>✓ Entregas rápidas en Santiago y regiones</li>
                  <li>✓ Precios corporativos competitivos</li>
                  <li>✓ Atención personalizada</li>
                  <li>✓ Pedidos recurrentes automatizados</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Oficinas y PYMEs
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Suministramos todo lo necesario para el funcionamiento diario de su oficina
                  o empresa: papelería, tecnología, mobiliario y artículos de limpieza.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Productos destacados:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Artículos de papelería y escritorio
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Equipos tecnológicos y accesorios
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mobiliario corporativo
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Productos de limpieza e higiene
                  </li>
                </ul>
              </div>
            </div>

            {/* Sector 3: Instituciones Públicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Instituciones Públicas
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Amplia experiencia en procesos de licitación pública. Cumplimos con todas
                  las normativas y requisitos técnicos del sector público chileno.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestra experiencia:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Licitaciones en ChileCompra
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Suministros para municipalidades
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Equipamiento para establecimientos educacionales
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Servicios para instituciones de salud
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Garantías institucionales:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Cumplimiento de normativas públicas</li>
                  <li>✓ Documentación técnica completa</li>
                  <li>✓ Certificaciones de origen y calidad</li>
                  <li>✓ Plazos de entrega garantizados</li>
                  <li>✓ Trazabilidad total del proceso</li>
                  <li>✓ Facturación electrónica</li>
                </ul>
              </div>
            </div>

            {/* Sector 4: Retail y Distribuidores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-lg">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ventajas para retail:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Importación directa para mejores márgenes</li>
                  <li>✓ Productos exclusivos y diferenciados</li>
                  <li>✓ Volúmenes flexibles según demanda</li>
                  <li>✓ Consolidación de envíos</li>
                  <li>✓ Asesoría en selección de productos</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Retail y Distribuidores
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Soluciones de importación y suministro diseñadas para negocios retail
                  y distribuidores que buscan optimizar sus márgenes y ofrecer productos únicos.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Servicios para retail:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Búsqueda de productos para reventa
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Importación compartida
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Desarrollo de marca privada
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Análisis de tendencias de mercado
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Su sector no está listado?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos igualmente. Tenemos experiencia atendiendo diversos sectores
            y adaptamos nuestros servicios a sus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contáctenos
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
    </div>
  );
}
