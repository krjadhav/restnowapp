import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Palette, GraduationCap, Briefcase } from 'lucide-react';

const personas = [
  {
    icon: Code,
    title: 'Developers',
    description: 'Long coding sessions? Rest Now helps you maintain eye health and stay sharp through marathon debugging sessions.'
  },
  {
    icon: Palette,
    title: 'Designers',
    description: 'Protect your vision while perfecting pixels. Regular breaks improve creativity and reduce design fatigue.'
  },
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Study smarter, not harder. Break reminders help you retain information better and prevent burnout.'
  },
  {
    icon: Briefcase,
    title: 'Professionals',
    description: 'Whether you\'re in meetings or managing spreadsheets, healthy screen habits boost productivity and wellbeing.'
  }
];

export const WhoItsFor = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Built for <span className="text-gradient">Mac users</span> who care
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you code, design, study, or work—Rest Now helps you build healthier screen habits.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardContent className="p-6 space-y-4 text-center flex flex-col h-full">
                {/* Icon */}
                <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <persona.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {persona.description}
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