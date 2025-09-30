import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="منصة ليبيانا هب" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-secondary/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
            <span className="text-sm font-medium text-primary">مدعوم من ليبيانا موبايل</span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight animate-fade-in">
            منصة ليبيانا للمحتوى الرقمي
            <span className="block text-transparent bg-clip-text bg-gradient-to-l from-accent to-yellow">
              ابدع، تعلم، وحقق دخلك
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            منصة شاملة لتمكين المبدعين المحليين وربطهم مع المشتركين في مجالات التعليم واللياقة والصحة والطبخ والفنون والتطوير المهني
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="group bg-gradient-to-l from-accent to-secondary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-full"
            >
              استكشف جميع الفئات
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full"
            >
              <Play className="ml-2" size={20} />
              ابدأ بـ 5.750 دينار/شهر
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-white mb-2">+10,000</div>
              <div className="text-white/90">مبدع نشط</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-white mb-2">+50,000</div>
              <div className="text-white/90">محتوى متنوع</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold font-heading text-white mb-2">7</div>
              <div className="text-white/90">فئات رئيسية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
