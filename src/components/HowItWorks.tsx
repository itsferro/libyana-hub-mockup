import { Search, CreditCard, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "اكتشف",
    description: "تصفح المدربين والمحتوى في جميع الفئات السبع",
    color: "from-primary to-secondary"
  },
  {
    icon: CreditCard,
    title: "اشترك",
    description: "اختر الباقة المناسبة وادفع بسهولة عبر رصيد ليبيانا",
    color: "from-secondary to-accent"
  },
  {
    icon: Rocket,
    title: "ابدأ التعلم",
    description: "تواصل مع مدربك وابدأ رحلتك نحو النجاح",
    color: "from-accent to-cyan"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-white">
            كيف تعمل المنصة؟
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            ابدأ رحلتك في ثلاث خطوات بسيطة
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-1/2 w-full h-0.5 bg-gradient-to-l from-white/30 to-white/10 z-0" />
                )}

                {/* Step Card */}
                <div className="relative glass-card rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-lg shadow-glow">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-5 mx-auto mb-6 shadow-card`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-heading mb-3 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
