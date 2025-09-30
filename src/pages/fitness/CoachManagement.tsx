import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Calendar,
  DollarSign,
  Search,
  Plus,
  Send,
  Dumbbell,
  CheckCircle,
  Clock,
  BarChart3
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const clients = [
  {
    name: 'أحمد محمود',
    avatar: 'أ.م',
    status: 'active',
    package: 'المتقدمة',
    progress: 85,
    lastActivity: 'منذ ساعة',
    weight: '78.5 كجم',
    target: '72 كجم',
    workouts: 45
  },
  {
    name: 'فاطمة علي',
    avatar: 'ف.ع',
    status: 'active',
    package: 'الأساسية',
    progress: 92,
    lastActivity: 'منذ 3 ساعات',
    weight: '65 كجم',
    target: '60 كجم',
    workouts: 38
  },
  {
    name: 'خالد سعيد',
    avatar: 'خ.س',
    status: 'pending',
    package: 'الاحترافية',
    progress: 67,
    lastActivity: 'منذ يوم',
    weight: '92 كجم',
    target: '85 كجم',
    workouts: 52
  },
  {
    name: 'نور حسن',
    avatar: 'ن.ح',
    status: 'active',
    package: 'المتقدمة',
    progress: 78,
    lastActivity: 'منذ 2 ساعة',
    weight: '58 كجم',
    target: '55 كجم',
    workouts: 41
  }
];

const revenueData = [
  { month: 'يناير', revenue: 3500 },
  { month: 'فبراير', revenue: 4200 },
  { month: 'مارس', revenue: 4800 },
  { month: 'أبريل', revenue: 5100 },
  { month: 'مايو', revenue: 5800 },
  { month: 'يونيو', revenue: 6400 },
];

const clientGrowth = [
  { month: 'يناير', clients: 85 },
  { month: 'فبراير', clients: 92 },
  { month: 'مارس', clients: 103 },
  { month: 'أبريل', clients: 115 },
  { month: 'مايو', clients: 121 },
  { month: 'يونيو', clients: 127 },
];

const workoutTemplates = [
  {
    name: 'خسارة الوزن - مبتدئ',
    exercises: 8,
    duration: '30-40 دقيقة',
    level: 'مبتدئ',
    used: 23
  },
  {
    name: 'بناء العضلات - متوسط',
    exercises: 10,
    duration: '45-60 دقيقة',
    level: 'متوسط',
    used: 45
  },
  {
    name: 'تمرين كامل الجسم',
    exercises: 12,
    duration: '60-75 دقيقة',
    level: 'متقدم',
    used: 18
  },
  {
    name: 'HIIT للحرق السريع',
    exercises: 6,
    duration: '20-30 دقيقة',
    level: 'متوسط',
    used: 31
  }
];

const upcomingSessions = [
  {
    client: 'أحمد محمود',
    time: '09:00 صباحاً',
    type: 'استشارة غذائية',
    duration: '30 دقيقة'
  },
  {
    client: 'فاطمة علي',
    time: '11:00 صباحاً',
    type: 'جلسة تدريب',
    duration: '60 دقيقة'
  },
  {
    client: 'خالد سعيد',
    time: '02:00 مساءً',
    type: 'متابعة تقدم',
    duration: '45 دقيقة'
  }
];

