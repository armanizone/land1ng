import React from "react";
import { Banknote, CreditCard, Landmark } from "lucide-react";

export default function PaymentVariants() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Способы оплаты</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-white border border-slate-200 rounded-full py-4 px-8 flex items-center gap-4">
          <Banknote className="text-3xl text-primary" />
          <span className="font-medium">Наличными</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-full py-4 px-8 flex items-center gap-4">
          <CreditCard className="text-3xl text-primary" />
          <span className="font-medium">
            Банковской картой (безналичный расчет)
          </span>
        </div>
        <div className="bg-white border border-slate-200 rounded-full py-4 px-8 flex items-center gap-4">
          <Landmark className="text-3xl text-primary" />
          <span className="font-medium">По реквизитам (для юр. лиц)</span>
        </div>
      </div>
    </section>
  );
}
