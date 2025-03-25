
import { ArrowRight, Database, Clock, Shield, BarChart4, Globe, RefreshCw } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Database className="h-6 w-6 text-bridge-green" />,
    title: "Instant Liquidity",
    description: "Businesses can convert unpaid invoices or assets into capital within days."
  },
  {
    icon: <Clock className="h-6 w-6 text-bridge-green" />,
    title: "Fractional Investing",
    description: "Investors can own a portion of high-value assets with low entry costs."
  },
  {
    icon: <Shield className="h-6 w-6 text-bridge-green" />,
    title: "Blockchain Transparency",
    description: "Secure, tamper-proof transactions with automated smart contracts."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-bridge-green" />,
    title: "Global Accessibility",
    description: "Invest or get funded from anywhere with seamless digital transactions."
  },
  {
    icon: <Globe className="h-6 w-6 text-bridge-green" />,
    title: "DeFi-Powered Growth",
    description: "Unlock capital through decentralized finance (DeFi) liquidity pools."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedElement animation="fade-in" className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-medium text-bridge-green-700 bg-bridge-green-50 border border-bridge-green-100 mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            The Future of SME Financing & Investment
          </h2>
          <p className="text-slate-600">
            Bridge connects businesses seeking capital with investors looking for secure, high-yield opportunities. 
            Using blockchain technology, we streamline invoice factoring, supply chain financing, and fractional ownership of assets.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement 
              key={index} 
              animation="fade-in" 
              delay={100 * index}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full">
                <div className="w-12 h-12 rounded-xl bg-bridge-green-50 flex items-center justify-center mb-6 group-hover:bg-bridge-green-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-600">✅ {feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fade-in" className="mt-14 text-center">
          <Button className="rounded-full px-6 group hover:bg-bridge-green-700">
            <span>Explore All Features</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features;
