import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/f6179843-5145-4563-d5aa-6e4690ae9a00/public" 
                alt="Rest Now" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold">Rest Now</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A lightweight screen break timer for macOS. Reduce eye strain, stay healthy.
            </p>
          </div>



        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Rest Now. Made with ❤️ for healthier screen habits.
          </p>
        </div>
      </div>
    </footer>
  );
};