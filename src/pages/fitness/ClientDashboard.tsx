import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { 
  Dumbbell, 
  Flame, 
  TrendingUp, 
  MessageCircle, 
  Calendar as CalendarIcon,
  Trophy,
  Activity,
  Apple,
  Timer,
  Play,
  ChevronLeft
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const ClientDashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="mb-8 gradient-hero rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan/20 rounded-full blur-2xl" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20 border-4 border-white">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=client" />
                  <AvatarFallback>أح</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">مرحباً، أحمد!</h1>
                  <p className="text-white/90">جاهز لتحدي اليوم؟ 💪</p>
                </div>
              </div>
              
              <div className="text-center glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <span className="text-4xl font-bold text-white">12</span>
                </div>
                <p className="text-white/80 text-sm">يوم متواصل 🔥</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Workout */}
              <Card className="p-8 bg-gradient-to-br from-orange-500 to-red-500 text-white border-0 shadow-glow">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="bg-white/20 text-white mb-3">تمرين اليوم</Badge>
                    <h2 className="text-3xl font-bold mb-2">تمرين الصدر والتراي</h2>
                    <p className="text-white/90">8 تمارين • 45-60 دقيقة</p>
                  </div>
                  <Dumbbell className="w-12 h-12" />
                </div>
                
                <div className="flex gap-4 mb-6">
                  <div className="glass-card px-4 py-2 rounded-xl">
                    <div className="text-sm text-white/80">المستوى</div>
                    <div className="font-semibold">متوسط</div>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-xl">
                    <div className="text-sm text-white/80">السعرات</div>
                    <div className="font-semibold">~350 كالوري</div>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-xl">
                    <div className="text-sm text-white/80">المعدات</div>
                    <div className="font-semibold">أوزان + بار</div>
                  </div>
                </div>
                
                <Button size="lg" className="w-full bg-white text-orange-500 hover:bg-white/90 text-lg gap-2">
                  <Play className="w-5 h-5" />
                  ابدأ التمرين الآن
                </Button>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-card-hover transition-all">
                  <Activity className="w-8 h-8 text-cyan mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">4/5</div>
                  <div className="text-sm text-muted-foreground">تمارين الأسبوع</div>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-card-hover transition-all">
                  <Flame className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">1,240</div>
                  <div className="text-sm text-muted-foreground">سعرة محروقة</div>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-card-hover transition-all">
                  <Timer className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">3.5</div>
                  <div className="text-sm text-muted-foreground">ساعات نشاط</div>
                </Card>
                
                <Card className="p-6 text-center hover:shadow-card-hover transition-all">
                  <Trophy className="w-8 h-8 text-yellow mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">18</div>
                  <div className="text-sm text-muted-foreground">إنجاز هذا الشهر</div>
                </Card>
              </div>

              {/* Progress Summary */}
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">ملخص التقدم</h3>
                  <Button variant="ghost" className="gap-2">
                    عرض التفاصيل
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">الوزن</span>
                      <span className="font-semibold text-green-500">-8 كجم</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">78.5 كجم</div>
                    <Progress value={60} className="h-2" />
                    <div className="text-sm text-muted-foreground mt-1">الهدف: 72 كجم</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">محيط الخصر</span>
                      <span className="font-semibold text-green-500">-12 سم</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">88 سم</div>
                    <Progress value={70} className="h-2" />
                    <div className="text-sm text-muted-foreground mt-1">الهدف: 80 سم</div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">نسبة الدهون</span>
                      <span className="font-semibold text-green-500">-4%</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">22%</div>
                    <Progress value={50} className="h-2" />
                    <div className="text-sm text-muted-foreground mt-1">الهدف: 15%</div>
                  </div>
                </div>
              </Card>

              {/* Nutrition Targets */}
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Apple className="w-6 h-6 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">أهداف التغذية اليومية</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">البروتين</span>
                      <span className="text-sm text-muted-foreground">140 / 180 جرام</span>
                    </div>
                    <Progress value={78} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">الكربوهيدرات</span>
                      <span className="text-sm text-muted-foreground">220 / 250 جرام</span>
                    </div>
                    <Progress value={88} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">الدهون</span>
                      <span className="text-sm text-muted-foreground">45 / 60 جرام</span>
                    </div>
                    <Progress value={75} className="h-3" />
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">إجمالي السعرات</span>
                      <span className="text-lg font-bold text-gradient">1,850 / 2,200</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Coach Card */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=coach" />
                    <AvatarFallback>محمد</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">مدربك</h4>
                    <p className="text-sm text-muted-foreground">محمد أحمد الصادق</p>
                  </div>
                </div>
                
                <Button className="w-full gap-2" variant="outline">
                  <MessageCircle className="w-4 h-4" />
                  راسل مدربك
                </Button>
              </Card>

              {/* Calendar */}
              <Card className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  تقويم التمارين
                </h4>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0"
                />
              </Card>

              {/* Recent Messages */}
              <Card className="p-6">
                <h4 className="font-semibold text-foreground mb-4">رسائل حديثة</h4>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=coach" />
                        <AvatarFallback>م</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">أحسنت! استمر على هذا المستوى 💪</p>
                        <span className="text-xs text-muted-foreground">منذ ساعتين</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=coach" />
                        <AvatarFallback>م</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">لا تنسى زيادة البروتين في وجبة الغداء</p>
                        <span className="text-xs text-muted-foreground">أمس</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Weekly Goal */}
              <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                <h4 className="font-semibold mb-3">هدف الأسبوع</h4>
                <div className="text-3xl font-bold mb-2">5/5</div>
                <p className="text-white/90 text-sm mb-4">تمارين مكتملة هذا الأسبوع!</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((day) => (
                    <div 
                      key={day} 
                      className="flex-1 h-2 bg-white/30 rounded-full overflow-hidden"
                    >
                      <div className="h-full bg-white rounded-full" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
