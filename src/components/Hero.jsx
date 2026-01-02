import React, { useEffect, useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const installCommand = 'brew install --cask krjadhav/restnow/restnow';

  const BREAK_SECONDS = 5;
  const BREAK_END_IMAGE_URL = 'https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/6f8bd78c-cbc4-4efd-1459-5c0818367000/public';

  const [previewCycle, setPreviewCycle] = useState(0);
  const [previewPhase, setPreviewPhase] = useState('countdown');
  const [visibleStep, setVisibleStep] = useState(-1);
  const [secondsLeft, setSecondsLeft] = useState(BREAK_SECONDS);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSkipBreak = () => {
    setPreviewPhase('image');
  };

  useEffect(() => {
    setPreviewPhase('countdown');
    setSecondsLeft(BREAK_SECONDS);
    setVisibleStep(-1);

    const t0 = setTimeout(() => setVisibleStep(0), 200);
    const t1 = setTimeout(() => setVisibleStep(1), 900);
    const t2 = setTimeout(() => setVisibleStep(2), 1600);
    const t3 = setTimeout(() => setVisibleStep(3), 2300);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [previewCycle]);

  useEffect(() => {
    if (previewPhase !== 'countdown') return;
    if (visibleStep < 2) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [previewPhase, previewCycle, visibleStep]);

  useEffect(() => {
    if (previewPhase !== 'countdown') return;
    if (secondsLeft !== 0) return;
    setPreviewPhase('image');
  }, [previewPhase, secondsLeft]);

  useEffect(() => {
    if (previewPhase !== 'image') return;
    const t = setTimeout(() => setPreviewCycle((c) => c + 1), 1800);
    return () => clearTimeout(t);
  }, [previewPhase]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          <div className="text-center space-y-8 max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary border border-border shadow-soft">
              <span className="text-xs font-medium text-secondary-foreground">macOS app coming soon</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Rest your eyes.
                <br />
                <span className="text-gradient">Reset your focus.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                A lightweight screen break timer for macOS that helps reduce eye strain and mental fatigue.
                Stay healthy while staying productive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            <div className="flex flex-wrap items-center gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Lightweight</span>
              </div>
            </div>
            {/* Product Hunt Badge */}
            <div className="flex justify-center mb-12">
              <a href="https://www.producthunt.com/products/rest-now-screen-break-timer?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-rest-now-screen-break-timer" target="_blank" rel="noopener noreferrer">
                <img alt="Rest Now - Screen Break Timer - Lightweight screen break timer for macOS | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1057378&theme=dark&t=1767370990020" />
              </a>
            </div>
          </div>


          <div className="relative isolate w-full max-w-4xl mx-auto">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-medium">
              <div className="w-full aspect-video bg-black rounded-2xl flex flex-col items-center justify-center relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/30 blur-3xl rounded-full" />
                {previewPhase === 'countdown' ? (
                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    <h2
                      className={`text-2xl sm:text-3xl font-bold text-white transition-opacity transition-transform duration-1000 ease-out ${
                        visibleStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                      }`}
                    >
                      Rest Now
                    </h2>
                    <p
                      className={`text-gray-400 text-sm sm:text-base transition-opacity duration-1000 ${
                        visibleStep >= 1 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      Take a break. Stand up. Stretch.
                    </p>
                    <div
                      className={`text-5xl sm:text-6xl font-light text-white tracking-wider mt-2 transition-opacity duration-1000 ${
                        visibleStep >= 2 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {formatTime(secondsLeft)}
                    </div>
                    <button
                      type="button"
                      onClick={handleSkipBreak}
                      className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 text-gray-300 text-sm transition-opacity transition-transform duration-1000 ease-out ${
                        visibleStep >= 3
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2 pointer-events-none'
                      }`}
                    >
                      Skip Break
                    </button>
                  </div>
                ) : (
                  <img
                    src={BREAK_END_IMAGE_URL}
                    alt="Rest Now Break"
                    className="relative z-10 w-full h-full object-cover animate-in fade-in-0 duration-1000"
                  />
                )}
              </div>
            </div>

            <div className="hidden lg:block absolute z-20 -bottom-8 lg:-left-16 lg:w-80 rounded-xl overflow-hidden shadow-glow border-2 border-primary/20 pointer-events-none">
              <img
                src="https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/956ebf8e-6846-4348-7dff-bd71c100d000/public"
                alt="Rest Now Break Notification"
                className="w-full h-auto"
              />
            </div>

            <div className="hidden lg:block absolute z-20 -top-6 lg:-right-12 lg:w-72 rounded-xl overflow-hidden shadow-medium border border-border pointer-events-none">
              <img
                src="https://imagedelivery.net/j_zap_BNzPItCoMGioj9aA/31ace15e-f0d3-4b5a-6324-48cc550b5500/public"
                alt="Rest Now Settings"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
