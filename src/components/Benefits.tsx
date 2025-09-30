import { Card } from "@/components/ui/card";
import { Check, Zap, Shield, TrendingUp, Users, Award, Globe } from "lucide-react";

const creatorBenefits = [
  {
    icon: Zap,
    title: "Quick Setup",
    description: "Start selling in minutes with our intuitive platform"
  },
  {
    icon: TrendingUp,
    title: "Maximize Earnings",
    description: "Keep up to 80% of your sales revenue"
  },
  {
    icon: Users,
    title: "Built-in Audience",
    description: "Reach thousands of potential customers instantly"
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Protected payments and content delivery"
  }
];

const userBenefits = [
  {
    icon: Globe,
    title: "Vast Selection",
    description: "Access 50,000+ digital products and resources"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "All content reviewed and verified by our team"
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Download and use immediately after purchase"
  },
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    description: "30-day refund policy on all purchases"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-4 text-gradient">
            Why Choose LibyanaHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefits for everyone - whether you're creating or consuming content
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Creators */}
          <div className="animate-fade-in">
            <Card className="p-8 h-full gradient-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <Zap className="w-5 h-5 text-yellow" />
                  <span className="text-white font-semibold">For Creators</span>
                </div>

                <h3 className="text-3xl font-bold font-heading text-white mb-6">
                  Monetize Your Creativity
                </h3>

                <div className="space-y-6">
                  {creatorBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-white/80">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>

          {/* For Users */}
          <div className="animate-fade-in">
            <Card className="p-8 h-full gradient-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                  <Users className="w-5 h-5 text-yellow" />
                  <span className="text-white font-semibold">For Users</span>
                </div>

                <h3 className="text-3xl font-bold font-heading text-white mb-6">
                  Access Premium Content
                </h3>

                <div className="space-y-6">
                  {userBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-white/80">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
