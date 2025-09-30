import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Digital Artist",
    content: "LibyanaHub transformed my creative business. I've sold over 500 design templates and connected with amazing clients!",
    rating: 5,
    avatar: "SA"
  },
  {
    name: "Mohamed Ali",
    role: "Course Creator",
    content: "The platform is incredibly easy to use. I launched my video course series and reached 1,000 students in just 3 months.",
    rating: 5,
    avatar: "MA"
  },
  {
    name: "Fatima Hassan",
    role: "Software Developer",
    content: "As a developer, I appreciate the secure payment system and instant delivery. Perfect for selling my apps and plugins.",
    rating: 5,
    avatar: "FH"
  },
  {
    name: "Omar Ibrahim",
    role: "Music Producer",
    content: "Finally, a platform that understands creators! My audio tracks are reaching the right audience and generating consistent income.",
    rating: 5,
    avatar: "OI"
  },
  {
    name: "Layla Karim",
    role: "Business Consultant",
    content: "I've purchased countless business templates and tools here. The quality is exceptional and saves me hours of work.",
    rating: 5,
    avatar: "LK"
  },
  {
    name: "Ahmed Nasser",
    role: "Author",
    content: "Publishing my e-books on LibyanaHub was the best decision. The built-in audience and marketing tools are fantastic!",
    rating: 5,
    avatar: "AN"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-gradient">
            Loved by Creators & Users
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied community members
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 relative overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4">
                {testimonial.avatar}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full glass-card">
            <div className="flex -space-x-2">
              {['SA', 'MA', 'FH', 'OI'].map((avatar, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold border-2 border-background"
                >
                  {avatar}
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">
              Join <strong className="text-foreground">10,000+</strong> happy community members
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
