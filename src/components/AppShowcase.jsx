import React from 'react';
import { Card, CardContent } from './ui/card';

export const AppShowcase = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            See <span className="text-gradient">Rest Now</span> in action
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into the clean, minimal interface designed to stay out of your way.
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Break Notification Screenshot */}
          <Card className="group hover:shadow-glow transition-all duration-500 border-border bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden bg-gradient-deep">
                <img
                  src="https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/09c4411e-231b-4173-4d86-9b696022b800/public"
                  alt="Rest Now Break Notification"
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Break Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gentle full-screen reminder when it's time to rest. Countdown timer and easy skip option.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Settings Screenshot */}
          <Card className="group hover:shadow-glow transition-all duration-500 border-border bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden bg-gradient-deep">
                <img
                  src="https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/512cb704-45ca-46fe-6151-cc74bf47f000/public"
                  alt="Rest Now Settings"
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Simple Settings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Configure work and rest durations with preset buttons. No complicated setup required.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Menu Bar Screenshot */}
          <Card className="group hover:shadow-glow transition-all duration-500 border-border bg-card overflow-hidden md:col-span-2 lg:col-span-1">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden bg-gradient-deep">
                <img
                  src="https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/813d1dec-dfb4-4ff5-56aa-4b4d2088b500/public"
                  alt="Rest Now Menu Bar"
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">Menu Bar Access</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quick access to controls right from your menu bar. Check status, pause, or adjust settings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">0 KB</div>
              <p className="text-sm text-muted-foreground">Data collected. Privacy first.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">&lt;1 MB</div>
              <p className="text-sm text-muted-foreground">App size. Super lightweight.</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground">Free & open source.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
