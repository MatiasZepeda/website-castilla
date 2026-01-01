import Link from "next/link";

export default function Importaciones() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] via-[#1e40af] to-[#0284c7] text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold mb-6">Importaciones desde Asia</h1>
          <p className="text-xl max-w-3xl">
            Su puente confiable para importar desde Asia a Chile con total tranquilidad
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center text-[#292524] mb-12">
            Nuestro Proceso de Importación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-[#1a365d] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#292524] mb-2">Consulta inicial</h3>
              <p className="text-[#525252] text-sm">
                Analizamos sus necesidades y especificaciones del producto
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a365d] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#292524] mb-2">Búsqueda de proveedores</h3>
              <p className="text-[#525252] text-sm">
                Identificamos y negociamos con los mejores proveedores asiáticos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a365d] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#292524] mb-2">Control de calidad</h3>
              <p className="text-[#525252] text-sm">
                Verificamos la calidad antes del envío y consolidamos la carga
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a365d] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#292524] mb-2">Logística y aduana</h3>
              <p className="text-[#525252] text-sm">
                Gestionamos envío marítimo/aéreo y todos los trámites aduaneros
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#1a365d] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="text-lg font-semibold text-[#292524] mb-2">Entrega final</h3>
              <p className="text-[#525252] text-sm">
                Su producto llega a destino listo para usar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits by Client Type */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center text-[#292524] mb-12">
            Beneficios por Tipo de Cliente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0284c7] mb-4">Empresas Constructoras</h3>
              <ul className="space-y-3 text-[#525252]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Materiales de construcción a precios competitivos
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Importación de grandes volúmenes
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Certificaciones de calidad incluidas
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Plazos de entrega coordinados con obra
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0284c7] mb-4">PYMEs y Retail</h3>
              <ul className="space-y-3 text-[#525252]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Acceso a productos únicos para reventa
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Márgenes de ganancia mejorados
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Importación compartida para bajar costos
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Asesoría en selección de productos
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#0284c7] mb-4">Instituciones Públicas</h3>
              <ul className="space-y-3 text-[#525252]">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Experiencia en procesos de licitación
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cumplimiento estricto de normativas
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Documentación completa y trazabilidad
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0284c7] mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Optimización de presupuestos públicos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center text-[#292524] mb-12">
            ¿Por qué Importar con Nosotros?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-sky-50 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#0284c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#292524] mb-2">Red de proveedores verificados</h3>
                <p className="text-[#525252]">
                  Trabajamos solo con proveedores confiables y de calidad comprobada en China, Corea y otros países asiáticos.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-sky-50 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#0284c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#292524] mb-2">Ahorro significativo</h3>
                <p className="text-[#525252]">
                  Importación directa desde fábrica elimina intermediarios y reduce costos hasta en un 40%.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-sky-50 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#0284c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#292524] mb-2">Gestión integral</h3>
                <p className="text-[#525252]">
                  Nos encargamos de todo: negociación, control de calidad, logística, aduana y entrega final.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-sky-50 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#0284c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#292524] mb-2">Rapidez y eficiencia</h3>
                <p className="text-[#525252]">
                  Procesos optimizados que minimizan tiempos de espera y maximizan eficiencia operativa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para Importar desde Asia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite una cotización gratuita y descubra cuánto puede ahorrar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-white text-[#0284c7] px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition"
            >
              Solicitar Cotización de Importación
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#059669] text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Consulta Técnica por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
