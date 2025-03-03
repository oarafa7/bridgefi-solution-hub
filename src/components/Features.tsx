
import { ArrowRight, Database, Clock, Shield, BarChart4, Globe, RefreshCw } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Database className="h-6 w-6 text-bridge-600" />,
    title: "Asset Tokenization",
    description: "Convert invoices and other financial assets into digital tokens on the blockchain for increased liquidity and transparency."
  },
  {
    icon: <Clock className="h-6 w-6 text-bridge-600" />,
    title: "Fast Financing",
    description: "Access funds within 24 hours instead of weeks, with a streamlined digital process that eliminates paperwork."
  },
  {
    icon: <Shield className="h-6 w-6 text-bridge-600" />,
    title: "Enhanced Security",
    description: "Benefit from blockchain's immutable ledger and smart contracts that automatically enforce payment terms."
  },
  {
    icon: <BarChart4 className="h-6 w-6 text-bridge-600" />,
    title: "Data Analytics",
    description: "Gain insights into your financing patterns with detailed analytics and reporting tools."
  },
  {
    icon: <Globe className="h-6 w-6 text-bridge-600" />,
    title: "Global Access",
    description: "Connect with investors worldwide, expanding your financing options beyond traditional geographic limitations."
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-bridge-600" />,
    title: "Flexible Terms",
    description: "Customize financing terms to match your business needs with transparent fee structures and no hidden costs."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedElement animation="fade-in" className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-medium text-bridge-700 bg-bridge-50 border border-bridge-100 mb-4">
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Redefining Business Financing Through Blockchain
          </h2>
          <p className="text-slate-600">
            Our platform combines the security and transparency of blockchain technology 
            with the efficiency of modern financing solutions.
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
                <div className="w-12 h-12 rounded-xl bg-bridge-50 flex items-center justify-center mb-6 group-hover:bg-bridge-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fade-in" className="mt-14 text-center">
          <Button className="rounded-full px-6 group hover:bg-bridge-700">
            <span>Explore All Features</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features;
