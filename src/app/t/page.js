import React from 'react'
import Image from 'next/image'
import {
  Shield,
  User,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PlaneTakeoff,
  Briefcase,
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  Stethoscope,
  Home,
  Monitor,
  Laptop,
  Euro,
  Landmark,
  Globe,
  Phone,
  Mail,
  HeartPulse,
  BadgeCheck,
  Headphones,
  ShieldCheck,
  UsersRound,
  Hotel,
  AtSign,
  MapPin
} from 'lucide-react'

export default function Page() {
  return (
    <>
  {/* Header */}

  {/* Hero Section */}
  <section className="relative py-12 lg:py-20 overflow-hidden shadow-xl">
    <div className="max-w-7xl mx-auto px-4">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Ваш надежный гид в Казахстане</span>
          <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900 tracking-tighter">
            Миграционные услуги для иностранных граждан в Казахстане
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Полное сопровождение по всем вопросам миграции и получения виз в Республику Казахстан. Быстро, надежно и профессионально.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold soft-shadow shadow-lg transition-all flex items-center gap-2">
              Бесплатная онлайн-консультация
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-64 soft-shadow shadow-lg bg-white">
              <Image
                alt="Almaty Architecture"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-EX0-axt0AQMp6PVAsFxTfDVXLZgwa2QvEaUc0q35wL1y9_aMfOTCeXoiH3HkFREJJi0rtJoyO-MwUS9UKATrDgQjumJ7KtKBSZCWJpkwDReJc5gLHSxbYU3_qNfP-oJ2DRp7giKL7nXSwBB873J1JNd3dqShqSvgfUl3U2fRky_2dQOEpbIg6DxB9VdQFvjfL3DBvZFS4U6e35xK0CLo7Y-sD87lI4xucZwKDc5f2FFXwM7kf-dWRqIvA5cbnQksF-or7V9Yd0"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-EX0-axt0AQMp6PVAsFxTfDVXLZgwa2QvEaUc0q35wL1y9_aMfOTCeXoiH3HkFREJJi0rtJoyO-MwUS9UKATrDgQjumJ7KtKBSZCWJpkwDReJc5gLHSxbYU3_qNfP-oJ2DRp7giKL7nXSwBB873J1JNd3dqShqSvgfUl3U2fRky_2dQOEpbIg6DxB9VdQFvjfL3DBvZFS4U6e35xK0CLo7Y-sD87lI4xucZwKDc5f2FFXwM7kf-dWRqIvA5cbnQksF-or7V9Yd0"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb-EX0-axt0AQMp6PVAsFxTfDVXLZgwa2QvEaUc0q35wL1y9_aMfOTCeXoiH3HkFREJJi0rtJoyO-MwUS9UKATrDgQjumJ7KtKBSZCWJpkwDReJc5gLHSxbYU3_qNfP-oJ2DRp7giKL7nXSwBB873J1JNd3dqShqSvgfUl3U2fRky_2dQOEpbIg6DxB9VdQFvjfL3DBvZFS4U6e35xK0CLo7Y-sD87lI4xucZwKDc5f2FFXwM7kf-dWRqIvA5cbnQksF-or7V9Yd0"
                height={200}
                width={200}
                data-alt="Professional meeting between consultants and client"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top pointer-events-none" />
  </section>
  {/* Visas in Kazakhstan */}
  <section className="py-16 bg-white shadow-xl">
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
        {/* Visa Types Tags */}
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
  </section>
  {/* Visas from Kazakhstan */}
  <section className="py-20 overflow-hidden shadow-xl">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tight mb-12">Визы из Казахстана</h2>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 rounded-3xl overflow-hidden relative min-h-[500px] soft-shadow shadow-xl bg-white">
          <Image
            alt="World Map"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsP7T30rVTMsRMuckn7rFCDvweSooxaV1fYs2yP-qnnMQ8jnXOTP-O-idf6s2ZEJggDDXftxX0lxFCec-NV_l-Q57ycWTb8E0q-sfqw0q1_FKoXBmBxdOCxc7fNm8QcVRaMV6iu4mkKX18LsorjfnTAb0qFg-gBLBXS0IBeR-qepyvKgXPgtT6oRP2B4KjkPBDdXfz1ECHr_FbJQmrDmMP02WjU-61dXYzhqJ3yHO3dHgV07eRyITMZQGw4vjqWb62lgfTVzluNf4"
            data-alt="Stylized world map showing global travel routes"
            fill
            sizes="(max-width:1024px) 100vw, 384px"
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Весь мир открыт для вас</h3>
            <p className="text-sm opacity-90">Профессиональная помощь в получении виз в более чем 50 стран мира.</p>
          </div>
        </div>
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
          {/* Europe */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-lg">
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
          {/* Asia */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
              <Landmark className="text-primary" size={20} />
              <h4 className="font-bold">Азия</h4>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>Вьетнам</li><li>Индонезия</li>
              <li>Камбоджа</li><li>Лаос</li>
              <li>Малайзия</li><li>Сингапур</li>
              <li>Таиланд</li><li>Филиппины</li>
            </ul>
          </div>
          {/* SE Asia */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 pb-2 border-b border-primary/20">
              <Building2 className="text-primary" size={20} />
              <h4 className="font-bold">Юго-Восточная Азия</h4>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>Китай</li><li>Япония</li>
              <li>Афганистан</li><li>Бангладеш</li>
              <li>Индия</li><li>Мальдивы</li>
              <li>Пакистан</li><li>Шри-Ланка</li>
            </ul>
          </div>
          {/* Americas (US/Canada/Aus as requested) */}
          <div className="space-y-4 bg-white rounded-2xl p-6 shadow-lg">
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
  </section>
  {/* New Lead Generation Form */}
  <section className="py-20 bg-primary/5">
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-3xl soft-shadow shadow-2xl overflow-hidden flex flex-col md:flex-row border border-primary/10">
        <div className="md:w-1/2 p-10 lg:p-16 bg-primary text-white">
          <h2 className="text-4xl font-black mb-6">Оставить заявку на услугу</h2>
          <p className="opacity-90 mb-8">Получите бесплатную консультацию по оформлению виз и миграционным вопросам. Мы ответим на все ваши вопросы в течение 15 минут.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="opacity-70" size={20} />
              <span>+7 (777) 000-00-00</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="opacity-70" size={20} />
              <span>info@ozelim.kz</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-10 lg:p-16 space-y-6 bg-white ">
          <div>
            <label className="block text-sm font-bold mb-2">Имя</label>
            <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="Введите ваше имя" type="text" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">№ телефона</label>
            <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="+7 (___) ___-__-__" type="tel" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Выбрать услугу</label>
            <select className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow">
              <option>Оформление визы</option>
              <option>ВНЖ / ПМЖ</option>
              <option>ИИН / Банковская карта</option>
              <option>Трудоустройство за рубежом</option>
            </select>
          </div>
          <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold soft-shadow shadow-lg transition-all">Отправить заявку</button>
        </div>
      </div>
    </div>
  </section>
  {/* Additional Services */}
  <section className="py-20 bg-primary/5">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Услуги</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white  p-8 rounded-2xl soft-shadow shadow-xl border border-primary/10 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <HeartPulse size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Страхование</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Оформление медицинских страховых полисов для выезда за рубеж и пребывания в РК в соответствии с международными стандартами.</p>
          <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a>
        </div>
        {/* Card 2 */}
        <div className="bg-white  p-8 rounded-2xl soft-shadow shadow-xl border border-primary/10 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <BadgeCheck size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Работа за рубежом</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Помощь в поиске легального трудоустройства в странах Европы, Азии и Америки. Полное документальное сопровождение.</p>
          <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a>
        </div>
        {/* Card 3 */}
        <div className="bg-white  p-8 rounded-2xl soft-shadow shadow-xl border border-primary/10 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <Headphones size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Вызов специалиста</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Консультация нашего эксперта с выездом в ваш офис или на дом для сбора документов и заполнения анкет.</p>
          <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a>
        </div>
        {/* Card 4 */}
        <div className="bg-white  p-8 rounded-2xl soft-shadow shadow-xl border border-primary/10 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Проверка документов</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Профессиональный аудит вашего пакета документов для исключения рисков отказа в получении визы или РВП.</p>
          <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a>
        </div>
        {/* Card 5 */}
        <div className="bg-white  p-8 rounded-2xl soft-shadow shadow-xl border border-primary/10 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <UsersRound size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Услуги для граждан РФ</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Специализированная помощь в получении ИИН, открытии банковских карт и оформлении ВНЖ для граждан Российской Федерации.</p>
          <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a>
        </div>
        {/* Card 6 */}
        <div className="bg-white  p-8 rounded-2xl soft-shadow shadow-xl border border-primary/10 hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
            <Hotel size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Бронирование отелей</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">Подбор и бронирование отелей и курортных баз по всему миру по эксклюзивным корпоративным ценам.</p>
          <a className="text-primary font-bold text-sm inline-flex items-center gap-2" href="#">Подробнее <ArrowRight size={16} className="text-xs" /></a>
        </div>
      </div>
    </div>
  </section>
  {/* Lead Generation Form */}
  <section className="py-20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-white  rounded-3xl soft-shadow shadow-2xl overflow-hidden flex flex-col md:flex-row border border-primary/10">
        <div className="md:w-1/2 p-10 lg:p-16 bg-primary text-white">
          <h2 className="text-4xl font-black mb-6">Оставить заявку на услугу</h2>
          <p className="opacity-90 mb-8">Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей и бесплатной консультации.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="opacity-70" size={20} />
              <span>+7 (777) 000-00-00</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="opacity-70" size={20} />
              <span>info@ozelim.kz</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-10 lg:p-16 space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">Имя</label>
            <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="Введите ваше имя" type="text" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">№ телефона</label>
            <input className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow" placeholder="+7 (___) ___-__-__" type="tel" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Выбрать услугу</label>
            <select className="w-full px-4 py-3 rounded-xl bg-background-light border-transparent focus:border-primary focus:ring-0 shadow">
              <option>Оформление визы</option>
              <option>ВНЖ / ПМЖ</option>
              <option>ИИН / Банковская карта</option>
              <option>Трудоустройство за рубежом</option>
            </select>
          </div>
          <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold soft-shadow shadow-lg transition-all">Отправить заявку</button>
        </div>
      </div>
    </div>
  </section>
  {/* Consultation */}
  <section className="py-12 bg-white  text-center border-y border-primary/10 shadow-inner">
    <div className="max-w-3xl mx-auto px-4">
      <h3 className="text-2xl font-bold mb-6">Нужна быстрая помощь в WhatsApp?</h3>
      <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 mx-auto transition-all shadow-xl">
        {/* Keeping WhatsApp SVG as is because lucide-react does not provide a WhatsApp brand icon */}
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.779-.879-2.053-.979-.275-.1-.475-.15-.675.15-.199.299-.775.979-.95 1.174-.175.195-.349.219-.65.07-.301-.15-1.272-.469-2.422-1.494-.894-.797-1.498-1.782-1.673-2.081-.175-.3-.018-.462.13-.61.134-.133.301-.349.45-.524.15-.175.199-.299.3-.499.1-.199.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.493-.51-.675-.519-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-.1.575-1.075 1.649-.975 1.074-1.125 2.248-.05 3.324.103.102 2.1 3.205 5.086 4.496.71.307 1.264.49 1.696.627.713.226 1.36.194 1.872.118.571-.085 1.779-.724 2.028-1.424.25-.699.25-1.299.175-1.424-.075-.125-.275-.199-.575-.349z" /></svg>
        Задать вопрос в WhatsApp
      </button>
    </div>
  </section>
  {/* Blog/FAQ Section */}
  <section className="py-10">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-12 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-3xl font-bold tracking-tight">Вопросы</h2>
        <a className="text-primary font-bold hover:underline" href="#">Все статьи блога</a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Post 1 */}
        <div className="group cursor-pointer bg-white rounded-2xl shadow-xl p-4">
          <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
            <Image
              alt="Legal Documents"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYOf_hW1pOQ-GdqE4Hue0hTpVJIeYNNF-9pSDwS4PYlIvVOdJmg4ux31OXFcCJjvUOSC90XMPgfchtZhVR4wL16CDkNpUyuw-FA1nlwJCoe15Ek9t34KGv6UhFJYvJd8TOYKKEu99JAMshcxHz4GUAB7NbaroGJ31HSVqYtEWYNYZK-Bee_ZQTmMzY4XHiKvdoJa1YA7VpzbR6HjSvl_0hImV-ZN1SeV0l2-eI8zzcb2I_Z4p0d73MbtvKYyX_2ib8RGR46JNSQc"
              data-alt="Stack of legal migration documents on a desk"
              fill
              sizes="(max-width:1024px) 100vw, 384px"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">Гайд</div>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Как получить ВНЖ в Казахстане в 2026 году?</h3>
          <p className="text-slate-500 text-sm line-clamp-3 mb-4">Подробная инструкция по сбору документов, срокам рассмотрения и основным требованиям для получения вида на жительство...</p>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">12 Октября 2023</span>
        </div>
        {/* Post 2 */}
        <div className="group cursor-pointer bg-white rounded-2xl shadow-xl p-4">
          <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
            <Image
              alt="Meeting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8QF-dedHBSPL-QG5238jDF-6frXS5LdTOBaesD08gjVXWIY-mDiu_tTCZJMaSHWPLCXnZAouFLF_TZ1ZEfeTTAOCIxDh5cMa9IuaHnpbhR80ZHEVMMmunBOd_Ym5I2nHhMYKkjzNNKW1FXHdDzj45eRD_wWLlL0zLpSgEu7OovQS-8AK0gZmHFAthI8ql0Zm3-YLv-V3pEpihE9eIEjH17srx__7w5g3oVzcU_Ab8V-vcpd0HZ9CknpoDXEHjrfO8riU4xSH6-o"
              data-alt="Business professionals in a corporate meeting setting"
              fill
              sizes="(max-width:1024px) 100vw, 384px"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">Бизнес</div>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Digital Nomad Visa: Новые возможности для IT</h3>
          <p className="text-slate-500 text-sm line-clamp-3 mb-4">Казахстан запустил программу для цифровых кочевников. Разбираемся, кто может претендовать и какие льготы это дает...</p>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">05 Октября 2023</span>
        </div>
        {/* Post 3 */}
        <div className="group cursor-pointer bg-white rounded-2xl shadow-xl p-4">
          <div className="aspect-video rounded-2xl overflow-hidden mb-6 soft-shadow relative shadow">
            <Image
              alt="Law"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAE8JWIqZxdXbN47Jxtwla685FfeS2LhXQT1qyh9leH4msvAFnAlh0mE_spieXkzZH1ShFnjgpQF8-N0L1HsJkxeu5aZku3yT87wexyhKR_MtdSN4Med6fbS8g5FZ7n_moZ1obfQDvIDEXlEf8P13kbKHw5mN1LemXM77DBD_AecKW9R6XHDhSflZWhmMEPyxfk6qtND0SRVkjdJWsGLk0-eHx8_DUS0ddMfJYLx26taLWyA0Qv2EPFoNQh3k2PpGDj9HKfTF0BIE"
              data-alt="Gavel and law books representing legal services"
              fill
              sizes="(max-width:1024px) 100vw, 384px"
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-lg text-xs font-bold text-primary">Законодательство</div>
          </div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Изменения в миграционном учете</h3>
          <p className="text-slate-500 text-sm line-clamp-3 mb-4">Важные поправки в законодательстве РК, которые вступают в силу с начала следующего месяца. О чем нужно знать иностранцам...</p>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">28 Сентября 2023</span>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}

</>
  )
}
