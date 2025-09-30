import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارة أحمد",
    role: "مدربة لياقة بدنية",
    content: "ليبيانا هب غيرت حياتي المهنية تماماً. استطعت الوصول لأكثر من ٥٠٠ متدرب وبناء مجتمع رائع!",
    rating: 5,
    avatar: "س.أ"
  },
  {
    name: "محمد علي",
    role: "طبيب استشاري",
    content: "المنصة سهلة الاستخدام وتوفر كل الأدوات اللازمة لتقديم استشارات طبية عن بعد بشكل احترافي.",
    rating: 5,
    avatar: "م.ع"
  },
  {
    name: "فاطمة حسن",
    role: "طاهية محترفة",
    content: "أشارك وصفاتي وأقدم دروس طبخ مباشرة. المنصة وفرت لي فرصة رائعة لمشاركة شغفي مع الآخرين.",
    rating: 5,
    avatar: "ف.ح"
  },
  {
    name: "عمر إبراهيم",
    role: "فنان تشكيلي",
    content: "وجدت في ليبيانا هب المنصة المثالية لتعليم الرسم والفنون. المتابعون متفاعلون والنظام سهل جداً.",
    rating: 5,
    avatar: "ع.إ"
  },
  {
    name: "ليلى كريم",
    role: "مدربة تطوير مهني",
    content: "ساعدتني المنصة في الوصول لشريحة واسعة من الباحثين عن التطوير المهني. تجربة رائعة!",
    rating: 5,
    avatar: "ل.ك"
  },
  {
    name: "أحمد ناصر",
    role: "مدرس رياضيات",
    content: "أقدم دروس خصوصية لطلاب من مختلف المراحل الدراسية. النظام منظم وسهل التعامل معه.",
    rating: 5,
    avatar: "أ.ن"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-gradient">
            قصص نجاح ملهمة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            انضم لآلاف المبدعين والمتعلمين الراضين عن تجربتهم
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
              <Quote className="absolute top-4 left-4 w-12 h-12 text-primary/10" />

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4 mr-auto">
                {testimonial.avatar}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic text-right">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="text-right">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-l from-primary via-secondary to-accent" />
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full glass-card">
            <span className="text-muted-foreground">
              انضم لأكثر من <strong className="text-foreground">١٠٬٠٠٠</strong> عضو سعيد
            </span>
            <div className="flex -space-x-2">
              {['س.أ', 'م.ع', 'ف.ح', 'ع.إ'].map((avatar, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold border-2 border-background"
                >
                  {avatar}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
