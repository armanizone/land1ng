import {
  ArrowRight,
  BadgeCheck,
  BadgeDollarSign,
  Banknote,
  Briefcase,
  Building2,
  CreditCard,
  Euro,
  Globe,
  GraduationCap,
  Headphones,
  HeartPulse,
  Home as HomeIcon,
  Hotel,
  Landmark,
  Laptop,
  Monitor,
  Plane,
  PlaneTakeoff,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  Users,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <main className="py-8">
        {/* <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Ваш надежный гид в Казахстане</span>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mt-4">
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
              <Link
                className="bg-primary font-semibold px-8 py-4 rounded-lg inline-block hover:opacity-90 transition shadow-lg shadow-primary/20 text-white"
                href="#section-id1"
              >
                Бесплатная онлайн-консультация
              </Link>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-64 soft-shadow shadow-lg bg-white">
              <Image
                alt="Almaty Architecture"
                className="w-full h-full object-cover"
                src="/Picture1.jpg"
                height={200}
                width={200} 
                data-alt="Modern Almaty architecture reflecting city life"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 soft-shadow shadow-lg bg-white">
              <Image
                alt="Passport Control"
                className="w-full h-full object-cover"
                src="/Picture2.jpg"
                height={200}
                width={200}
                data-alt="Officer checking international passport at customs"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          <div className="pt-12 space-y-4">
            <div className="rounded-2xl overflow-hidden h-80 soft-shadow shadow-lg bg-white">
              <Image
                alt="Business Consultation"
                className="w-full h-full object-cover"
                src="/Picture3.jpg"
                height={200}
                width={200}
                data-alt="Professional meeting between consultants and client"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
          </div>
        </div> */}

        {/* <section className="py-8 bg-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Визы в Казахстан</h2>
                <p className="text-slate-500">Поможем оформить разрешение на въезд для любых целей</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all shadow-md">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <PlaneTakeoff className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Туристические</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Briefcase className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Рабочие</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <GraduationCap className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Студенческие</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Building2 className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Бизнес-визы</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Users className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На воссоединение</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <TrendingUp className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Инвестиционные</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Stethoscope className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На лечение</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Home className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">ПМЖ</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Monitor className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Электронная</p>
              </div>
              <div className="group p-6 bg-background-light rounded-xl border border-transparent hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Laptop className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Digital Nomad</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Визы в Казахстан</h2>
                <p className="text-slate-500">Поможем оформить разрешение на въезд для любых целей</p>
              </div>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <PlaneTakeoff className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Туристические</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Briefcase className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Рабочие</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <GraduationCap className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Студенческие</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Building2 className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Бизнес-визы</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Users className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На воссоединение</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <TrendingUp className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Инвестиционные</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Stethoscope className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">На лечение</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <HomeIcon className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">ПМЖ</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Monitor className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Электронная</p>
              </div>
              <div className="grid place-items-center group p-6 bg-white rounded-xl border border-slate-200 hover:border-primary/30 transition-all text-center cursor-pointer soft-shadow shadow">
                <Laptop className="text-primary mb-3" size={32} />
                <p className="font-bold text-sm">Digital Nomad</p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="pt-10 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Визы из Казахстана
            </h2>
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 rounded-3xl overflow-hidden relative min-h-[500px] bg-white">
                <Image
                  alt="World Map"
                  className="w-full h-full object-cover"
                  src={"/visa-from-kz.jpeg"}
                  data-alt="Stylized world map showing global travel routes"
                  fill
                  sizes="(max-width:1024px) 100vw, 384px"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="absolute inset-0 to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Весь мир открыт</h3>
                  <p className="text-sm opacity-90">
                    Профессиональная помощь в получении виз в любую страну мира!
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-8">
                {/* Visa types list */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-2">
                  <h4 className="font-bold text-lg mb-3">Виды виз</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm font-medium">
                    <li className="flex items-center gap-2">
                      <Plane className="text-primary" size={16} />
                      Туристические визы
                    </li>
                    <li className="flex items-center gap-2">
                      <BadgeDollarSign className="text-primary" size={16} />
                      Рабочие визы
                    </li>
                    <li className="flex items-center gap-2">
                      <GraduationCap className="text-primary" size={16} />
                      Студенческие и учебные визы
                    </li>
                    <li className="flex items-center gap-2">
                      <Briefcase className="text-primary" size={16} />
                      Бизнес-визы
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="text-primary" size={16} />
                      Визы на воссоединение семьи
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="text-primary" size={16} />
                      Инвестиционные визы
                    </li>
                    <li className="flex items-center gap-2">
                      <Stethoscope className="text-primary" size={16} />
                      Визы на лечение
                    </li>
                    <li className="flex items-center gap-2">
                      <HomeIcon className="text-primary" size={16} />
                      Визы для ПМЖ
                    </li>
                    <li className="flex items-center gap-2">
                      <Monitor className="text-primary" size={16} />
                      Электронная
                    </li>
                    <li className="flex items-center gap-2">
                      <Laptop className="text-primary" size={16} />
                      Digital Nomad Visa
                    </li>
                  </ul>
                </div>
                {/* Countries list */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                      <Euro className="text-primary" size={20} />
                      <h4 className="font-bold">Европа</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">Германия</li>
                      <li className="flex items-center gap-2">Франция</li>
                      <li className="flex items-center gap-2">Испания</li>
                      <li className="flex items-center gap-2">Италия</li>
                      <li className="flex items-center gap-2">Англия</li>
                    </ul>
                  </div>
                  <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                      <Landmark className="text-primary" size={20} />
                      <h4 className="font-bold">Азия</h4>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <li>Вьетнам</li>
                      <li>Индонезия</li>
                      <li>Камбоджа</li>
                      <li>Лаос</li>
                      <li>Малайзия</li>
                      <li>Сингапур</li>
                      <li>Таиланд</li>
                      <li>Филиппины</li>
                    </ul>
                  </div>
                  <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                      <Building2 className="text-primary" size={20} />
                      <h4 className="font-bold">Юго-Восточная Азия</h4>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <li>Китай</li>
                      <li>Япония</li>
                      <li>Афганистан</li>
                      <li>Бангладеш</li>
                      <li>Индия</li>
                      <li>Мальдивы</li>
                      <li>Пакистан</li>
                      <li>Шри-Ланка</li>
                    </ul>
                  </div>
                  <div className="space-y-4 bg-white rounded-2xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
                      <Globe className="text-primary" size={20} />
                      <h4 className="font-bold">Южная Америка (США/Канада)</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li>США</li>
                      <li>Канада</li>
                      <li>Австралия</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-10">
          <BidForm />
        </div>

        <section className="pt-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Дополнительные услуги
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <HeartPulse size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Страхование</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Оформление медицинских страховых полисов для выезда за рубеж и
                  пребывания в РК в соответствии с международными стандартами.
                </p>
              </div>
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <BadgeCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Работа за рубежом</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Помощь в поиске легального трудоустройства в странах Европы,
                  Азии и Америки. Полное документальное сопровождение.
                </p>
              </div>
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Headphones size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Вызов специалиста</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Консультация нашего эксперта с выездом в ваш офис или на дом
                  для сбора документов и заполнения анкет.
                </p>
              </div>
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Проверка документов</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Профессиональный аудит вашего пакета документов для исключения
                  рисков отказа в получении визы или РВП.
                </p>
              </div>
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <UsersRound size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Услуги для граждан РФ
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Специализированная помощь в получении ИИН, открытии банковских
                  карт и оформлении ВНЖ для граждан Российской Федерации.
                </p>
              </div>
              <div className="bg-white  p-8 rounded-2xl border border-slate-200 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Hotel size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Бронирование отелей</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Подбор и бронирование отелей и курортных баз по всему миру по
                  эксклюзивным корпоративным ценам.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-10">
          <BidForm />
        </div>

        <section className="pt-10" id="why-us">
          <div className="flex gap-12 items-center">
            <div className="bg-primary rounded-lg flex items-center justify-center h-min p-6">
              <h2 className="text-3xl font-bold text-center text-white whitespace-nowrap">
                Почему мы?
              </h2>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
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
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
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
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
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
              <div className="flex border border-slate-200 rounded-2xl p-4 bg-white">
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

        <div className="py-10 lg:py-16">
          <PaymentVariants />
        </div>

        <section className="py-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex mb-6">
              <h2 className="text-3xl font-bold tracking-tight">Вопросы</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
                  <Image
                    alt="Legal Documents"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYOf_hW1pOQ-GdqE4Hue0hTpVJIeYNNF-9pSDwS4PYlIvVOdJmg4ux31OXFcCJjvUOSC90XMPgfchtZhVR4wL16CDkNpUyuw-FA1nlwJCoe15Ek9t34KGv6UhFJYvJd8TOYKKEu99JAMshcxHz4GUAB7NbaroGJ31HSVqYtEWYNYZK-Bee_ZQTmMzY4XHiKvdoJa1YA7VpzbR6HjSvl_0hImV-ZN1SeV0l2-eI8zzcb2I_Z4p0d73MbtvKYyX_2ib8RGR46JNSQc"
                    data-alt="Stack of legal migration documents on a desk"
                    fill
                    sizes="(max-width:1024px) 100vw, 384px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">
                    Гайд
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Как получить ВНЖ в Казахстане в 2026 году?
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4">
                  Подробная инструкция по сбору документов, срокам рассмотрения
                  и основным требованиям для получения вида на жительство...
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  12 Октября 2026
                </span>
              </div>
              <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
                  <Image
                    alt="Meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8QF-dedHBSPL-QG5238jDF-6frXS5LdTOBaesD08gjVXWIY-mDiu_tTCZJMaSHWPLCXnZAouFLF_TZ1ZEfeTTAOCIxDh5cMa9IuaHnpbhR80ZHEVMMmunBOd_Ym5I2nHhMYKkjzNNKW1FXHdDzj45eRD_wWLlL0zLpSgEu7OovQS-8AK0gZmHFAthI8ql0Zm3-YLv-V3pEpihE9eIEjH17srx__7w5g3oVzcU_Ab8V-vcpd0HZ9CknpoDXEHjrfO8riU4xSH6-o"
                    data-alt="Business professionals in a corporate meeting setting"
                    fill
                    sizes="(max-width:1024px) 100vw, 384px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">
                    Бизнес
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Digital Nomad Visa: Новые возможности для IT
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4">
                  Казахстан запустил программу для цифровых кочевников.
                  Разбираемся, кто может претендовать и какие льготы это дает...
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  05 Октября 2026
                </span>
              </div>
              <div className="group cursor-pointer bg-white rounded-2xl border border-slate-200 p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
                  <Image
                    alt="Law"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAE8JWIqZxdXbN47Jxtwla685FfeS2LhXQT1qyh9leH4msvAFnAlh0mE_spieXkzZH1ShFnjgpQF8-N0L1HsJkxeu5aZku3yT87wexyhKR_MtdSN4Med6fbS8g5FZ7n_moZ1obfQDvIDEXlEf8P13kbKHw5mN1LemXM77DBD_AecKW9R6XHDhSflZWhmMEPyxfk6qtND0SRVkjdJWsGLk0-eHx8_DUS0ddMfJYLx26taLWyA0Qv2EPFoNQh3k2PpGDj9HKfTF0BIE"
                    data-alt="Gavel and law books representing legal services"
                    fill
                    sizes="(max-width:1024px) 100vw, 384px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">
                    Законодательство
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Изменения в миграционном учете
                </h3>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4">
                  Важные поправки в законодательстве РК, которые вступают в силу
                  с начала следующего месяца. О чем нужно знать иностранцам...
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  28 Сентября 2026
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import {
  Phone,
  Mail,
  MessageCircle,
  Brain,
  History,
  CheckCircle,
  Eye,
} from "lucide-react";
import BidForm from "@/components/bid-form";
import PaymentVariants from "@/components/payment-variants";

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
