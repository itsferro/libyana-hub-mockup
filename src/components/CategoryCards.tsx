import { Dumbbell, Heart, ChefHat, Palette, Briefcase, Video, BookOpen, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Dumbbell,
    title: "التدريب الرياضي واللياقة",
    description: "برامج تدريب مخصصة مع مدربين محترفين",
    color: "from-orange-500 to-red-500",
    stats: "2,500+ برنامج",
    link: "/fitness/coach-profile"
  },
  {
    icon: Heart,
    title: "الاستشارات الصحية والمراقبة",
    description: "استشارات طبية ومراقبة صحية مع أطباء مرخصين",
    color: "from-blue-500 to-cyan-500",
    stats: "1,200+ طبيب"
  },
  {
    icon: ChefHat,
    title: "الطبخ والوصفات",
    description: "وصفات احترافية ودروس طبخ مباشرة",
    color: "from-yellow-500 to-orange-400",
    stats: "8,000+ وصفة"
  },
  {
    icon: Palette,
    title: "الفنون الإبداعية",
    description: "تعلم الرسم والموسيقى والتصوير والتصميم",
    color: "from-pink-500 to-purple-500",
    stats: "5,500+ درس"
  },
  {
    icon: Briefcase,
    title: "التطوير المهني والوظيفي",
    description: "تطوير المهارات وبناء المسار الوظيفي",
    color: "from-indigo-600 to-blue-500",
    stats: "3,800+ دورة"
  },
  {
    icon: Video,
    title: "البث المباشر والدورات",
    description: "دورات تفاعلية مباشرة في جميع المجالات",
    color: "from-red-500 to-pink-500",
    stats: "1,900+ بث مباشر"
  },
  {
    icon: BookOpen,
    title: "التدريس والدروس الخصوصية",
    description: "دروس خصوصية في جميع المواد الدراسية",
    color: "from-green-500 to-teal-500",
    stats: "950+ مدرس"
  }
];

const CategoryCards = () => {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-gradient">
            استكشف الفئات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر المجال الذي يناسب اهتماماتك وابدأ رحلتك اليوم
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const CardContent = (
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
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-sm font-medium text-foreground relative z-10 mb-4">
                  {category.stats}
                </div>

                {/* Explore Button */}
                <Button 
                  variant="ghost" 
                  className="group/btn hover:text-primary relative z-10 p-0"
                >
                  استكشف
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                </Button>

                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -ml-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              </Card>
            );
            
            return category.link ? (
              <Link key={index} to={category.link} className="block">
                {CardContent}
              </Link>
            ) : (
              CardContent
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
