import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Menu,
  X,
  Stethoscope,
  Shield,
  Heart,
  Zap,
  Award,
  AlertTriangle,
  Sparkles,
  Scan,
  Activity,
  Layers,
  ShieldCheck,
  Baby,
  Radio,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CabinetCarousel } from "@/components/CabinetCarousel";
import { Team } from "@/components/Team";
import { Faq } from "@/components/Faq";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // 80px pour compenser le header sticky
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Soins Conservateurs",
      description:
        "Caries, détartrage, soins de routine pour préserver vos dents naturelles",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Prothèses Dentaires",
      description: "Couronnes, bridges, dentiers fixes ou amovibles sur mesure",
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Implants Dentaires",
      description: "Solutions durables et esthétiques, implantologie avancée",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Orthodontie",
      description: "Alignement et correction dentaire, gouttières dentaires",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Urgences Dentaires",
      description:
        "Prise en charge rapide des urgences et extractions dentaires",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Blanchiment des dents",
      description: "Éclaircissement dentaire pour un sourire éclatant",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Bruxisme",
      description:
        "Traitement du grincement de dents, gouttières de protection",
    },
    {
      icon: <Activity className="w-8 h-8 text-orange-600" />,
      title: "Endodontie",
      description: "Traitement des canaux radiculaires, dévitalisation",
    },
    {
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      title: "Facettes Dentaires",
      description: "Facettes esthétiques pour corriger forme et couleur",
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "Prothèses sur Implant",
      description: "Prothèses fixes stabilisées sur implants dentaires",
    },
    {
      icon: <Baby className="w-8 h-8 text-pink-600" />,
      title: "Pédodontie",
      description: "Soins dentaires spécialisés pour enfants et adolescents",
    },
    {
      icon: <Radio className="w-8 h-8 text-teal-600" />,
      title: "Imagerie Dentaire",
      description: "Radio panoramique, Cône beam 3D pour diagnostic précis",
    },
    {
      icon: <Scan className="w-8 h-8 text-cyan-600" />,
      title: "Stellite Dentaire",
      description: "Prothèses partielles en alliage métallique léger",
    },
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Équipements Modernes",
      description: "Technologies de pointe pour des soins optimaux",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Accessible PMR",
      description: "Cabinet au rez-de-chaussée, entièrement accessible",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Parking Disponible",
      description: "Stationnement public à proximité",
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Bien Desservi",
      description: "RER A + Bus (lignes 211, 213, 220)",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="images/logo.png"
                  alt="Cabinet Dentaire Logo"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr Marzak</h1>
                <p className="text-sm text-gray-600">Cabinet Dentaire</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("cabinet")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Le Cabinet
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Notre Équipe
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Contact
              </button>
              {/* Gardez le lien tel tel quel */}
              <a
                href="tel:01-64-68-59-59"
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                01-64-68-59-59
              </a>
            </nav>

            {/* CTA Button */}
            <Button
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              onClick={() =>
                window.open(
                  "https://www.doctolib.fr/dentiste/champs-sur-marne/hauda-marzak/booking/motive-categories?specialityId=1&telehealth=false&placeId=practice-118496&profile_skipped=true&bookingFunnelSource=external_referral",
                  "_blank"
                )
              }
            >
              Prendre RDV
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("accueil")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Accueil
                </button>
                <button
                  onClick={() => scrollToSection("cabinet")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Le Cabinet
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("team")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Notre Équipe
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Contact
                </button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  onClick={() =>
                    window.open(
                      "https://www.doctolib.fr/dentiste/champs-sur-marne/hauda-marzak/booking/motive-categories?specialityId=1&telehealth=false&placeId=practice-118496&profile_skipped=true&bookingFunnelSource=external_referral",
                      "_blank"
                    )
                  }
                >
                  Prendre RDV
                </Button>{" "}
              </nav>
            </div>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <section
        id="accueil"
        className="bg-gradient-to-br from-blue-50 to-green-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Votre sourire, notre{" "}
                <span className="text-blue-600">priorité</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Des soins dentaires de qualité dans un cabinet moderne et
                accessible, au cœur de Champs-sur-Marne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  onClick={() =>
                    window.open(
                      "https://www.doctolib.fr/dentiste/champs-sur-marne/hauda-marzak/booking/motive-categories?specialityId=1&telehealth=false&placeId=practice-118496&profile_skipped=true&bookingFunnelSource=external_referral",
                      "_blank"
                    )
                  }
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Nous localiser
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <div className="bg-blue-600 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Stethoscope className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Cabinet Moderne</p>
                    <p className="text-blue-200">Équipements de pointe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CabinetCarousel />
      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de soins dentaires pour toute la famille, avec
              des équipements modernes et une approche personnalisée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-xl text-gray-600">
              Un cabinet moderne, accessible et parfaitement situé pour votre
              confort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact & Localisation
            </h2>
            <p className="text-xl text-gray-600">
              Facilement accessible en transport en commun et en voiture.
            </p>
          </div>

          <div className="w-full max-w-full flex flex-col md:flex-row justify-between gap-8">
            {/* Contact Info */}
            <div className="w-full max-w-full">
              <div className="w-full max-w-full bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Informations Pratiques
                </h3>

                <div className="w-full max-w-full flex flex-col gap-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Adresse</p>
                      <p className="text-gray-600">
                        2 Cours du Luzard
                        <br />
                        77420 Champs-sur-Marne
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Téléphone</p>
                      <a
                        href="tel:01-64-68-59-59"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        01-64-68-59-59
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:cabinet.drmk@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        cabinet.drmk@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="w-full max-w-full flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div className="w-full max-w-full">
                      <p className="font-medium text-gray-900 mb-2">
                        Horaires d'ouverture
                      </p>
                      <div className="text-gray-600 space-y-1">
                        <p>Lun, Mar, Jeu, Ven : 09h00-13h00, 14h00-19h00</p>
                        <p>Mercredi et Weekend : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-full bg-green-50 rounded-xl p-6 mt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Transports</h4>
                <div className="w-full max-w-full text-gray-600">
                  <p>
                    <strong>RER A :</strong> Station Noisiel
                  </p>
                  <p>
                    <strong>Bus :</strong> Lignes 211, 213, 220
                  </p>
                  <p>
                    <strong>Arrêts :</strong> Collège Le Luzard, Commissariat
                  </p>
                  <p>
                    <strong>Parking :</strong> 29 Square de Diane, Noisiel
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full max-w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328.19625351537735!2d2.612125814269313!3d48.84733966492076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60f69e6d39dc3%3A0xc3d684eb725d595c!2sDr%20Marzak%20-%20Cabinet%20dentaire%20Dentalid!5e0!3m2!1sfr!2sma!4v1751137299231!5m2!1sfr!2sma"
                style={{ width: "100%", height: "450px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <Faq />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bloc logo + description */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                  <img
                    src="images/logo.png"
                    alt="Cabinet Dentaire Logo"
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cabinet Dentaire</h3>
                  <p className="text-gray-400 text-sm">Dr Marzak</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Soins dentaires de qualité dans un environnement moderne et
                rassurant.
              </p>
            </div>

            {/* Bloc contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:01-64-68-59-59"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    📞 01 64 68 59 59
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cabinet.drmk@gmail.com"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                  >
                    ✉️ cabinet.drmk@gmail.com
                  </a>
                </li>
                <li>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    2 Cours du Luzard
                    <br />
                    77420 Champs-sur-Marne
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Ligne copyright + réseaux sociaux si besoin */}
          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>
              &copy; {currentYear} Cabinet Dentaire Dr Marzak. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
