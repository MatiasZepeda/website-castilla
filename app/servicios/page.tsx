import Link from "next/link";

export default function Servicios() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl">
            Soluciones integrales para todas sus necesidades de suministros y licitaciones
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Service 1 */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Compra por Licitaciones
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Especialistas en procesos de licitación pública y privada en Chile.
                  Gestionamos todo el proceso de compra para que usted pueda enfocarse
                  en su negocio.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Incluye:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Materiales de construcción liviana
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Asesoría en preparación de ofertas
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Gestión de documentación técnica
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cumplimiento de plazos y normativas
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Productos destacados:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Perfiles metálicos y aluminio</li>
                  <li>• Placas de yeso y fibrocemento</li>
                  <li>• Aislantes térmicos y acústicos</li>
                  <li>• Pinturas y revestimientos</li>
                  <li>• Herrajes y accesorios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categorías disponibles:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Artículos de oficina y papelería</li>
                  <li>• Mobiliario corporativo</li>
                  <li>• Equipos y tecnología</li>
                  <li>• Artículos de limpieza</li>
                  <li>• Productos para el hogar</li>
                  <li>• Equipamiento industrial</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Suministro de Artículos
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Amplio catálogo de artículos para oficina, hogar y empresa. Ofrecemos
                  productos de calidad a precios competitivos, con entregas rápidas y
                  servicio personalizado.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Beneficios:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Precios mayoristas
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Stock permanente
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Entrega a domicilio
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-900 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Asesoría personalizada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-12 h-12 text-blue-900 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Servicios de Importación
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-4">
                  Gestión completa de importaciones desde Asia a Chile. Nos encargamos
                  de todo el proceso para que usted reciba sus productos de manera
                  eficiente y segura.
                </p>
                <Link
                  href="/importaciones"
                  className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                >
                  Conocer más sobre importaciones →
                </Link>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proceso simplificado:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-bold text-blue-900 mr-2">1.</span>
                    Búsqueda y selección de proveedores
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-900 mr-2">2.</span>
                    Negociación de precios y condiciones
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-900 mr-2">3.</span>
                    Consolidación y control de calidad
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-900 mr-2">4.</span>
                    Gestión logística y aduanera
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-blue-900 mr-2">5.</span>
                    Entrega en destino final
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
            ¿Necesita alguno de nuestros servicios?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicite una cotización sin compromiso y descubra nuestras soluciones
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
    </div>
  );
}
