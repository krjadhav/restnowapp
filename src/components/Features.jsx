import React from 'react';
import { Card, CardContent } from './ui/card';
import { Eye, Bell, Settings, Timer, Moon, Zap } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: 'Eye-Friendly Reminders',
    description: 'Gentle break notifications that help prevent eye strain, headaches, and screen fatigue during long work sessions.'
  },
  {
    icon: Timer,
    title: 'Customizable Intervals',
    description: 'Set your ideal work and break durations. Follow the 20-20-20 rule or create your own healthy screen rhythm.'
  },
  {
    icon: Bell,
    title: 'Non-Intrusive Notifications',
    description: 'Calm reminders that respect your flow. No loud alarms or disruptive pop-ups, just gentle nudges when it\'s time to rest.'
  },
  {
    icon: Settings,
    title: 'Menu Bar Integration',
    description: 'Lives quietly in your macOS menu bar. Always accessible, never intrusive. Check your status with a glance.'
  },
  {
    icon: Moon,
    title: 'Set Once, Forget It',
    description: 'Configure your preferences and let Rest Now work in the background. No daily setup or management required.'
  },
  {
    icon: Zap,
    title: 'Lightweight & Fast',
    description: 'Minimal system resources, maximum efficiency. Native macOS app that starts instantly and runs smoothly.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-feature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Everything you need for
            <span className="text-gradient"> healthy screen habits</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple features designed to keep you healthy and focused, without the complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2 flex-grow">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};