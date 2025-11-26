import Image from "next/image";
import {
  Star,
  MapPin,
  Phone,
  Menu,
  ChevronDown,
  Search,
  ArrowRight,
  ArrowRightCircle,
  FileText,
  BadgeCheck,
  Briefcase,
  Landmark,
  Plane,
  Flag,
  Brain,
  History,
  CheckCircle,
  Eye,
  MessageCircle,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <main className="py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Миграционные услуги для иностранных граждан в Казахстане
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Помощь миграционных юристов в оформлении документов на РВП, ВНЖ,
              гражданство РК и получении виз С3 и С5.
            </p>
            <p className="mt-4 text-slate-600">
              Гарантируем подачу документов в соответствии с законом
            </p>
            <div className="mt-8">
              <a
                className="bg-primary font-semibold px-8 py-4 rounded-lg inline-block hover:opacity-90 transition shadow-lg shadow-primary/20 text-white"
                href="#"
              >
                Бесплатная онлайн-консультация
              </a>
            </div>
          </div>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative bg-slate-200 p-6 rounded-lg col-span-2 overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/80 to-emerald-700/80 -rotate-12 scale-150" />
              <div className="relative flex items-end h-full">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-white">
                    Помощь в оформлении документов
                  </h2>
                  <p
                    className="mt-2 text-sm"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    для РВП, ВНЖ, гражданство Казахстана
                  </p>
                  <button className="mt-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition text-white">
                    Получить бесплатную консультацию
                  </button>
                </div>
                <div className="hidden md:block">
                  <Image
                    alt="Smiling woman holding a passport"
                    className="absolute bottom-0 right-0 h-full w-auto object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-UZhsS_xZURjmWpvp7FL5faZmuYy9k0YcsKzdfbRFn2OyQmqPKMsVETQ54GmEjwurUj99wR0LCt-tOVGPdHaMcXce0znxB5Id-39AMtuJNhgL_RmZHAC_78jPYqQD3VVLW6H4T0s9jRmAKLQ9kbED2F1w9eeQYo113AnZKP4tMT3obkqWKt0kXVmj-v0JUgtgPSxkhy4RONbr2nmbcC6PGF2LROodnIlkTe3UwN22eyivVbOLYlX8527oaKwKlGrj4vSXAq8bnuU"
                    width={242}
                    height={203}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      height: "100%",
                      width: "auto",
                      objectFit: "cover",
                    }}
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className="relative bg-slate-100 p-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/70 to-emerald-700/70 -rotate-12 scale-150" />
              <div className="relative z-10">
                <h3 className="font-bold text-white">Полный список услуг</h3>
                <Image
                  alt="Document with a pen"
                  className="my-4 rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8C0gc2yDhlH_AemeHAgghDHfgzClW-Q6_X9KfX0dGHpnHSP23o6yJEmq9NR8EFJ2grtKrrxnadrI1LnhpAXdQqTbkF6HADNao9eUgw2u8PaKbuxT_RecZwdF2IVJ3h-5wtvdQ5DMVBF_k4hjkJZQyQs21tbku6FgghkfYUQ8F7JxVg-gIGNQOvuuReYv9VMLvgJPACGBcRmidhqp22hGvfNCDqylqMv7PSaQtYA6R7iDz3yepTUbp8DjevvLDfltVmbner-6dM2M"
                  width={252}
                  height={135}
                  style={{ borderRadius: "0.5rem" }}
                  unoptimized
                />
                <button className="bg-white/90 text-slate-700 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-white transition flex items-center">
                  Открыть
                  <ArrowRight className="text-sm ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="relative bg-slate-100 p-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/70 to-emerald-700/70 -rotate-12 scale-150" />
              <div className="relative z-10">
                <h3 className="font-bold text-white">
                  Подробнее про консультации
                </h3>
                <Image
                  alt="Woman at a desk during a consultation"
                  className="my-4 rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqnACYUTx3oocQgypZMSRiG1Pu4up1HL6XgKZ3sYHEJX8gAP46aFUKGhuMBbX9nLRTlr96R1zyTA6TiGP1FCcolm2ze6LEymhX1vF2vgcaHDHqBGshE2OFqG0j5s2gvuZ3VTKpRVm7hRD4KbotM_Yf13ywi54wihQ95CVX7TaC6k0iTBG4zcI4Dv9M_SiY8jD14fWDUh06WRddnEtv6phNkXdHIOybFi3_Oj0ni_LOGMy3NFkG1LP_oe-DtTkMlNcQSfIH58-99QE"
                  width={252}
                  height={135}
                  style={{ borderRadius: "0.5rem" }}
                  unoptimized
                />
                <button className="bg-white/90 text-slate-700 backdrop-blur-sm px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-white transition flex items-center">
                  Узнать
                  <ArrowRight className="text-sm ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="bg-primary p-12 rounded-lg w-full lg:w-1/3">
              <h2 className="text-4xl font-bold text-white">
                Акции и специальные предложения
              </h2>
            </div>
            <div className="hidden lg:block relative w-2/3">
              <Image
                alt="Promotional banner showing documents and a flag"
                className="rounded-lg w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIwhg6Hgbu2UV8mHtIzjj-MCvoKShBxQtSW6y_FHx6dTA9o_2KGTe5Lq22PTw89eflSp1r6WKhACRUeVG9b-abW0vunCSAp4gy8dvyGaPm2giNPDhoE3etCZlEZe38ksQnxseLPwIB4mUBq0DpjHKN1dclP4P4BglDP9kbqkXGmOUM_jLHieUpNVIkthKibglyf3M90WscbBFjOu4SquoBtg-WDB_56PXorSLEakpyoEZwF8LG0jEbgRyrDPV9g7LvRgUlyhveK40"
                width={600}
                height={160}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                }}
                unoptimized
              />
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition">
              <ArrowRight className="text-slate-600 h-5 w-5" />
            </button>
          </div>
        </div>
        <section className="py-24" id="services">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Помощь в получении государственных миграционных услуг
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <FileText className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Истребование документов за границей
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Позволяет получить дубликаты или оригиналы ранее выданных бумаг
                в другой стране.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  href="#"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <BadgeCheck className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Вид на жительство (ВНЖ)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Долгосрочный статус для жизни и работы в Казахстане с
                возможностью получать кредиты и приобретать недвижимость.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  href="#"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Briefcase className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Разрешение на работу (РНР)
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Документ, который дает иностранцам право на официальное
                трудоустройство.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  href="#"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Landmark className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Юридическое лицо
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Казахстан привлекает бизнес низкими налогами, простой
                регистрацией и доступом к международным рынкам.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  href="#"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Plane className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">Визы</h3>
              <p className="mt-2 text-sm text-slate-600">
                Разрешение на въезд для граждан стран, с которыми не установлен
                безвизовый режим.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  href="#"
                >
                  Подробнее
                </a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <Flag className="text-primary text-3xl h-8 w-8" />
              <h3 className="font-bold text-lg mt-2 text-slate-800">
                Гражданство Казахстана
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Поможем вам пройти весь путь до получения паспорта РК.
                Подготовим полный комплект документов.
              </p>
              <div className="mt-4 flex space-x-2">
                <a
                  className="px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                  href="#"
                >
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-slate-50 rounded-2xl" id="about">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-8">
            <div>
              <Image
                alt="Team meeting in a modern office"
                className="rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN6eim0oDvdSnyN0WeqpCfQ1vvAdBLb6a7VSd-aHQGoaInQ-NNhuH_o196toPXrBBb6l7Yxjh27K1n50WtdqDkR9svn_wdcPvHThH8H1IC-q1RI2zMSmaaixDfz-csYbnwA1MU_ts96kC4rwJCZl0-OdLJinfF4cSGiH65afc-U5OIH3t0p0W_3xrrWRmsH8HFFEnVnoaSuNW3GtkpjKVgZU0r7R9q2siP8zm3ZXnDdij0TpbhqgByk5aeSvsewxHlDKeE6c90AN4"
                width={500}
                height={312}
                style={{
                  borderRadius: "0.5rem",
                  boxShadow: "0 10px 30px -5px rgba(15,23,42,0.25)",
                }}
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                О компании
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                «Ozelim» — это специализированное агентство, сфокусированное на
                решении миграционных задач иностранных граждан в Республике
                Казахстан.
              </p>
              <p className="mt-2 text-slate-600">
                Наша деятельность целиком сосредоточена на вопросах
                миграционного права, что позволило нам достичь глубокого
                понимания всех тонкостей этой области.
              </p>
              <a
                className="mt-6 inline-block px-5 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-100 transition"
                href="#"
              >
                Подробнее
              </a>
            </div>
          </div>
        </section>
        <section className="py-24" id="why-us">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 bg-primary p-12 rounded-lg flex items-center justify-center">
              <h2 className="text-4xl font-bold text-center text-white">
                Почему мы?
              </h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="flex">
                <Brain className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Глубокая экспертиза
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Мы специализируемся исключительно на миграционном
                    законодательстве Казахстана.
                  </p>
                </div>
              </div>
              <div className="flex">
                <History className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    10+ лет опыта
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    С 2014 года мы помогли более 12 000 иностранным гражданам.
                  </p>
                </div>
              </div>
              <div className="flex">
                <CheckCircle className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Гарантированный результат
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Заключаем официальный договор и берем на себя полную
                    ответственность.
                  </p>
                </div>
              </div>
              <div className="flex">
                <Eye className="text-primary text-3xl mr-4 h-8 w-8" />
                <div>
                  <h3 className="font-bold text-lg text-slate-800">
                    Прозрачные условия
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Стоимость услуг фиксируется в договоре с самого начала.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16" id="testimonials">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Отзывы наших клиентов
            </h2>
            <a
              className="bg-primary font-semibold px-6 py-2 rounded-lg inline-flex items-center hover:opacity-90 transition text-white"
              href="#"
            >
              Все отзывы
              <ArrowRight className="text-lg ml-1 h-5 w-5" />
            </a>
          </div>
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col">
                <div className="flex items-center">
                  <Image
                    alt="Avatar of Mariia Goncharova"
                    className="w-10 h-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlbpzdaGQVYtgvb2o-xs3CterrZh1rPYIl-2cuhDQkAtGuUuMvJGiAOmpRrqJUnSf-dt8wfjGptkpkhUtFJpq0HQeCV_D0JaMPynPYvjCN_8GlHGuY6oLrKpu3x-rEekbHHSQ5fZMWfTzSXxKhgMRPOESot2PMuoyhYjPg7CFmNn9BRDb8RVejI1GCok4jIGd2IojFADOfLDNQyvMghH-Xk4iGrVLvDQ7x9YZ91OTjmn17PVJr-TM3Ux3gmuuWpEIuyRU5NASg2bU"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "9999px",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                    unoptimized
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-slate-800">
                      Mariia Goncharova
                    </p>
                    <p className="text-xs text-slate-500">
                      Вид на жительство (ВНЖ)
                    </p>
                  </div>
                </div>
                <div className="flex text-yellow-400 my-4">
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                </div>
                <p className="text-sm text-slate-600 grow">
                  Обращалась в мае 24 за оформлением вида на жительство мне и
                  моему мужу...
                </p>
                <button className="mt-4 bg-primary font-semibold w-full py-2.5 rounded-lg hover:opacity-90 transition text-white">
                  Читать полностью
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col">
                <div className="flex items-center">
                  <Image
                    alt="Avatar of Евгений Вейсалов"
                    className="w-10 h-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL_2R6I_uMLWrHOEwxxs4ZRfA9XB_YB_9zb_GDFn_KwTDH2x9SIhr4InNBdg1zKYvLKDXIOugVQlA7iEW_Lrq30t8bnidxhqDcumVtK8Fr-fQFa2vQ7MT1HrK3STE--efIHgH9id5zi_0PesMX_rhKHOToE-BaDWrxMagNdlam-dKJOQutQy1ym-3apipDrSUla9EpWV4gdkeo_zNhIk_AO0zOpO3FWas0yZ7Pc1_D-mhndwvuMOBDwCWZjxmSI3Smb-rcnhZLqcE"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "9999px",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                    unoptimized
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-slate-800">
                      Евгений Вейсалов
                    </p>
                    <p className="text-xs text-slate-500">
                      Вид на жительство (ВНЖ)
                    </p>
                  </div>
                </div>
                <div className="flex text-yellow-400 my-4">
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                </div>
                <p className="text-sm text-slate-600 grow">
                  На этапе подачи документов, впечатления о работе компании
                  положительные...
                </p>
                <button className="mt-4 bg-primary font-semibold w-full py-2.5 rounded-lg hover:opacity-90 transition text-white">
                  Читать полностью
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200 flex flex-col">
                <div className="flex items-center">
                  <Image
                    alt="Avatar of Аудия Кодирова"
                    className="w-10 h-10 rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKm6ylUvKIhXsyartLqhCfm02DcvULkmjsxxt2WeKowizYPg4G1OokTEQAs0fVllVZ3NFZ27uIIKuGKP4yyrYXiMI8t_UCXqrIWI4OwQny8no74yQeIslxxL7IyTxsvzq-v9uuwfTpVzCHb5ff-ei9UhVdMLuaBX8Citvc11rNJoCIsUM77kycHFbTfuG7Fn30UsCCa56ZXjaGFPomHIOdL4U8pDyirwpepc2uWzY6iaqXQB95LzRrjcTwpyPOMRu1RIJ-Al9vflA"
                    width={40}
                    height={40}
                    style={{
                      borderRadius: "9999px",
                      width: "2.5rem",
                      height: "2.5rem",
                    }}
                    unoptimized
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-slate-800">
                      Аудия Кодирова
                    </p>
                    <p className="text-xs text-slate-500">
                      Гражданство Казахстана
                    </p>
                  </div>
                </div>
                <div className="flex text-yellow-400 my-4">
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                  <Star className="text-base h-4 w-4" fill="currentColor" />
                </div>
                <p className="text-sm text-slate-600 grow">
                  Кто сталкивался с оформлением гражданства знает, какой это не
                  простой процесс.
                </p>
                <button className="mt-4 bg-primary font-semibold w-full py-2.5 rounded-lg hover:opacity-90 transition text-white">
                  Читать полностью
                </button>
              </div>
            </div>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-slate-100 transition hidden lg:block">
              <ArrowRight className="text-slate-600 h-5 w-5" />
            </button>
          </div>
        </section>
        <section className="py-16">
          <div className="relative bg-primary rounded-2xl p-8 md:p-16 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-white">
                  Получите бесплатную консультацию
                </h2>
                <form action="#" className="mt-8 space-y-4 text-white">
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Напишите ваше имя*"
                    type="text"
                  />
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4  focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Номер телефона*"
                    type="tel"
                  />
                  <input
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4  focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Напишите ваш e-mail"
                    type="email"
                  />
                  <textarea
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4  focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Комментарий"
                    rows={3}
                    defaultValue={""}
                  />
                  <button
                    className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition"
                    type="submit"
                  >
                    Позвоните мне
                  </button>
                  <p className="text-xs">
                    Нажимая на кнопку, вы соглашаетесь с пользовательским
                    соглашением
                  </p>
                </form>
              </div>
              <div className="text-center text-white">
                <p className="text-lg">
                  Или свяжитесь с нами любым удобным Вам способом
                </p>
                <div className="my-6 flex justify-center space-x-4">
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <MessageCircle className="mr-2 text-emerald-300 h-5 w-5" />
                    WhatsApp
                  </a>
                  <a
                    className="px-6 py-2 border border-white/50 rounded-lg flex items-center text-sm font-medium hover:bg-white/10 transition"
                    href="#"
                  >
                    <SendPlaneIcon className="mr-2 text-emerald-300 h-5 w-5" />
                    Telegram
                  </a>
                </div>
                <p className="text-4xl lg:text-5xl font-bold tracking-wider ">
                  +7 727 310 7843
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                alt="Smiling woman on the phone"
                className="absolute bottom-0 right-0 h-2/3 md:h-full w-auto opacity-80 md:opacity-100 z-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6zAKrKAY-2uZUNQFZpmA-i2PLgVQ9hQsFLn3gIpAWC_o-rgVtpZvXMUhuGR4vQCCduO4TMHdzZco8c7OspbfONQk41L22T_0NTkCEYmZiaTxXZItMUFVSYtKWhMUpw6PC5K4sCtK_fyOD_r7SoLzrl-PaDp7qxIEiw8f85jGhznogFZaZEuuxsjTrez66WSNoz_4b6GBxV68--SGQpOW7s-okyYCek-YFFFl0gdXZ4mlgepm4c6D3JpECCZA9yxYVjZBV7tOnTqA"
                width={448}
                height={542}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  opacity: "0.7",
                  zIndex: 0,
                }}
                unoptimized
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
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
