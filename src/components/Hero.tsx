
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bridge-50/40 blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full bg-bridge-green-50/40 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <AnimatedElement animation="fade-in" className="mb-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-medium text-bridge-700 bg-bridge-50 border border-bridge-100">
              Revolutionizing Business Financing
            </span>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={200} className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-bridge-900 to-gray-900 bg-clip-text text-transparent">
              Unlock Capital. Invest in the Future.
            </h1>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={400} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Bridge is the first blockchain-powered RWA financing platform in the MENA region, enabling 
              businesses to access fast funding and investors to participate in fractional real-world asset investments.
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={600} className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-8">
            <Button size="lg" className="rounded-full px-8 bg-bridge-green text-white hover:bg-bridge-green-700 shadow-md hover:shadow-lg transition-all">
              🔹 Get Funded
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-bridge-green transition-all">
              🔹 Start Investing
            </Button>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={800} className="text-sm text-slate-500">
            Trusted by businesses across 30+ countries
          </AnimatedElement>
        </div>

        {/* Hero Image/Visual */}
        <AnimatedElement animation="fade-in" delay={600} className="relative mx-auto max-w-4xl">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="aspect-[16/9] bg-gradient-to-br from-bridge-green-50 to-slate-50 relative">
              {/* Placeholder for a platform visualization - would be replaced by an actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-xl bg-white shadow-lg p-6">
                  <div className="h-8 w-48 bg-bridge-green-100 rounded-md mb-4"></div>
                  <div className="flex gap-4 mb-4">
                    <div className="h-24 w-1/3 bg-bridge-green-50 rounded-md"></div>
                    <div className="h-24 w-1/3 bg-bridge-green-50 rounded-md"></div>
                    <div className="h-24 w-1/3 bg-slate-50 rounded-md"></div>
                  </div>
                  <div className="h-6 w-full bg-slate-50 rounded-md mb-3"></div>
                  <div className="h-6 w-2/3 bg-slate-50 rounded-md"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-bridge-green-300/20 animate-pulse-subtle"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 rounded-full bg-bridge-green-300/20 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-bridge-green-400/10 animate-float"></div>
            </div>
            
            {/* Platform Stats */}
            <div className="grid grid-cols-3 divide-x divide-slate-100 py-6">
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-semibold text-bridge-green">$720M+</span>
                <span className="text-sm text-slate-500 mt-1">Assets Tokenized</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-semibold text-bridge-green">3,400+</span>
                <span className="text-sm text-slate-500 mt-1">Businesses Served</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4">
                <span className="text-3xl font-semibold text-bridge-green">24hr</span>
                <span className="text-sm text-slate-500 mt-1">Average Financing Time</span>
              </div>
            </div>
          </div>
          
          {/* Floating Card Elements */}
          <div className="absolute -top-8 -right-10 md:-right-20 lg:-right-32 w-64 h-32 bg-white rounded-xl shadow-lg p-4 border border-slate-100 rotate-6 animate-float">
            <div className="flex gap-3 items-center mb-3">
              <div className="w-8 h-8 rounded-full bg-green-100"></div>
              <div className="h-4 w-32 bg-slate-100 rounded"></div>
            </div>
            <div className="h-3 w-full bg-slate-50 rounded mb-2"></div>
            <div className="h-3 w-2/3 bg-slate-50 rounded mb-2"></div>
            <div className="h-3 w-1/2 bg-slate-50 rounded"></div>
          </div>
          
          <div className="absolute -bottom-10 -left-10 md:-left-20 lg:-left-32 w-60 h-36 bg-white rounded-xl shadow-lg p-4 border border-slate-100 -rotate-3 animate-float" style={{ animationDelay: '2s' }}>
            <div className="flex justify-between items-center mb-3">
              <div className="h-4 w-20 bg-bridge-green-100 rounded"></div>
              <div className="h-6 w-16 bg-bridge-green-100 rounded"></div>
            </div>
            <div className="h-12 w-full bg-slate-50 rounded mb-2"></div>
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-slate-100 rounded"></div>
              <div className="h-4 w-16 bg-green-100 rounded"></div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
