import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  X,
  Timer,
  Video,
  Camera,
  MessageCircle,
  Info
} from "lucide-react";
import { useState } from "react";

const exercises = [
  {
    name: "تمرين البنش برس",
    muscleGroup: "صدر",
    sets: 4,
    reps: "10-12",
    rest: 90,
    notes: "حافظ على الظهر ملاصق للبنش",
    videoThumb: "🏋️"
  },
  {
    name: "تمرين الفلاي بالدمبل",
    muscleGroup: "صدر",
    sets: 3,
    reps: "12-15",
    rest: 60,
    notes: "نزول بطيء ورجوع سريع",
    videoThumb: "💪"
  },
  {
    name: "تمرين الضغط بالدمبل على مائل",
    muscleGroup: "صدر علوي",
    sets: 3,
    reps: "10-12",
    rest: 75,
    notes: "زاوية 30 درجة",
    videoThumb: "🏋️"
  }
];

const WorkoutInterface = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [repsCompleted, setRepsCompleted] = useState("");
  const [weightUsed, setWeightUsed] = useState("");
  const [isResting, setIsResting] = useState(false);
  const [restTime, setRestTime] = useState(90);
  const [completedSets, setCompletedSets] = useState<number[]>([]);

  const exercise = exercises[currentExercise];
  const totalExercises = exercises.length;
  const progressPercentage = ((currentExercise + 1) / totalExercises) * 100;

  const handleCompleteSet = () => {
    if (repsCompleted && weightUsed) {
      setCompletedSets([...completedSets, currentSet]);
      
      if (currentSet < exercise.sets) {
        setCurrentSet(currentSet + 1);
        setIsResting(true);
        setRestTime(exercise.rest);
        setRepsCompleted("");
        setWeightUsed("");
      } else if (currentExercise < totalExercises - 1) {
        setCurrentExercise(currentExercise + 1);
        setCurrentSet(1);
        setCompletedSets([]);
        setRepsCompleted("");
        setWeightUsed("");
      }
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-gradient-to-l from-orange-500 to-red-500 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between mb-3">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <X className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold">تمرين الصدر والتراي</h1>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              إنهاء
            </Button>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>التمرين {currentExercise + 1} من {totalExercises}</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-white/20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Rest Timer Modal */}
        {isResting && (
          <Card className="p-8 mb-6 bg-gradient-to-br from-cyan to-blue-500 text-white text-center">
            <Timer className="w-16 h-16 mx-auto mb-4 animate-pulse" />
            <h3 className="text-3xl font-bold mb-2">فترة الراحة</h3>
            <div className="text-6xl font-bold mb-4">{restTime}s</div>
            <div className="flex gap-3 justify-center">
              <Button 
                size="lg"
                className="bg-white text-cyan hover:bg-white/90"
                onClick={() => setIsResting(false)}
              >
                تخطي الراحة
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20"
                onClick={() => setRestTime(restTime + 15)}
              >
                +15 ثانية
              </Button>
            </div>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Exercise Video/Demo */}
            <Card className="p-0 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white relative">
                <div className="text-9xl">{exercise.videoThumb}</div>
                <Button 
                  size="icon"
                  className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md"
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-2 bg-orange-500">{exercise.muscleGroup}</Badge>
                    <h2 className="text-3xl font-bold text-foreground">{exercise.name}</h2>
                  </div>
                  <Button size="icon" variant="ghost">
                    <Info className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="flex gap-6 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">المجموعات</div>
                    <div className="text-2xl font-bold text-foreground">{currentSet}/{exercise.sets}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">التكرارات</div>
                    <div className="text-2xl font-bold text-foreground">{exercise.reps}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">الراحة</div>
                    <div className="text-2xl font-bold text-foreground">{exercise.rest}s</div>
                  </div>
                </div>
                
                <div className="glass-card p-4 rounded-xl">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{exercise.notes}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Set Logging */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">سجل المجموعة {currentSet}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    الوزن (كجم)
                  </label>
                  <Input 
                    type="number" 
                    placeholder="مثال: 60"
                    value={weightUsed}
                    onChange={(e) => setWeightUsed(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    التكرارات
                  </label>
                  <Input 
                    type="number" 
                    placeholder="مثال: 12"
                    value={repsCompleted}
                    onChange={(e) => setRepsCompleted(e.target.value)}
                    className="text-lg"
                  />
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-l from-green-500 to-emerald-500 hover:shadow-glow"
                onClick={handleCompleteSet}
                disabled={!repsCompleted || !weightUsed}
              >
                <Check className="w-5 h-5 ml-2" />
                إكمال المجموعة
              </Button>
            </Card>

            {/* Sets History */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">سجل المجموعات</h3>
              <div className="space-y-3">
                {[...Array(exercise.sets)].map((_, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl border-2 ${
                      completedSets.includes(index + 1) 
                        ? 'border-green-500 bg-green-500/10' 
                        : index + 1 === currentSet
                        ? 'border-primary bg-primary/10'
                        : 'border-muted bg-muted'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">المجموعة {index + 1}</span>
                      {completedSets.includes(index + 1) ? (
                        <Badge className="bg-green-500">
                          <Check className="w-3 h-3 ml-1" />
                          مكتمل
                        </Badge>
                      ) : index + 1 === currentSet ? (
                        <Badge className="bg-primary">جاري...</Badge>
                      ) : (
                        <Badge variant="outline">قادم</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Notes */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">ملاحظات</h3>
              <Textarea 
                placeholder="أضف ملاحظاتك حول هذا التمرين..."
                rows={4}
              />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Form Check */}
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" />
                فحص الأداء
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                صور فيديو لأدائك وأرسله لمدربك للحصول على تقييم
              </p>
              <Button variant="outline" className="w-full gap-2">
                <Camera className="w-4 h-4" />
                تصوير فيديو
              </Button>
            </Card>

            {/* Exercise Navigation */}
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">قائمة التمارين</h4>
              <div className="space-y-2">
                {exercises.map((ex, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentExercise(index);
                      setCurrentSet(1);
                      setCompletedSets([]);
                    }}
                    className={`w-full text-right p-3 rounded-xl transition-all ${
                      index === currentExercise
                        ? 'bg-primary text-white'
                        : index < currentExercise
                        ? 'bg-green-500/10 text-green-600'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{ex.name}</span>
                      {index < currentExercise && (
                        <Check className="w-4 h-4" />
                      )}
                    </div>
                    <div className="text-xs mt-1">
                      {ex.sets} مجموعات × {ex.reps} تكرار
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">إجراءات سريعة</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageCircle className="w-4 h-4" />
                  راسل المدرب
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Timer className="w-4 h-4" />
                  ضبط مؤقت
                </Button>
              </div>
            </Card>

            {/* Motivation */}
            <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white text-center">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="font-bold mb-2">أنت تقوم بعمل رائع!</h4>
              <p className="text-sm text-white/90">
                استمر على هذا الأداء وستحقق أهدافك قريباً
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-lg">
          <div className="container mx-auto max-w-4xl flex gap-4">
            <Button 
              variant="outline" 
              size="lg"
              className="flex-1"
              disabled={currentExercise === 0}
              onClick={() => {
                setCurrentExercise(currentExercise - 1);
                setCurrentSet(1);
                setCompletedSets([]);
              }}
            >
              <ChevronRight className="w-5 h-5 ml-2" />
              السابق
            </Button>
            <Button 
              size="lg"
              className="flex-1 bg-gradient-to-l from-orange-500 to-red-500"
              disabled={currentExercise === totalExercises - 1}
              onClick={() => {
                setCurrentExercise(currentExercise + 1);
                setCurrentSet(1);
                setCompletedSets([]);
              }}
            >
              التالي
              <ChevronLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutInterface;
