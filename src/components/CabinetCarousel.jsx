import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const cabinetImages = Array.from({ length: 12 }, (_, i) => ({
  src: `images/image${i + 1}.jpg`,
  alt: `Image ${i + 1}`,
}));

export function CabinetCarousel() {
  const [api, setApi] = React.useState()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 to-white " id="cabinet">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec animation */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
            Découvrez notre cabinet
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Un environnement moderne et professionnel pour votre bien-être dentaire
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
                <CarouselItem 
                  key={index}
                  className="basis-full"
                >
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

          {/* Indicateurs personnalisés améliorés */}
       <div className="absolute hidden md:block bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-3 px-4 py-3 w-fit">
  {cabinetImages.map((_, index) => (
    <button
      key={index}
      className={`relative transition-all duration-300 rounded-full border-2 ${
        current === index + 1
          ? 'w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/50 scale-110' 
          : 'w-3 h-3 sm:w-4 sm:h-4 bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50 hover:scale-105'
      }`}
      onClick={() => api?.scrollTo(index)}
      aria-label={`Aller à l'image ${index + 1}`}
    >
      {current === index + 1 && (
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-75"></div>
      )}
      {current === index + 1 && (
        <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
          {index + 1}
        </span>
      )}
    </button>
  ))}
</div>


          {/* Informations de navigation pour mobile */}
          <div className="sm:hidden text-center mt-8 text-sm text-gray-600">
            <p>Balayez horizontalement pour naviguer</p>
          </div>
        </div>

 
      </div>
    </section>
  );
}