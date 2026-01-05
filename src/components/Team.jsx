import React from 'react';

export function Team() {
const teamMembers = [
  {
    name: "Dr MARZAK Hauda",
    img: "/images/team/dr-marak-hauda.jpg",
    alt: "Dr Marzak Hauda",
    diplomas: [
      "Diplôme d'État de docteur en chirurgie dentaire - PARIS VII",
      "DU Implantologie Orale et Maxillo-faciale en 2021 - PARIS XII"
    ]
  },
  {
    name: "Dr MOSTEFAOUI Ayet",
    img: "/images/team/dr-mostefaoui-ayet.jpg",
    alt: "Dr Mostefaoui Ayet",
    diplomas: [
      "Diplôme d'État de docteur en chirurgie dentaire - PARIS V"
    ]
  },
  {
    name: "Simona",
    img: "/images/team/simona.jpg",
    alt: "Simona - Assistante dentaire",
    diplomas: [
      "Assistante dentaire qualifiée",
      "Référente du cabinet"
    ]
  }
];



  return (
<section id="team" className="py-16 bg-white mt-4">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
        L'équipe
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Une équipe expérimentée et attentionnée pour prendre soin de vous.
      </p>
    </div>

    <div className="grid gap-12 md:grid-cols-3 items-center mt-3">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >
          <div style={{width: '100%',maxWidth: '320px', height: '320px'}} className="rounded-full overflow-hidden mb-6 shadow-lg">
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

