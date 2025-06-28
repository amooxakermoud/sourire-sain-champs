
import { Phone, MapPin, Clock, Mail, Menu, X, Stethoscope, Shield, Heart, Zap, Users, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Soins Conservateurs",
      description: "Caries, détartrage, soins de routine"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Prothèses Dentaires",
      description: "Couronnes, bridges, dentiers"
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Implants Dentaires",
      description: "Solutions durables et esthétiques"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Orthodontie",
      description: "Alignement et correction dentaire"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "Urgences Dentaires",
      description: "Prise en charge rapide des urgences"
    }
  ];

  const advantages = [
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Équipements Modernes",
      description: "Technologies de pointe pour des soins optimaux"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Accessible PMR",
      description: "Cabinet au rez-de-chaussée, entièrement accessible"
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-600" />,
      title: "Parking Disponible",
      description: "Stationnement public à proximité"
    },
    {
      icon: <Zap className="w-6 h-6 text-green-600" />,
      title: "Bien Desservi",
      description: "RER A + Bus (lignes 211, 213, 220)"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr Marzak</h1>
                <p className="text-sm text-gray-600">Cabinet Dentaire</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="tel:01-64-68-59-59" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                01-64-68-59-59
              </a>
            </nav>

            {/* CTA Button */}
            <Button 
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              onClick={() => window.location.href = 'tel:01-64-68-59-59'}
            >
              Prendre RDV
            </Button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <a href="tel:01-64-68-59-59" className="text-blue-600 font-semibold">01-64-68-59-59</a>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  onClick={() => window.location.href = 'tel:01-64-68-59-59'}
                >
                  Prendre RDV
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Votre sourire, notre <span className="text-blue-600">priorité</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Des soins dentaires de qualité dans un cabinet moderne et accessible, 
                au cœur de Champs-sur-Marne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  onClick={() => window.location.href = 'tel:01-64-68-59-59'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de soins dentaires pour toute la famille, 
              avec des équipements modernes et une approche personnalisée.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
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
              Un cabinet moderne, accessible et parfaitement situé pour votre confort.
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
                <p className="text-gray-600 text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Informations Pratiques
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Adresse</p>
                      <p className="text-gray-600">2 Cours du Luzard<br />77420 Champs-sur-Marne</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Téléphone</p>
                      <a href="tel:01-64-68-59-59" className="text-blue-600 hover:text-blue-700 transition-colors">
                        01-64-68-59-59
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:cabinet.drmk@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        cabinet.drmk@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Horaires d'ouverture</p>
                      <div className="text-gray-600 space-y-1">
                        <p>Lun, Mar, Jeu, Ven : 09h00-13h00, 14h00-19h00</p>
                        <p>Mercredi et Weekend : Fermé</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Transports</h4>
                <div className="space-y-2 text-gray-600">
                  <p><strong>RER A :</strong> Station Noisiel</p>
                  <p><strong>Bus :</strong> Lignes 211, 213, 220</p>
                  <p><strong>Arrêts :</strong> Collège Le Luzard, Commissariat</p>
                  <p><strong>Parking :</strong> 29 Square de Diane, Noisiel</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="font-medium">Carte Interactive</p>
                <p className="text-sm">2 Cours du Luzard, Champs-sur-Marne</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => window.open('https://maps.google.com?q=2+Cours+du+Luzard,77420+Champs-sur-Marne', '_blank')}
                >
                  Ouvrir dans Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Cabinet Dentaire</h3>
                  <p className="text-gray-400 text-sm">Dr Marzak</p>
                </div>
              </div>
              <p className="text-gray-400">
                Des soins dentaires de qualité dans un environnement moderne et rassurant.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Rapide</h4>
              <div className="space-y-2">
                <a href="tel:01-64-68-59-59" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  📞 01-64-68-59-59
                </a>
                <a href="mailto:cabinet.drmk@gmail.com" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  ✉️ cabinet.drmk@gmail.com
                </a>
                <p className="text-gray-400 text-sm">
                  2 Cours du Luzard<br />
                  77420 Champs-sur-Marne
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Informations Légales</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="block hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="#" className="block hover:text-white transition-colors">RGPD</a>
                <p className="mt-4">Cabinet accessible PMR</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Cabinet Dentaire Dr Marzak. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
