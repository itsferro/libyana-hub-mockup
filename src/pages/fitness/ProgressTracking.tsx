import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingDown, 
  TrendingUp, 
  Calendar,
  Camera,
  Trophy,
  Target,
  Flame,
  Activity
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const weightData = [
  { date: 'الأسبوع 1', weight: 86.5, target: 85 },
  { date: 'الأسبوع 2', weight: 85.2, target: 84 },
  { date: 'الأسبوع 3', weight: 84.5, target: 83 },
  { date: 'الأسبوع 4', weight: 83.8, target: 82 },
  { date: 'الأسبوع 5', weight: 82.5, target: 81 },
  { date: 'الأسبوع 6', weight: 81.7, target: 80 },
  { date: 'الأسبوع 7', weight: 80.9, target: 79 },
  { date: 'الأسبوع 8', weight: 79.8, target: 78 },
  { date: 'الأسبوع 9', weight: 78.5, target: 77 },
];

const workoutData = [
  { month: 'يناير', workouts: 16 },
  { month: 'فبراير', workouts: 18 },
  { month: 'مارس', workouts: 20 },
  { month: 'أبريل', workouts: 22 },
  { month: 'مايو', workouts: 19 },
  { month: 'يونيو', workouts: 23 },
];

const bodyComposition = [
  { month: 'البداية', fat: 28, muscle: 32, water: 40 },
  { month: 'شهر 1', fat: 26, muscle: 33, water: 41 },
  { month: 'شهر 2', fat: 24, muscle: 34, water: 42 },
  { month: 'شهر 3', fat: 22, muscle: 35, water: 43 },
];

const measurements = [
  { part: 'الصدر', start: 105, current: 98, target: 95, unit: 'سم' },
  { part: 'الخصر', start: 100, current: 88, target: 80, unit: 'سم' },
  { part: 'الذراع', start: 32, current: 35, target: 38, unit: 'سم' },
  { part: 'الفخذ', start: 58, current: 55, target: 52, unit: 'سم' },
];

const personalRecords = [
  { exercise: 'بنش برس', previous: 70, current: 85, improvement: '+15 كجم', date: 'منذ أسبوع' },
  { exercise: 'سكوات', previous: 90, current: 110, improvement: '+20 كجم', date: 'منذ أسبوعين' },
  { exercise: 'ديدليفت', previous: 100, current: 130, improvement: '+30 كجم', date: 'منذ 3 أسابيع' },
  { exercise: 'شولدر برس', previous: 40, current: 50, improvement: '+10 كجم', date: 'منذ شهر' },
];

const achievements = [
  { icon: '🔥', title: 'سلسلة 30 يوم', desc: 'تمرين لمدة 30 يوم متواصل', unlocked: true },
  { icon: '💪', title: 'قوة خارقة', desc: 'رفع 100 كجم في البنش برس', unlocked: true },
  { icon: '🏃', title: 'عداء ماراثون', desc: 'جري 100 كم إجمالي', unlocked: true },
  { icon: '⚡', title: 'سرعة البرق', desc: 'إكمال 50 تمرين', unlocked: true },
  { icon: '🎯', title: 'ملتزم', desc: 'تحقيق الهدف الأسبوعي 12 أسبوع', unlocked: false },
  { icon: '🏆', title: 'البطل', desc: 'الوصول للوزن المثالي', unlocked: false },
];

