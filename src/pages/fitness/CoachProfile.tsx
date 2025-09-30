import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award, Users, Calendar, CheckCircle, MessageCircle, Share2, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "الباقة الأساسية",
    price: "15.750",
    duration: "شهر",
    features: [
      "3 جلسات أسبوعياً",
      "برنامج تدريب مخصص",
      "متابعة يومية",
      "استشارات غذائية أساسية"
    ],
    popular: false
  },
  {
    name: "الباقة المتقدمة",
    price: "28.500",
    duration: "شهر",
    features: [
      "5 جلسات أسبوعياً",
      "برنامج تدريب + تغذية شامل",
      "متابعة على مدار الساعة",
      "تحليل وتقييم شهري",
      "خطة وجبات مفصلة"
    ],
    popular: true
  },
  {
    name: "الباقة الاحترافية",
    price: "45.000",
    duration: "شهر",
    features: [
      "جلسات غير محدودة",
      "برنامج متكامل (تدريب + تغذية + ملاحق)",
      "متابعة شخصية مكثفة",
      "فيديوهات تحليل الأداء",
      "استشارات هاتفية مباشرة",
      "وصول لمكتبة التمارين الكاملة"
    ],
    popular: false
  }
];

const transformations = [
  { before: "🏋️", after: "💪", duration: "3 أشهر", result: "-15 كجم" },
  { before: "🏋️", after: "💪", duration: "6 أشهر", result: "+8 كجم عضل" },
  { before: "🏋️", after: "💪", duration: "4 أشهر", result: "-20 كجم" },
  { before: "🏋️", after: "💪", duration: "5 أشهر", result: "تحول كامل" }
];

const reviews = [
  {
    name: "أحمد محمود",
    rating: 5,
    comment: "مدرب محترف جداً! خسرت 18 كيلو في 4 أشهر مع الحفاظ على الكتلة العضلية. البرامج مصممة بعناية وفق احتياجاتي.",
    date: "منذ أسبوع",
    verified: true
  },
  {
    name: "فاطمة علي",
    rating: 5,
    comment: "أفضل استثمار في صحتي! المتابعة الدقيقة والتحفيز المستمر ساعدوني على الالتزام وتحقيق أهدافي.",
    date: "منذ أسبوعين",
    verified: true
  },
  {
    name: "خالد سعيد",
    rating: 5,
    comment: "خبرة عالية في التدريب وفهم عميق للجسم. البرامج فعالة والنتائج مذهلة!",
    date: "منذ شهر",
    verified: true
  }
];

const CoachProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Coach Info */}
      <section className="relative pt-24 pb-12 gradient-hero overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Coach Avatar */}
              <div className="relative">
                <Avatar className="w-40 h-40 border-4 border-white shadow-glow">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=coach" />
                  <AvatarFallback>محمد</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Coach Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">محمد أحمد الصادق</h1>
                    <p className="text-white/90 text-lg">مدرب لياقة معتمد | أخصائي تغذية رياضية</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-orange-500 text-white">معتمد ISSA</Badge>
                  <Badge className="bg-cyan text-white">أخصائي تغذية</Badge>
                  <Badge className="bg-yellow text-black">مدرب CrossFit</Badge>
                  <Badge className="bg-green-500 text-white">خبرة +7 سنوات</Badge>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center glass-card p-4 rounded-2xl">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Users className="w-5 h-5 text-cyan" />
                      <div className="text-3xl font-bold text-white">127</div>
                    </div>
                    <div className="text-white/80 text-sm">عميل نشط</div>
                  </div>
                  <div className="text-center glass-card p-4 rounded-2xl">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Award className="w-5 h-5 text-yellow" />
                      <div className="text-3xl font-bold text-white">7</div>
                    </div>
                    <div className="text-white/80 text-sm">سنوات خبرة</div>
                  </div>
                  <div className="text-center glass-card p-4 rounded-2xl">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Star className="w-5 h-5 text-yellow fill-yellow" />
                      <div className="text-3xl font-bold text-white">4.9</div>
                    </div>
                    <div className="text-white/80 text-sm">التقييم</div>
                  </div>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <h3 className="text-white font-semibold mb-3">التخصصات:</h3>
                  <div className="flex flex-wrap gap-2">
                    {["خسارة الوزن", "بناء العضلات", "تحسين اللياقة", "تغذية رياضية", "إعادة تأهيل"].map((spec) => (
                      <span key={spec} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="packages" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="packages">الباقات</TabsTrigger>
              <TabsTrigger value="about">نبذة عني</TabsTrigger>
              <TabsTrigger value="results">النتائج</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات</TabsTrigger>
            </TabsList>

            {/* Packages Tab */}
            <TabsContent value="packages">
              <div className="grid md:grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <Card 
                    key={index} 
                    className={`p-8 relative ${pkg.popular ? 'border-2 border-orange-500 shadow-glow' : ''}`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-l from-orange-500 to-red-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                        الأكثر شعبية
                      </div>
                    )}
                    
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                      <span className="text-muted-foreground mr-2">دينار / {pkg.duration}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${pkg.popular ? 'bg-gradient-to-l from-orange-500 to-red-500 hover:shadow-glow' : ''}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      اشترك الآن
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">نبذة عني</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    مدرب لياقة بدنية معتمد مع أكثر من 7 سنوات من الخبرة في مجال التدريب الشخصي والتغذية الرياضية. 
                    متخصص في تصميم برامج تدريبية مخصصة تناسب جميع المستويات والأهداف.
                  </p>
                  <p>
                    حاصل على شهادات دولية من ISSA و NASM في التدريب الشخصي والتغذية الرياضية. 
                    أؤمن بأن التحول الحقيقي يبدأ من العقل، لذلك أركز على بناء عادات صحية مستدامة.
                  </p>
                  <p>
                    ساعدت أكثر من 300 شخص على تحقيق أهدافهم الصحية واللياقية، من خسارة الوزن إلى بناء العضلات 
                    والتحضير للمنافسات الرياضية.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">الشهادات:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span>ISSA Certified Personal Trainer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span>NASM Nutrition Coach</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span>CrossFit Level 2 Trainer</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">التخصصات:</h4>
                      <ul className="space-y-2">
                        <li>✓ خسارة الوزن والدهون</li>
                        <li>✓ بناء وتضخيم العضلات</li>
                        <li>✓ التغذية الرياضية</li>
                        <li>✓ تحسين الأداء الرياضي</li>
                        <li>✓ إعادة التأهيل بعد الإصابات</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">قصص نجاح عملائي</h3>
                <p className="text-muted-foreground">تحولات حقيقية لعملاء حققوا أهدافهم معي</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {transformations.map((transform, index) => (
                  <Card key={index} className="p-6 hover:shadow-card-hover transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-5xl">{transform.before}</div>
                        <div className="text-3xl">→</div>
                        <div className="text-5xl">{transform.after}</div>
                      </div>
                      <Badge className="bg-green-500 text-white">{transform.result}</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        المدة: {transform.duration}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">تقييمات العملاء</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow text-yellow" />
                      ))}
                    </div>
                    <span className="text-muted-foreground">4.9 من 5 (127 تقييم)</span>
                  </div>
                </div>
                <Button variant="outline" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  اترك تقييم
                </Button>
              </div>

              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{review.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            {review.verified && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoachProfile;
