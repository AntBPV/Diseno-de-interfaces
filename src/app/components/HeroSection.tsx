"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  return (
    <section className="relative h-screen bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto h-full flex items-center relative z-10">
        <div className="max-w-1g">
          <h1 className="text-7xl font-bold font-heading leading-tight mb-6 uppercase">
            Visit <br /> Tokyo
          </h1>

          <div className="flex items-center mb-12">
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-japan-accent mr-4">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 0C3.134 0 0 3.134 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.134 10.866 0 7 0ZM7 9.5C5.619 9.5 4.5 8.381 4.5 7C4.5 5.619 5.619 4.5 7 4.5C8.381 4.5 9.5 5.619 9.5 7C9.5 8.381 8.381 9.5 7 9.5Z"
                  fill="#F24E1E"
                />
              </svg>
            </div>
            <div className="flex space-x-2">
              <span className="text-japan-accent">02.12.2023</span>
              <span className="text-white/70">—</span>
              <span className="text-japan-accent">15.12.2023</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
            {[1, 2, 3].map((index) => (
              <div key={index} className="space-y-4">
                <p className="text-sm text-white/80 leading-relaxed">
                  Falta poner el texto bueno jeje
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-xs text-japan-accent"
                >
                  Link
                  <svg
                    className="ml-2 w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#F24E1E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div key={index} className="flex items-center mb-6">
              {index + 1 === activePage && (
                <span className="text-xs mr-2 text-white/80">0{index + 1}</span>
              )}
              <div
                className={`pagination-dot ${
                  index + 1 === activePage ? "active" : ""
                }`}
                onClick={() => setActivePage(index + 1)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
