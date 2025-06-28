import React from 'react';
import { Phone, Mail, MapPin, Clock, Award, Users, Heart, Shield, Stethoscope, Calendar } from 'lucide-react';

export function CabinetSection() {
  const equipeComplete = [
    {
      nom: "Dr MARZAK Hauda",
      specialite: "Chirurgien-Dentiste",
      diplomes: [
        "Diplôme d'État de docteur en chirurgie dentaire - PARIS VII",
        "DU Implantologie Orale et Maxillo-faciale en 2021 - PARIS XII"
      ],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      description: "Spécialiste en implantologie avec une expertise reconnue dans les soins dentaires modernes.",
      type: "docteur"
    },
    {
      nom: "Dr MOSTEFAOUI Ayet",
      specialite: "Chirurgien-Dentiste", 
      diplomes: [
        "Diplôme d'État de docteur en chirurgie dentaire - PARIS V"
      ],
      image: "https://images.unsplash.com/photo-1594824475304-af7cb1b7dbb1?w=400&h=400&fit=crop&crop=face",
      description: "Praticienne expérimentée offrant des soins dentaires personnalisés et de qualité.",
      type: "docteur"
    },
    {
      nom: "Simona",
      specialite: "Assistante dentaire qualifiée",
      role: "Référente du cabinet",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      description: "Votre interlocutrice privilégiée pour tous vos besoins et questions.",
      type: "assistante"
    }
  ];

  const valeurs = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      titre: "Soins personnalisés",
      description: "Chaque patient bénéficie d'un traitement adapté à ses besoins spécifiques."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      titre: "Hygiène stricte",
      description: "Protocoles de stérilisation rigoureux selon les normes les plus élevées."
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      titre: "Expertise reconnue",
      description: "Formation continue et spécialisations pour vous offrir les meilleurs soins."
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      titre: "Équipe dévouée",
      description: "Une équipe bienveillante à votre écoute, enfants et adultes."
    }
  ];

  return (
    <>
      {/* Section Notre Cabinet */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4 mr-2" />
              Le Cabinet
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pour vous comme pour vos enfants,
              <span className="block text-blue-600">la santé de vos dents est importante</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sur rendez-vous ou en urgence, le chirurgien-dentiste traite tous vos problèmes dentaires.
            </p>
            <div className="inline-block bg-green-50 border border-green-200 rounded-xl px-6 py-4 mt-6">
              <p className="text-green-800 font-medium text-lg">
                Notre équipe est là pour vous.
              </p>
            </div>
          </div>

          {/* Section Nos Valeurs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
                Nos Valeurs
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre équipe est là pour vous accompagner avec professionnalisme et bienveillance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valeurs.map((valeur, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {valeur.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {valeur.titre}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {valeur.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              L'équipe
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre équipe médicale
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels qualifiés et expérimentés à votre service
            </p>
          </div>

          {/* Grille équipe */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {equipeComplete.map((membre, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  {/* Photo avec cercle moderne */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto relative">
                      <img
                        src={membre.image}
                        alt={membre.nom}
                        className="w-full h-full rounded-full object-cover shadow-lg"
                      />
                      {/* Badge selon le type */}
                      <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
                        membre.type === 'docteur' 
                          ? 'bg-blue-600' 
                          : 'bg-green-600'
                      }`}>
                        {membre.type === 'docteur' ? (
                          <Award className="h-4 w-4 text-white" />
                        ) : (
                          <Heart className="h-4 w-4 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Informations */}
                  <div className="text-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                      {membre.nom}
                    </h3>
                    
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                      membre.type === 'docteur'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {membre.specialite}
                    </div>

                    {membre.role && (
                      <p className="text-green-600 font-medium mb-4">
                        {membre.role}
                      </p>
                    )}

                    {/* Diplômes pour les docteurs */}
                    {membre.diplomes && (
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          Formations
                        </h4>
                        {membre.diplomes.map((diplome, dipIndex) => (
                          <div key={dipIndex} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {diplome}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {membre.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Horaires compacts dans cette section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="text-center mb-6">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-blue-900 mb-2">Horaires d'ouverture</h3>
                <p className="text-blue-700">Notre équipe vous accueille</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {[
                    { jour: "Lundi", horaires: "09h00-13h00, 14h00-19h00", ouvert: true },
                    { jour: "Mardi", horaires: "09h00-13h00, 14h00-19h00", ouvert: true },
                    { jour: "Mercredi", horaires: "Fermé", ouvert: false },
                    { jour: "Jeudi", horaires: "09h00-13h00, 14h00-19h00", ouvert: true }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-blue-900 font-medium">{item.jour}</span>
                      <span className={item.ouvert ? "text-green-700 font-medium" : "text-red-600"}>
                        {item.horaires}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {[
                    { jour: "Vendredi", horaires: "09h00-13h00, 14h00-19h00", ouvert: true },
                    { jour: "Samedi", horaires: "Fermé", ouvert: false },
                    { jour: "Dimanche", horaires: "Fermé", ouvert: false }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200">
                      <span className="text-blue-900 font-medium">{item.jour}</span>
                      <span className={item.ouvert ? "text-green-700 font-medium" : "text-red-600"}>
                        {item.horaires}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA dans les horaires */}
              <div className="text-center mt-8 pt-6 border-t border-blue-200">
                <p className="text-blue-800 mb-4 font-medium">
                  Prêt à prendre soin de votre sourire ?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:01-64-68-59-59"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    01-64-68-59-59
                  </a>
                  <a
                    href="mailto:cabinet.drmk@gmail.com"
                    className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

