import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "الرئيسية", href: "#" },
    { label: "الفئات", href: "#categories" },
    { label: "المدربين", href: "#" },
    { label: "المدونة", href: "#" },
    { label: "الفيديوهات", href: "#" },
    { label: "من نحن", href: "#" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass-card border-b border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* CTA Buttons - Left Side for RTL */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              تسجيل الدخول
            </Button>
            <Button className="bg-gradient-to-l from-accent to-secondary hover:shadow-glow transition-all duration-300">
              ابدأ الآن
            </Button>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo - Right Side for RTL */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold font-heading text-gradient">
                ليبيانا هب
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 px-4 pt-4 border-t border-primary/10">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
                  تسجيل الدخول
                </Button>
                <Button className="bg-gradient-to-l from-accent to-secondary hover:shadow-glow transition-all duration-300 w-full">
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
