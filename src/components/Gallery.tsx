import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1740815633097-89baf1dd0413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE2NjUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Pradeshiya Sabha Building",
      title: "Pradeshiya Sabha Office"
    },
    {
      src: "https://images.unsplash.com/photo-1548285788-6b5c92110fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjE2NjUzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Community Development",
      title: "Community Programs"
    },
    {
      src: "https://images.unsplash.com/photo-1695748394754-9a8f807f9568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHRlbXBsZXxlbnwxfHx8fDE3NjE2NjUzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cultural Heritage",
      title: "Cultural Sites"
    },
    {
      src: "https://images.unsplash.com/photo-1743636521862-1aed4d6067c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHN0cmVldCUyMG1hcmtldHxlbnwxfHx8fDE3NjE2NjUzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Local Market",
      title: "Local Markets"
    },
    {
      src: "https://images.unsplash.com/photo-1559038210-896c348db241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHBhcmt8ZW58MXx8fHwxNzYxNjY1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Public Parks",
      title: "Parks & Recreation"
    },
    {
      src: "https://images.unsplash.com/photo-1749528744952-4ba6ce21c373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMGxvY2FsJTIwbWFya2V0fGVufDF8fHx8MTc2MTY2NTMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Local Commerce",
      title: "Commercial Areas"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Community Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlights from our community events, facilities, and initiatives
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-white">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
