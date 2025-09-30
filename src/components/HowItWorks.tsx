import { UserPlus, Upload, DollarSign, Sparkles } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up & Join",
    description: "Create your free account in seconds and access our entire platform",
    color: "from-primary to-secondary"
  },
  {
    icon: Upload,
    title: "Create or Browse",
    description: "Upload your digital content or explore thousands of resources",
    color: "from-secondary to-accent"
  },
  {
    icon: DollarSign,
    title: "Buy or Sell",
    description: "Purchase content you need or earn by selling your creations",
    color: "from-accent to-cyan"
  },
  {
    icon: Sparkles,
    title: "Grow & Succeed",
    description: "Build your portfolio, expand your skills, and reach your goals",
    color: "from-cyan to-primary"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get started with LibyanaHub in four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Connecting Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/30 to-white/10 z-0" />
                )}

                {/* Step Card */}
                <div className="relative glass-card rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold text-lg shadow-glow">
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
