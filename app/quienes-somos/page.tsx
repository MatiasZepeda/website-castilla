import Link from "next/link";

export default function QuienesSomos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] via-[#1e40af] to-[#0284c7] text-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold mb-6">Quiénes Somos</h1>
          <p className="text-xl max-w-3xl">
            Conoce nuestra trayectoria y compromiso con la excelencia
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#292524] mb-6">
                Nuestra Empresa
              </h2>
              <p className="text-lg text-[#525252] mb-4">
                Castilla Suministros es una empresa chilena especializada en la provisión
                de materiales y servicios de importación, con un fuerte enfoque en procesos
                de licitación pública y privada.
              </p>
              <p className="text-lg text-[#525252] mb-4">
                Contamos con amplia experiencia en el suministro de materiales para
                construcción liviana, artículos de oficina y hogar, así como en la gestión
                integral de importaciones desde Asia.
              </p>
              <p className="text-lg text-[#525252]">
                Nuestro compromiso es entregar productos de calidad, con tiempos de entrega
                competitivos y un servicio personalizado que se adapta a las necesidades
                específicas de cada cliente.
              </p>
            </div>
            <div className="bg-stone-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#292524] mb-6">Nuestros Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0284c7] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-[#292524]">Confiabilidad:</strong>
                    <p className="text-[#525252]">Cumplimos con nuestros compromisos y plazos establecidos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0284c7] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-[#292524]">Calidad:</strong>
                    <p className="text-[#525252]">Seleccionamos cuidadosamente nuestros productos y proveedores</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0284c7] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-[#292524]">Transparencia:</strong>
                    <p className="text-[#525252]">Comunicación clara y honesta en todas nuestras operaciones</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#0284c7] mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-[#292524]">Eficiencia:</strong>
                    <p className="text-[#525252]">Optimizamos procesos para ofrecer mejores precios y tiempos</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-center text-[#292524] mb-12">
            Nuestra Experiencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0284c7] mb-2">10+</div>
              <p className="text-xl text-[#525252]">Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0284c7] mb-2">500+</div>
              <p className="text-xl text-[#525252]">Licitaciones ganadas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0284c7] mb-2">100+</div>
              <p className="text-xl text-[#525252]">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubra cómo podemos ayudarle a alcanzar sus objetivos
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-[#ea580c] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#c2410c] transition"
          >
            Contáctenos
          </Link>
        </div>
      </section>
    </div>
  );
}
