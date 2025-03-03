
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedElement from "./AnimatedElement";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-bridge-green-50 via-white to-bridge-green-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-bridge-green-100/50 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-bridge-green-100/30 blur-3xl"></div>
      </div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement animation="fade-in">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-medium text-bridge-green-700 bg-white border border-bridge-green-100 mb-4">
              Get Started Today
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={200}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Transform Your Business Financing?
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={400}>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of businesses that have already discovered the power of blockchain-enabled 
              financing. Create your account in minutes and get access to capital when you need it.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={600} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-bridge-green text-white hover:bg-bridge-green-700">
              Create Free Account
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-slate-300 hover:border-bridge-green-300 hover:bg-white">
              Schedule a Demo
            </Button>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={800} className="mt-8 text-sm text-slate-500">
            No credit card required · Free for businesses to join · Cancel anytime
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
