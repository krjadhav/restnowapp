import React from 'react';
import { Card, CardContent } from './ui/card';
import { Download, Settings2, Coffee } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Download & Install',
    description: 'Download Rest Now for free and install it on your Mac. It\'ll appear in your menu bar instantly.'
  },
  {
    icon: Settings2,
    number: '02',
    title: 'Set Your Preferences',
    description: 'Choose your ideal work and break intervals. The default 20-minute work, 20-second break follows the 20-20-20 rule.'
  },
  {
    icon: Coffee,
    number: '03',
    title: 'Rest & Recharge',
    description: 'Get back to work. Rest Now will gently remind you when it\'s time to take a break. No setup needed again.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get started in <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From download to your first break reminder in less than a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <Card className="relative hover:shadow-medium transition-all duration-300 border-border bg-card">
                <CardContent className="p-8 space-y-6">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-medium">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};