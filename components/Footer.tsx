"use client";
import React, { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp,
  BookOpen,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollTopRef = useRef<HTMLButtonElement>(null);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-100 font-poppins">
      {/* Background Image */}
      <div className="absolute inset-0 top-40 opacity-50">
        <Image
          width={300}
          height={400}
          src="/footerlayout.png"
          alt="Footer Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* Wavy SVG Separator */}
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none opacity-60"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 3 }}
      >
        <path
          d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          fill="rgb(2, 44, 52)"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-cyan-500/20">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-center mb-6">
              <div className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
                {/* White circular background just behind logo */}
                <span
                  className="absolute inset-0 rounded-full bg-white shadow-lg"
                  aria-hidden="true"
                />
                <Image
                  src="/footerlogo.png"
                  alt="Edulink logo"
                  width={200}
                  height={200}
                  className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-medium italic text-cyan-300 text-center drop-shadow-md tracking-wide mt-3">
                Where dreams take flight
              </span>
            </div>


            {/* Icons */}
            {/* <div className="flex gap-4 justify-center pt-3">
              {[
                { Icon: Mail, href: "mailto:info@edulink.com", label: "Email" },
                { Icon: Phone, href: "tel:+61123456789", label: "Phone" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-cyan-400" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-7 h-7 text-cyan-400" />
              <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3 text-base lg:text-lg font-medium">
              {["Our Programs", "About Us", "Success Stories", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-cyan-400 transition-all inline-block hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-7 h-7 text-cyan-400" />
              <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                Hours
              </h3>
            </div>
            <div className="space-y-4 text-base lg:text-lg">
              {[
                { day: "Mon - Fri", time: "9:00 AM - 5:00 PM" },
                { day: "Saturday", time: "9:00 AM - 1:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map(({ day, time }) => (
                <div key={day}>
                  <p className="font-semibold text-gray-200">{day}</p>
                  <p className="text-gray-400">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-7 h-7 text-cyan-400" />
              <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wide">
                Location
              </h3>
            </div>
            <div className="space-y-4 text-base lg:text-lg">
              <div className="text-gray-300">
                <p className="font-semibold mb-1">Head Office</p>
                <p className="text-gray-400 leading-relaxed">
                  Level 5/12 Clarke St,
                  <br />
                  Sunshine, VIC 3020
                </p>
              </div>
              <a
                href="tel:+61123456789"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold block hover:underline"
              >
                +61 (0) 123 456 789
              </a>
              <a
                href="mailto:info@edulink.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold block hover:underline break-all"
              >
                info@edulink.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 pt-10">
          <p className="text-sm sm:text-base text-gray-400 tracking-wide">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Edulink</span>. All
            rights reserved.
            <a
              href="#"
              className="text-cyan-400 hover:text-cyan-300 ml-2 transition-colors hover:underline"
            >
              Privacy Policy
            </a>
          </p>

          <button
            ref={scrollTopRef}
            onClick={handleScrollTop}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
