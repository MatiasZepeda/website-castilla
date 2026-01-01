"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#1a365d]">
            Castilla Suministros
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/servicios" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Servicios
            </Link>
            <Link href="/importaciones" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Importaciones
            </Link>
            <Link href="/sectores" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Sectores
            </Link>
            <Link
              href="/contacto"
              className="bg-[#ea580c] text-white px-6 py-2 rounded-lg hover:bg-[#c2410c] transition-all shadow-md hover:shadow-lg"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#525252]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/servicios" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Servicios
            </Link>
            <Link href="/importaciones" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Importaciones
            </Link>
            <Link href="/sectores" className="text-[#525252] hover:text-[#ea580c] transition-colors">
              Sectores
            </Link>
            <Link
              href="/contacto"
              className="bg-[#ea580c] text-white px-6 py-2 rounded-lg hover:bg-[#c2410c] transition-all shadow-md text-center"
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
