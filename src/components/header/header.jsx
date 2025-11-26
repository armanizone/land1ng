import Image from "next/image";
import { Star, MapPin, Phone, MessageCircle, Search, ChevronDown, Menu } from "lucide-react";

import React from "react";
import Link from "next/link";


export const Header = () => {
  return (
    <header className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-">
    <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold text-slate-800">
          <Link href={'/'}>
            Ozelim
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500">
          <Image
            alt="Google logo"
            className="h-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUo_PMqqyd3J_24rAl683G_VVZ9JAJQKn9nGXflykMBFMwHETjdFAsl03LpsoPFuE9U1UqMvu_P2eKYwDqvFnBijhCuYwOEbqrPma8T9roQoC64DYWdvVH_av3zGRLgvsHRAt3z7R-NtRCsuwMsK5fs_FkGYJ8fBMInDlhtgfe74bsRC7e6Uu3rbaXFRwmDZBT7TOk3Kvzf5sWC798pJSpxeD78BtU_-BnhcpFF575tS3H7sj1g6GfkR8py9WpcCoWfUqbKaJhBfw"
            width={56}
            height={16}
            style={{ height: "1rem", width: "auto" }}
            unoptimized
          />
          <div className="flex items-center">
            <span>5.0</span>
            <div className="flex text-yellow-400 ml-1">
              <Star className="text-sm h-4 w-4" fill="currentColor" />
              <Star className="text-sm h-4 w-4" fill="currentColor" />
              <Star className="text-sm h-4 w-4" fill="currentColor" />
              <Star className="text-sm h-4 w-4" fill="currentColor" />
              <Star className="text-sm h-4 w-4" fill="currentColor" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-2 text-sm text-slate-500">
          <MapPin className="text-base h-5 w-5" />
          <span>Павлодар</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-500">
        <span>г. Павлодар, ул. Гагарина, 50, офис </span>
        <span>пн-пт 10:00 - 19:00, сб 11:00 - 16:00</span>
      </div>
      <div className="flex items-center space-x-4">
        <a
          className="hidden sm:flex items-center font-semibold text-slate-800"
          href="tel:+77273107843"
        >
          <Phone className="mr-2 h-5 w-5" />
          +7 000 000 0000
        </a>
        <a
          className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white"
          href="#"
        >
          {/* WhatsApp */}
          <MessageCircle className="text-xl h-5 w-5" />
        </a>
        <a
          className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white"
          href="#"
        >
          {/* Telegram */}
          <SendPlaneIcon className="text-xl h-5 w-5" />
        </a>
        <button className="lg:hidden p-2 rounded-md hover:bg-slate-100">
          <Menu className="text-slate-800 h-6 w-6" />
        </button>
      </div>
    </div>
    <nav className="flex justify-between items-center">
      <div className="flex items-center space-x-6">
        {/* <a
          className="flex items-center text-slate-800 font-bold hover:text-primary transition"
          href="#"
        >
          Помогаем
          <ChevronDown className="text-lg ml-1 h-4 w-4" />
        </a> */}
        <Link
          className="hidden md:flex items-center text-slate-800 font-bold hover:text-primary transition"
          href="about"
        >
          О компании
          {/* <ChevronDown className="text-lg ml-1 h-4 w-4" /> */}
        </Link>
        {/* <a
          className="hidden md:block text-slate-800 font-bold hover:text-primary transition"
          href="#"
        >
          Услуги
        </a> */}
        {/* <a
          className="hidden md:block text-slate-800 font-bold hover:text-primary transition"
          href="#"
        >
          Цены
        </a> */}
        {/* <a
          className="hidden md:block text-slate-800 font-bold hover:text-primary transition"
          href="#"
        >
          Акции
        </a> */}
        {/* <a
          className="hidden md:flex items-center text-slate-800 font-bold hover:text-primary transition"
          href="#"
        >
          Информация
          <ChevronDown className="text-lg ml-1 h-4 w-4" />
        </a> */}
        {/* <a
          className="hidden md:block text-slate-800 font-bold hover:text-primary transition"
          href="#"
        >
          Контакты
        </a> */}
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <input
            className="bg-slate-100 border-none rounded-lg py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Поиск"
            type="text"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
        </div>
        <a
          className="hidden sm:inline-block whitespace-nowrap px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
          href="#"
        >
          Бесплатная консультация
        </a>
      </div>
    </nav>
  </header>
  )
}
// Custom icons that are similar to WhatsApp/Telegram
function SendPlaneIcon({ className }) {
  // Lucide's Send (plane/paper) icon as SVG
  return (
    <svg
      className={className}
      height="1em"
      width="1em"
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 2L11 13"></path>
      <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
    </svg>
  );
}
