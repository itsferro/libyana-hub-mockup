import { BookOpen, Code, Palette, Music, Video, TrendingUp, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    icon: BookOpen,
    title: "E-Books & Guides",
    description: "Digital books, tutorials, and comprehensive guides",
    color: "from-primary to-secondary",
    stats: "2,500+ items"
  },
  {
    icon: Code,
    title: "Software & Apps",
    description: "Applications, plugins, and digital tools",
    color: "from-secondary to-accent",
    stats: "1,200+ items"
  },
  {
    icon: Palette,
    title: "Design Assets",
    description: "Templates, graphics, and creative resources",
    color: "from-accent to-cyan",
    stats: "8,000+ items"
  },
  {
    icon: Music,
    title: "Audio Content",
    description: "Music tracks, sound effects, and audio guides",
    color: "from-cyan to-primary",
    stats: "5,500+ items"
  },
  {
    icon: Video,
    title: "Video Courses",
    description: "Educational videos and online courses",
    color: "from-primary to-accent",
    stats: "3,800+ items"
  },
  {
    icon: TrendingUp,
    title: "Business Tools",
    description: "Templates, calculators, and business resources",
    color: "from-secondary to-primary",
    stats: "1,900+ items"
  },
  {
    icon: GraduationCap,
    title: "Learning Programs",
    description: "Complete learning paths and certification programs",
    color: "from-accent to-secondary",
    stats: "950+ items"
  }
];

const CategoryCards = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-gradient">
            Explore Our Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover diverse digital content across seven specialized categories
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden p-8 hover:shadow-card-hover transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/20 hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-heading mb-3 text-foreground relative z-10">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  {category.description}
                </p>
                
                {/* Stats Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium text-foreground relative z-10">
                  {category.stats}
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
