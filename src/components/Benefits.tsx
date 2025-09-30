import { CheckCircle2, Users, TrendingUp, Shield, Star, Zap, Globe, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const creatorBenefits = [
  {
    icon: TrendingUp,
    title: "فرص دخل متعددة",
    description: "حقق دخلاً ثابتاً من خلال محتواك الرقمي"
  },
  {
    icon: Zap,
    title: "أدوات احترافية",
    description: "أدوات متقدمة لإدارة المحتوى والتواصل مع المشتركين"
  },
  {
    icon: Users,
    title: "قاعدة عملاء واسعة",
    description: "وصول مباشر لعملاء ليبيانا موبايل"
  },
  {
    icon: Shield,
    title: "دفع مرن وآمن",
    description: "استلم أرباحك بسهولة عبر نظام الدفع الآمن"
  }
];

const subscriberBenefits = [
  {
    icon: Star,
    title: "محتوى محلي عالي الجودة",
    description: "تعلم من مبدعين ليبيين في مختلف المجالات"
  },
  {
    icon: Globe,
    title: "تفاعل مباشر",
    description: "تواصل مباشر مع المدربين والمبدعين"
  },
  {
    icon: CheckCircle2,
    title: "خيارات دفع متعددة",
    description: "ادفع بسهولة عبر رصيد ليبيانا أو البطاقة البنكية"
  },
  {
    icon: Award,
    title: "تتبع التقدم",
    description: "راقب تقدمك وإنجازاتك في رحلة التعلم"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-gradient">
            لماذا ليبيانا هب؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            منصة شاملة تلبي احتياجات المبدعين والمشتركين على حد سواء
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Creators */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-heading mb-2 text-foreground">
                للمبدعين والمدربين
              </h3>
              <p className="text-muted-foreground">
                ابدأ بمشاركة خبراتك واحصل على دخل ثابت
              </p>
            </div>
            <div className="space-y-6">
              {creatorBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-x-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-3 flex-shrink-0">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-heading mb-2 text-foreground">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* For Subscribers */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-heading mb-2 text-foreground">
                للمشتركين والمتعلمين
              </h3>
              <p className="text-muted-foreground">
                استكشف محتوى متنوع وطور مهاراتك
              </p>
            </div>
            <div className="space-y-6">
              {subscriberBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-card-hover transition-all duration-300 hover:-translate-x-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-cyan p-3 flex-shrink-0">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-heading mb-2 text-foreground">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
