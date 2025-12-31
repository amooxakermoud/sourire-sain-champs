import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const cabinetImages = Array.from({ length: 4 }, (_, i) => ({
  src: `images/accueil${i + 1}_dr_marzak.jpg`,
  alt: `Image ${i + 1}`,
}));

export function CabinetCarousel() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Auto-play personnalisé avec React
  React.useEffect(() => {
    if (!api) return;

    const autoPlay = setInterval(() => {
      api.scrollNext();

    }, 8000);

    return () => clearInterval(autoPlay);
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-white "
      id="cabinet"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        {/* En-tête avec animation */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Découvrez notre cabinet
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Un environnement moderne et professionnel pour votre bien-être
            dentaire
          </p>
        </div>

        {/* Carousel responsive - Block centré avec largeur limitée */}
        <div className="w-full mx-auto max-w-[952px]">
          <Carousel
            className="mx-auto"
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
            }}
          >
            <CarouselContent>
              {cabinetImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="md:h-[476px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    {/* Image avec effet parallax */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-fit md:h-full object-cover"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Badge numéro slide */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-white text-xs sm:text-sm font-medium">
                      {index + 1} / {cabinetImages.length}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Boutons navigation - cachés sur très petit écran */}
            <CarouselPrevious className="hidden sm:flex left-2 md:left-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-200" />
            <CarouselNext className="hidden sm:flex right-2 md:right-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-white/90 hover:bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-200" />
          </Carousel>

       

       
        </div>
      
      </div>
           <div className="hidden md:flex w-full justify-center items-center mb-2 gap-2">
            {cabinetImages.map((_, index) => (
              <button
                onClick={() => api?.scrollTo(index)}
                className={`w-6 h-6 bg-blue-600 rounded-full text-sm ${
                  current === index + 1
                    ? "shadow-lg shadow-blue-600/50 scale-110 text-white"
                    : "bg-white border border-gray-300 hover:bg-blue-50 hover:scale-105 text-black"
                } transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow
       }`}
              >
                <span>{index + 1}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center mt-4">
            <p className="text-center text-sm text-gray-500 mt-2">
              {current} / {count}
            </p>
          </div>
         {/* Informations de navigation pour mobile */}
          <div className="sm:hidden text-center mt-8 text-sm text-gray-600">
            <p>Balayez horizontalement pour naviguer</p>
          </div>
    </section>
  );
}