const CoachManagement = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">لوحة التحكم</h1>
              <p className="text-muted-foreground">إدارة عملائك ومتابعة أدائك</p>
            </div>
            <Button className="gap-2 bg-gradient-to-l from-orange-500 to-red-500">
              <Plus className="w-4 h-4" />
              إضافة عميل جديد
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-8 h-8 text-primary" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">127</div>
              <div className="text-sm text-muted-foreground">إجمالي العملاء</div>
              <div className="text-xs text-green-500 mt-2">+6 هذا الشهر</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-cyan" />
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">6,400</div>
              <div className="text-sm text-muted-foreground">دينار / شهر</div>
              <div className="text-xs text-green-500 mt-2">+12% عن الشهر السابق</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Dumbbell className="w-8 h-8 text-orange-500" />
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">520</div>
              <div className="text-sm text-muted-foreground">تمرين مكتمل</div>
              <div className="text-xs text-green-500 mt-2">هذا الشهر</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <MessageCircle className="w-8 h-8 text-purple-500" />
                <Badge className="bg-red-500">3</Badge>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">18</div>
              <div className="text-sm text-muted-foreground">رسائل جديدة</div>
              <div className="text-xs text-muted-foreground mt-2">3 غير مقروءة</div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Analytics */}
              <Card className="p-8">
                <Tabs defaultValue="revenue" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="revenue">الإيرادات</TabsTrigger>
                    <TabsTrigger value="clients">نمو العملاء</TabsTrigger>
                  </TabsList>

                  <TabsContent value="revenue">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">تحليل الإيرادات</h3>
                      <p className="text-muted-foreground">الدخل الشهري خلال آخر 6 أشهر</p>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#00D9FF" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="revenue" 
                          stroke="#00D9FF" 
                          fill="url(#colorRevenue)"
                          strokeWidth={3}
                          name="الإيرادات (دينار)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </TabsContent>

                  <TabsContent value="clients">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">نمو قاعدة العملاء</h3>
                      <p className="text-muted-foreground">عدد العملاء النشطين شهرياً</p>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={clientGrowth}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar 
                          dataKey="clients" 
                          fill="#6B2B8C" 
                          radius={[8, 8, 0, 0]}
                          name="العملاء"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </TabsContent>
                </Tabs>
              </Card>

              {/* Clients List */}
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">قائمة العملاء</h3>
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="بحث عن عميل..."
                      className="pr-10 w-64"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <div 
                      key={index}
                      className="glass-card p-6 rounded-xl hover:shadow-card-hover transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="w-14 h-14">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                            {client.avatar}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">{client.name}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                <span>{client.lastActivity}</span>
                              </div>
                            </div>
                            <Badge 
                              className={
                                client.status === 'active' 
                                  ? 'bg-green-500' 
                                  : 'bg-orange-500'
                              }
                            >
                              {client.status === 'active' ? 'نشط' : 'معلق'}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-4 gap-4 mb-4">
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">الباقة</div>
                              <div className="font-medium text-foreground">{client.package}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">الوزن الحالي</div>
                              <div className="font-medium text-foreground">{client.weight}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">الهدف</div>
                              <div className="font-medium text-foreground">{client.target}</div>
                            </div>
                            <div>
                              <div className="text-xs text-muted-foreground mb-1">التمارين</div>
                              <div className="font-medium text-foreground">{client.workouts}</div>
                            </div>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">التقدم</span>
                              <span className="font-semibold text-foreground">{client.progress}%</span>
                            </div>
                            <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="absolute h-full bg-gradient-to-l from-primary to-secondary rounded-full"
                                style={{ width: `${client.progress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1 gap-2">
                              <Dumbbell className="w-4 h-4" />
                              تعيين تمرين
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 gap-2">
                              <MessageCircle className="w-4 h-4" />
                              إرسال رسالة
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 gap-2">
                              <BarChart3 className="w-4 h-4" />
                              التقرير
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Sessions */}
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">الجلسات القادمة</h4>
                </div>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{session.client}</span>
                        <Badge variant="outline">{session.time}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {session.type} • {session.duration}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">
                  عرض التقويم الكامل
                </Button>
              </Card>

              {/* Workout Templates */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">قوالب التمارين</h4>
                  <Button size="sm" variant="ghost">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {workoutTemplates.map((template, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl cursor-pointer hover:bg-muted/50 transition-all">
                      <div className="font-medium text-foreground mb-2">{template.name}</div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span>{template.exercises} تمارين</span>
                        <span>•</span>
                        <span>{template.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">{template.level}</Badge>
                        <span className="text-xs text-muted-foreground">استخدم {template.used} مرة</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                <h4 className="font-semibold mb-4">إجراءات سريعة</h4>
                <div className="space-y-2">
                  <Button className="w-full justify-start gap-2 bg-white/20 hover:bg-white/30 text-white border-0">
                    <Send className="w-4 h-4" />
                    إرسال إشعار جماعي
                  </Button>
                  <Button className="w-full justify-start gap-2 bg-white/20 hover:bg-white/30 text-white border-0">
                    <Plus className="w-4 h-4" />
                    إنشاء تمرين جديد
                  </Button>
                  <Button className="w-full justify-start gap-2 bg-white/20 hover:bg-white/30 text-white border-0">
                    <BarChart3 className="w-4 h-4" />
                    تقرير شهري
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachManagement;
