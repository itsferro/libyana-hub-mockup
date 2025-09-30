import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-secondary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info - Right Side for RTL */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">ليبيانا هب</h3>
            <p className="text-white/80 mb-6">
              منصة ليبيانا للمحتوى الرقمي - منصتك الشاملة لتمكين المبدعين المحليين. مدعوم من ليبيانا موبايل.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white rounded-full">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {['من نحن', 'كيف تعمل المنصة', 'الفئات', 'الأسعار', 'المدونة', 'اتصل بنا'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">الفئات</h4>
            <ul className="space-y-3">
              {['التدريب الرياضي', 'الاستشارات الصحية', 'الطبخ والوصفات', 'الفنون الإبداعية', 'التطوير المهني', 'البث المباشر', 'التدريس'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  طرابلس، ليبيا
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80" dir="ltr">
                  +218 XX XXX XXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">
                  info@libyanahub.ly
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">حمل التطبيق</h5>
              <div className="space-y-2">
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white w-full justify-start">
                  تحميل للأيفون
                </Button>
                <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white w-full justify-start">
                  تحميل للأندرويد
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                شروط الخدمة
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                سياسة الكوكيز
              </a>
            </div>
            <p className="text-white/70 text-sm">
              © {currentYear} ليبيانا هب - مدعوم من ليبيانا موبايل. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
