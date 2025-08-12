import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  Scale, 
  FileText, 
  Users, 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Award,
  BookOpen,
  Briefcase,
  Menu,
  X,
  Building,
  Factory,
  Home,
  Landmark
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = formRef.current;
  if (!form) return;

  const nombre = (form.user_name as HTMLInputElement).value;
  const email = (form.user_email as HTMLInputElement).value;
  const telefono = (form.user_phone as HTMLInputElement).value;
  const tipo = (form.consultation_type as HTMLSelectElement).value;
  const mensaje = (form.message as HTMLTextAreaElement).value;

  const texto = encodeURIComponent(
    `Solicitud de consulta:\n\nNombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nTipo de consulta: ${tipo}\nMensaje: ${mensaje}`
  );

  // Cambia el número por el tuyo si quieres recibir el mensaje directo
  window.open(`https://wa.me/573208895280?text=${texto}`, '_blank');
};
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-yellow-400" />
              <div>
                <h1 className="text-xl font-bold text-white">Dr. César A. Salamanca</h1>
                <p className="text-yellow-400 text-sm">Consultor Jurídico</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-white hover:text-yellow-400 transition-colors font-medium">Inicio</a>
              <a href="#servicios" className="text-white hover:text-yellow-400 transition-colors font-medium">Servicios</a>
              <a href="#clientes" className="text-white hover:text-yellow-400 transition-colors font-medium">Clientes</a>
              <a href="#experiencia" className="text-white hover:text-yellow-400 transition-colors font-medium">Experiencia</a>
              <a href="#contacto" className="text-white hover:text-yellow-400 transition-colors font-medium">Contacto</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-white hover:text-yellow-400 transition-colors font-medium">Inicio</a>
                <a href="#servicios" className="text-white hover:text-yellow-400 transition-colors font-medium">Servicios</a>
                <a href="#clientes" className="text-white hover:text-yellow-400 transition-colors font-medium">Clientes</a>
                <a href="#experiencia" className="text-white hover:text-yellow-400 transition-colors font-medium">Experiencia</a>
                <a href="#contacto" className="text-white hover:text-yellow-400 transition-colors font-medium">Contacto</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-yellow-400/10 rounded-full mb-8">
              <Scale className="h-16 w-16 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dr. César Augusto<br />
              <span className="text-yellow-400">Salamanca Tovar</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Consultor Jurídico Especializado con amplia experiencia en asesoramiento legal profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a
                href="https://wa.link/8bzohe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Consulta Whatsapp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg transition-all duration-300"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Experiencia y <span className="text-yellow-500">Profesionalismo</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Como consultor jurídico especializado, ofrezco asesoramiento legal integral con un enfoque personalizado 
                para cada cliente. Mi compromiso es brindar soluciones efectivas y estratégicas en el ámbito legal.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-800 font-medium">Abogado Especializado Certificado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-800 font-medium">Formación Académica Sólida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-500" />
                  <span className="text-gray-800 font-medium">Atención Personalizada</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-black rounded-full mb-6">
                  <Scale className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Dr. César Augusto Salamanca Tovar</h3>
                <p className="text-yellow-600 font-semibold mb-4">Consultor Jurídico Especializado</p>
                <p className="text-gray-600">
                  Comprometido con la excelencia en el servicio jurídico, ofreciendo soluciones 
                  legales innovadoras y efectivas para cada situación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Servicios <span className="text-yellow-500">Jurídicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consultoría legal especializada con enfoque integral y personalizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-50 hover:bg-yellow-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border hover:border-yellow-200">
              <div className="inline-flex items-center justify-center p-4 bg-black group-hover:bg-yellow-500 rounded-lg mb-6 transition-colors duration-300">
                <FileText className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Consultoría Corporativa</h3>
              <p className="text-gray-600">
                Asesoramiento integral para empresas en aspectos legales, contratos y cumplimiento normativo.
              </p>
            </div>

            <div className="group bg-gray-50 hover:bg-yellow-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border hover:border-yellow-200">
              <div className="inline-flex items-center justify-center p-4 bg-black group-hover:bg-yellow-500 rounded-lg mb-6 transition-colors duration-300">
                <Shield className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Derecho Laboral</h3>
              <p className="text-gray-600">
                Protección de derechos laborales, contratos de trabajo y resolución de conflictos laborales.
              </p>
            </div>

            <div className="group bg-gray-50 hover:bg-yellow-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border hover:border-yellow-200">
              <div className="inline-flex items-center justify-center p-4 bg-black group-hover:bg-yellow-500 rounded-lg mb-6 transition-colors duration-300">
                <Users className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Derecho Civil</h3>
              <p className="text-gray-600">
                Asesoramiento en contratos, responsabilidad civil y resolución de disputas civiles.
              </p>
            </div>

            <div className="group bg-gray-50 hover:bg-yellow-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border hover:border-yellow-200">
              <div className="inline-flex items-center justify-center p-4 bg-black group-hover:bg-yellow-500 rounded-lg mb-6 transition-colors duration-300">
                <Briefcase className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Derecho Comercial</h3>
              <p className="text-gray-600">
                Constitución de sociedades, fusiones, adquisiciones y asesoramiento comercial integral.
              </p>
            </div>

            <div className="group bg-gray-50 hover:bg-yellow-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border hover:border-yellow-200">
              <div className="inline-flex items-center justify-center p-4 bg-black group-hover:bg-yellow-500 rounded-lg mb-6 transition-colors duration-300">
                <Scale className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Litigios</h3>
              <p className="text-gray-600">
                Representación legal en procesos judiciales y resolución alternativa de conflictos.
              </p>
            </div>

            <div className="group bg-gray-50 hover:bg-yellow-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg border hover:border-yellow-200">
              <div className="inline-flex items-center justify-center p-4 bg-black group-hover:bg-yellow-500 rounded-lg mb-6 transition-colors duration-300">
                <BookOpen className="h-8 w-8 text-yellow-400 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Asesoría Legal</h3>
              <p className="text-gray-600">
                Consultoría preventiva y estratégica para evitar conflictos legales y optimizar decisiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clientes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nuestros <span className="text-yellow-500">Clientes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              La confianza de empresas, instituciones y particulares respalda nuestro trabajo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center p-6 bg-white group-hover:bg-yellow-50 rounded-xl mb-4 shadow-md border border-gray-100 group-hover:border-yellow-200 transition-all duration-300">
                <Building className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Empresas Corporativas</h3>
              <p className="text-gray-600 text-sm">Grandes corporaciones que confían en nuestra asesoría legal estratégica</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center p-6 bg-white group-hover:bg-yellow-50 rounded-xl mb-4 shadow-md border border-gray-100 group-hover:border-yellow-200 transition-all duration-300">
                <Factory className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Sector Industrial</h3>
              <p className="text-gray-600 text-sm">Industrias que requieren asesoramiento especializado en normativas</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center p-6 bg-white group-hover:bg-yellow-50 rounded-xl mb-4 shadow-md border border-gray-100 group-hover:border-yellow-200 transition-all duration-300">
                <Landmark className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Instituciones</h3>
              <p className="text-gray-600 text-sm">Entidades públicas y privadas que valoran la excelencia jurídica</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center p-6 bg-white group-hover:bg-yellow-50 rounded-xl mb-4 shadow-md border border-gray-100 group-hover:border-yellow-200 transition-all duration-300">
                <Home className="h-12 w-12 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Clientes Particulares</h3>
              <p className="text-gray-600 text-sm">Personas que buscan asesoramiento legal personalizado y confiable</p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Lo que dicen nuestros clientes</h3>
              <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-50 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 italic">
                    "Excelente asesoramiento jurídico. El Dr. Salamanca nos brindó soluciones efectivas 
                    para nuestros desafíos corporativos."
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Building className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Empresa Tecnológica</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-yellow-50 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 italic">
                    "Profesionalismo excepcional y atención personalizada. Resolvió nuestro caso 
                    con gran eficiencia y dedicación."
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Users className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Cliente Particular</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-yellow-50 rounded-lg p-6 mb-4">
                  <p className="text-gray-700 italic">
                    "Su conocimiento especializado y enfoque estratégico fueron clave para 
                    el éxito de nuestras operaciones comerciales."
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Briefcase className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-black">Grupo Empresarial</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">50+</div>
                <p className="text-gray-600 font-medium">Empresas Asesoradas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">200+</div>
                <p className="text-gray-600 font-medium">Casos Exitosos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">98%</div>
                <p className="text-gray-600 font-medium">Satisfacción Cliente</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
                <p className="text-gray-600 font-medium">Años Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experiencia <span className="text-yellow-400">Profesional</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Años de experiencia respaldando a clientes con soluciones jurídicas efectivas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-6 bg-yellow-400 rounded-full mb-6">
                <Award className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Excelencia</h3>
              <p className="text-gray-300">Compromiso con la calidad y resultados excepcionales en cada caso</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center p-6 bg-yellow-400 rounded-full mb-6">
                <Users className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Confianza</h3>
              <p className="text-gray-300">Relaciones sólidas basadas en transparencia y profesionalismo</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center p-6 bg-yellow-400 rounded-full mb-6">
                <Shield className="h-12 w-12 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Seguridad</h3>
              <p className="text-gray-300">Protección integral de los intereses y derechos de nuestros clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Contacto <span className="text-yellow-500">Profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Necesita asesoramiento jurídico? Contácteme para una consulta personalizada
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-black rounded-lg">
                  <Mail className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
                  <a 
                    href="mailto:contaco@bullconsultoresjuridicos.com"
                    className="text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    contaco@bullconsultoresjuridicos.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-black rounded-lg">
                  <Clock className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Horarios de Atención</h3>
                  <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-black rounded-lg">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Dirección</h3>
                  <p className="text-gray-600">Cra. 13 N° 37 - 43 Oficina 1103</p>
                </div>
                
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-yellow-100">
              <h3 className="text-2xl font-bold text-black mb-6">Solicitar Consulta</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="Su nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="su.email@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="Su número de teléfono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Consulta
                  </label>
                  <select 
                    name="consultation_type"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                  >
                    <option value="">Seleccionar tipo de consulta</option>
                    <option value="Consultoría Corporativa">Consultoría Corporativa</option>
                    <option value="Derecho Laboral">Derecho Laboral</option>
                    <option value="Derecho Civil">Derecho Civil</option>
                    <option value="Derecho Comercial">Derecho Comercial</option>
                    <option value="Litigios">Litigios</option>
                    <option value="Asesoría Legal General">Asesoría Legal General</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="Describa brevemente su situación legal..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <Phone className="h-5 w-5" />
                    Contactar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-bold">Dr. César A. Salamanca</h3>
                  <p className="text-yellow-400 text-sm">Consultor Jurídico</p>
                </div>
              </div>
              <p className="text-gray-400">
                Consultoría jurídica especializada con enfoque profesional y personalizado para cada cliente.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Consultoría Corporativa</li>
                <li>Derecho Laboral</li>
                <li>Derecho Civil</li>
                <li>Derecho Comercial</li>
                <li>Litigios</li>
                <li>Asesoría Legal</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <p>contaco@bullconsultoresjuridicos.com</p>
                <p>Lun-Vie: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Vision IA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;