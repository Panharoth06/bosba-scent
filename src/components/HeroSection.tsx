import AnimatedContent from "./AnimatedContent";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background  */}
      <video
        src="/videos/bosba-sample-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Overlay for slight fade */}
      <div className="absolute inset-0 bg-linear-to-b from-[#FAFAF8]/60 to-primary/20 mix-blend-overlay"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 animate-fade-in">
        <h1 className="font-serif font-medium text-5xl md:text-7xl leading-tight text-balance text-primary">
          Scents that whisper, not shout.
        </h1>
        <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto text-pretty">
          Crafted quietly from nature's calm — scents designed to breathe with you.
        </p>
        <AnimatedContent
          distance={50}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-[#FAFAF8] px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
          >
            Shop Collection
          </Button>

        </AnimatedContent>
      </div>
    </section>
  );
};

export default HeroSection;
