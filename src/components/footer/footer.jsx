import React from "react";
import Image from "next/image";
import {
  MapPin,
  Banknote,
  Send,
  Star,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white pt-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Наши контакты
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8">
              <Image
                alt="Entrance to the office building"
                className="rounded-lg w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEZHb8QUz5F3KrrU7G5db4UjJxAKfULnKy7dzLpKAtAnumg7Vnp7SijC9Te4BTsQYHXcSkkROCn4X79HBTRISBtGV3ORZ9IaUe_VfI1Ttnxzblqsd9EegjrK_Ej9u81HSntHjU22_K8e6bv-0jiY5qbQTCPBlM89CMtQEX1A0QLkOOXTqt170K_QQBAVCMal5ewOKxryPqMhO33Q02VlaAGQEC9OVw_vqPTWmGW1wMwEVyCOBB5P3ljp--OqIVbYiQN5LlrYUb8MU"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <Image
                alt="Map showing office location"
                className="rounded-lg w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_h3Eb_eZ9r_KUZuYDKzUUM0J22JuGZQDctpHB-l-2uBBZsODLPOdY6a722jiG4ELB8nlV2qF0T9AvavTo2VGDMANvg6cPSyNjLbAwmc4CLmH0DyQRuxA0cf5r7IMGhEtMnHhxJE3oxDm_mY0cF3RBxlDCmQAtZcvyUgJWPvXm9wzCY8MAo6FBwC0HeGAJTiFLW21tyqE3juh-7GWKx1htTNMNPN7n7wohMJBX93-BiIBF9mHkelQUu-NQZD45f94NG9M8M7Yj1s"
                width={400}
                height={300}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <p className="mt-6 flex items-start text-slate-600">
              <MapPin className="text-primary mr-2 w-5 h-5 shrink-0" />
              г. Павлодар, улица Гагарина, 50, офис 999.
            </p>
          </div>
        </div>
        <div className="py-12 mt-12 border-t border-slate-200">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            <div>
              <div className="text-xl font-bold text-slate-800">
                OZELIM
              </div>
              <p className="text-sm text-slate-500 mt-1">
              Ассоциация некоммерческая организация
              </p>
            </div>
            <div className="text-slate-800">
              <p className="text-2xl font-bold">+7 000 000 0000</p>
              <p className="text-sm">info@ozelim.kz</p>
            </div>
            <div className="text-slate-600 text-sm">
              <p className="font-semibold text-slate-800">
                Режим работы
              </p>
              <p>пн-пт 10:00 - 19:00, сб 11:00 - 16:00</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white"
                href="#"
              >
                <Banknote className="w-5 h-5" />
              </a>
              <a
                className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white"
                href="#"
              >
                <Send className="w-5 h-5" />
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <Image
                  alt="Google logo"
                  className="h-4"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDmMJn42EKqhzMHWtQF_AlmG_sQNC27RpxJdFzCk9g-CRY9SjCmXZzCxnGacW0BjrSXZUx4jXt540LMEbk4yD3rVVWHng5fD-JcTmYwU00PgiETjinMZCH-oWyv_zWDpZ2yY6tc5-RFGbU87D4ZEaAWOIPVc94n7wHcYdGumokEoAgM8co4iD6wl9wD5CvtVYUtT1gsvK1RafRe7PFjjalIQG-vfPudM1kZ2lVQgL23eow1bW1f4wql2QsPuDlSHkqJEzYNN5kLSU"
                  width={24}
                  height={24}
                  style={{ height: "1rem", width: "auto" }}
                />
                <div className="flex items-center">
                  <span>5.0</span>
                  <div className="flex text-yellow-400 ml-1">
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" /> 
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                О компании
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Блог
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Цены
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Информация
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Новости
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Контакты
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-600 hover:text-primary"
                    href="#"
                  >
                    Услуги
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">
                Мы в соц.сетях
              </h4>
              <div className="flex space-x-3">
                <a
                  className="text-slate-500 hover:text-primary"
                  href="#"
                >
                  <Banknote className="h-6 w-6" />
                </a>
                <a
                  className="text-slate-500 hover:text-primary"
                  href="#"
                >
                  <Banknote className="h-6 w-6" />
                </a>
                <a
                  className="text-slate-500 hover:text-primary"
                  href="#"
                >
                  <Send className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            <p>© 2014 - 2025 Ассоциация некоммерческая организация «Ozelim»</p>
          </div>
        </div>
      </div>
    </footer>
  )
}