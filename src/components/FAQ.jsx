import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'How does Rest Now help reduce eye strain?',
    answer: 'Rest Now follows the 20-20-20 rule recommended by eye care professionals: every 20 minutes, look at something 20 feet away for at least 20 seconds. Regular breaks give your eye muscles a chance to relax and reduce the risk of digital eye strain, headaches, and fatigue.'
  },
  {
    question: 'Will Rest Now interrupt my work with annoying notifications?',
    answer: 'No! Rest Now is designed to be gentle and non-intrusive. You\'ll get a calm notification when it\'s time to take a break, but you can easily skip it if you\'re in the middle of something important. No loud sounds, no forced breaks, no pressure.'
  },
  {
    question: 'Can I customize the work and break intervals?',
    answer: 'Absolutely! While Rest Now defaults to the 20-20-20 rule, you can customize both your work duration and break length to fit your personal preferences and workflow. Set it once, and Rest Now remembers your preferences.'
  },
  {
    question: 'Does Rest Now use a lot of system resources?',
    answer: 'Not at all. Rest Now is a native macOS app built to be lightweight and efficient. It uses minimal CPU and memory, so you won\'t even notice it running in the background. Perfect for Macs with any specs.'
  },
  {
    question: 'Is my data private? Does Rest Now track anything?',
    answer: 'Your privacy is our priority. Rest Now doesn\'t collect any personal data, doesn\'t track your activity, and doesn\'t require an internet connection. Everything stays on your Mac. It\'s also open source, so you can verify this yourself.'
  },
  {
    question: 'Is Rest Now free?',
    answer: 'Yes! Rest Now is completely free and open source. No hidden costs, no subscriptions, no premium features locked behind paywalls. We believe everyone deserves healthy screen habits.'
  },
  {
    question: 'Which macOS versions are supported?',
    answer: 'Rest Now supports macOS 11 (Big Sur) and later, including the latest macOS Sonoma. It works seamlessly on both Intel and Apple Silicon Macs.'
  },
  {
    question: 'Can I pause Rest Now when I need to focus?',
    answer: 'Yes! You can easily pause Rest Now from the menu bar whenever you need uninterrupted focus time. When you\'re ready, just resume it with a single click.'
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Rest Now
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:shadow-soft transition-smooth"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};