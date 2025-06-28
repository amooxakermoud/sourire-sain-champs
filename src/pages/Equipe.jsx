import React from 'react';
import { Phone, Mail, Award, Heart, Stethoscope, GraduationCap } from 'lucide-react';

const Equipe = () => {
const teamMembers = [
  {
    name: "Dr MARZAK Hauda",
    img: "https://www.dentalid.fr/wp-content/uploads/go-x/u/3a4ffe56-1f4f-4a37-b3ec-fd149d54fc2b/l0,t149,w768,h768/image-320x320.jpg",
    alt: "Dr Marzak Hauda",
    diplomas: [
      "Diplôme d'État de docteur en chirurgie dentaire - PARIS VII",
      "DU Implantologie Orale et Maxillo-faciale en 2021 - PARIS XII"
    ]
  },
  {
    name: "Dr MOSTEFAOUI Ayet",
    img: "https://www.dentalid.fr/wp-content/uploads/go-x/u/3a4ffe56-1f4f-4a37-b3ec-fd149d54fc2b/l0,t149,w768,h768/image-320x320.jpg",
    alt: "Dr Mostefaoui Ayet",
    diplomas: [
      "Diplôme d'État de docteur en chirurgie dentaire - PARIS V"
    ]
  },
  {
    name: "Simona",
    img: "https://www.dentalid.fr/wp-content/uploads/go-x/u/3a4ffe56-1f4f-4a37-b3ec-fd149d54fc2b/l0,t149,w768,h768/image-320x320.jpg",
    alt: "Simona - Assistante dentaire",
    diplomas: [
      "Assistante dentaire qualifiée",
      "Référente du cabinet"
    ]
  }
];



  return (
<section id="equipe" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        L'équipe
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Une équipe expérimentée et attentionnée pour prendre soin de vous.
      </p>
    </div>

    <div className="grid gap-12 md:grid-cols-3 items-center">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg">
            <img
              src={member.img}
              alt={member.alt}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {member.name}
          </h3>
          {member.diplomas.map((dip, i) => (
            <p
              key={i}
              className={`text-gray-600 text-sm ${i === 0 ? 'mb-2' : ''}`}
            >
              {dip}
            </p>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>



  );
};

export default Equipe;