const ProgressTracking = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">تتبع التقدم</h1>
            <p className="text-muted-foreground">راقب تطورك وإنجازاتك على مدار رحلتك</p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
              <TrendingDown className="w-8 h-8 mb-3" />
              <div className="text-3xl font-bold mb-1">-8 كجم</div>
              <div className="text-white/90">خسارة وزن</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <Flame className="w-8 h-8 mb-3" />
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-white/90">أيام متواصلة</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-cyan to-blue-500 text-white">
              <Activity className="w-8 h-8 mb-3" />
              <div className="text-3xl font-bold mb-1">127</div>
              <div className="text-white/90">تمرين مكتمل</div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <Trophy className="w-8 h-8 mb-3" />
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-white/90">أرقام قياسية</div>
            </Card>
          </div>

          <Tabs defaultValue="weight" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="weight">الوزن</TabsTrigger>
              <TabsTrigger value="photos">الصور</TabsTrigger>
              <TabsTrigger value="measurements">القياسات</TabsTrigger>
              <TabsTrigger value="records">الأرقام القياسية</TabsTrigger>
              <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
            </TabsList>

            {/* Weight Tab */}
            <TabsContent value="weight" className="space-y-6">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">تطور الوزن</h3>
                    <p className="text-muted-foreground">مقارنة الوزن الحالي مع الهدف</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient mb-1">78.5</div>
                    <div className="text-sm text-muted-foreground">كجم</div>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={weightData}>
                    <defs>
                      <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6B2B8C" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#6B2B8C" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[75, 90]} />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#6B2B8C" 
                      fill="url(#colorWeight)" 
                      strokeWidth={3}
                      name="الوزن"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#FF4D00" 
                      strokeDasharray="5 5"
                      strokeWidth={2}
                      dot={false}
                      name="الهدف"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">التمارين الشهرية</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={workoutData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="workouts" fill="#FF4D00" radius={[8, 8, 0, 0]} name="التمارين" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">تكوين الجسم</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={bodyComposition}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="fat" fill="#FF4D00" name="دهون" />
                      <Bar dataKey="muscle" fill="#00D95F" name="عضلات" />
                      <Bar dataKey="water" fill="#00D9FF" name="ماء" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>
              </div>
            </TabsContent>

            {/* Photos Tab */}
            <TabsContent value="photos">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">صور التقدم</h3>
                  <Button className="gap-2">
                    <Camera className="w-4 h-4" />
                    إضافة صورة
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <Badge className="mb-3">البداية - يناير 2024</Badge>
                    <div className="aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center text-6xl">
                      🏋️
                    </div>
                  </div>
                  <div>
                    <Badge className="mb-3 bg-green-500">الحالي - يونيو 2024</Badge>
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-6xl">
                      💪
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-green-500 mb-1">-8 كجم</div>
                      <div className="text-sm text-muted-foreground">تغير الوزن</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan mb-1">-12 سم</div>
                      <div className="text-sm text-muted-foreground">محيط الخصر</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-500 mb-1">6 أشهر</div>
                      <div className="text-sm text-muted-foreground">المدة</div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Measurements Tab */}
            <TabsContent value="measurements">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">قياسات الجسم</h3>
                  <Button variant="outline">تحديث القياسات</Button>
                </div>

                <div className="space-y-6">
                  {measurements.map((measurement, index) => (
                    <div key={index} className="glass-card p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-foreground">{measurement.part}</h4>
                        <div className="flex items-center gap-2">
                          {measurement.current < measurement.start ? (
                            <TrendingDown className="w-5 h-5 text-green-500" />
                          ) : (
                            <TrendingUp className="w-5 h-5 text-cyan" />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {Math.abs(measurement.current - measurement.start)} {measurement.unit}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">البداية</div>
                          <div className="text-2xl font-bold text-foreground">
                            {measurement.start}
                            <span className="text-sm text-muted-foreground mr-1">{measurement.unit}</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">الحالي</div>
                          <div className="text-2xl font-bold text-gradient">
                            {measurement.current}
                            <span className="text-sm text-muted-foreground mr-1">{measurement.unit}</span>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">الهدف</div>
                          <div className="text-2xl font-bold text-foreground">
                            {measurement.target}
                            <span className="text-sm text-muted-foreground mr-1">{measurement.unit}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="absolute h-full bg-gradient-to-l from-primary to-secondary rounded-full"
                          style={{ 
                            width: `${((measurement.start - measurement.current) / (measurement.start - measurement.target)) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Personal Records Tab */}
            <TabsContent value="records">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-8 h-8 text-yellow" />
                    <h3 className="text-2xl font-bold text-foreground">أرقامك القياسية</h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {personalRecords.map((record, index) => (
                    <div 
                      key={index}
                      className="glass-card p-6 rounded-xl hover:shadow-card-hover transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-1">{record.exercise}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{record.date}</span>
                          </div>
                        </div>
                        <Badge className="bg-green-500 text-white">{record.improvement}</Badge>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">السابق</div>
                          <div className="text-2xl font-bold text-muted-foreground/60">
                            {record.previous} كجم
                          </div>
                        </div>
                        <div className="text-2xl">→</div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">الحالي</div>
                          <div className="text-2xl font-bold text-gradient">
                            {record.current} كجم
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Achievements Tab */}
            <TabsContent value="achievements">
              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">الإنجازات</h3>
                  <p className="text-muted-foreground">اجمع الشارات وافتخر بإنجازاتك</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-2xl text-center transition-all ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-glow' 
                          : 'bg-muted'
                      }`}
                    >
                      <div className="text-6xl mb-4 opacity-${achievement.unlocked ? '100' : '30'}">
                        {achievement.icon}
                      </div>
                      <h4 className={`text-lg font-bold mb-2 ${achievement.unlocked ? 'text-white' : 'text-foreground'}`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${achievement.unlocked ? 'text-white/90' : 'text-muted-foreground'}`}>
                        {achievement.desc}
                      </p>
                      {achievement.unlocked && (
                        <Badge className="mt-4 bg-white/20 text-white">مفتوح</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
