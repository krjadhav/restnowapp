import React, { useState } from 'react';
import { Button } from './ui/button';
import { Copy, Check, Github } from 'lucide-react';

export const CTA = () => {
  const [copied, setCopied] = useState(false);

  const installCommand = 'brew install --cask krjadhav/restnow/restnow';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to <span className="text-gradient">rest now</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Download Rest Now today and start building healthier screen habits.
              Your eyes will thank you.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleCopy}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-zinc-600 transition-all duration-300 group"
            >
              <span className="text-zinc-500 font-mono">$</span>
              <code className="text-sm text-zinc-300 font-mono">{installCommand}</code>
              <div className="p-1.5 rounded bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-zinc-400" />
                )}
              </div>
            </button>
            </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/krjadhav/Rest-Now"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>

          {/* Info Text */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
            <span>✓ Free forever</span>
            <span>✓ Open source</span>
            <span>✓ No account required</span>
            <span>✓ Privacy first</span>
          </div>
        </div>
      </div>
    </section>
  );
};