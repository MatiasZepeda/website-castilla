"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Castilla Suministros
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-gray-700 hover:text-blue-900 transition">
              Quiénes Somos
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-blue-900 transition">
              Servicios
            </Link>
            <Link href="/importaciones" className="text-gray-700 hover:text-blue-900 transition">
              Importaciones
            </Link>
            <Link href="/sectores" className="text-gray-700 hover:text-blue-900 transition">
              Sectores
            </Link>
            <Link
              href="/contacto"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
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
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition">
              Inicio
            </Link>
            <Link href="/quienes-somos" className="text-gray-700 hover:text-blue-900 transition">
              Quiénes Somos
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-blue-900 transition">
              Servicios
            </Link>
            <Link href="/importaciones" className="text-gray-700 hover:text-blue-900 transition">
              Importaciones
            </Link>
            <Link href="/sectores" className="text-gray-700 hover:text-blue-900 transition">
              Sectores
            </Link>
            <Link
              href="/contacto"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition text-center"
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
