
import { ChevronRight, Building, User } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const businessBenefits = [
  "Fast Funding: No more waiting for bank approvals—access liquidity in days.",
  "Flexible Terms: Sell invoices or tokenize assets without restrictive loans.",
  "Growth-Driven: Secure working capital and reinvest in your business."
];

const investorBenefits = [
  "High-Yield Returns: Earn stable returns from real-world assets.",
  "Diversified Portfolio: Invest in multiple asset classes with fractional ownership.",
  "Blockchain Security: Enjoy transparent, tamper-proof transactions."
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedElement animation="fade-in" className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-medium text-bridge-green-700 bg-bridge-green-50 border border-bridge-green-100 mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Choose Bridge?
          </h2>
          <p className="text-slate-600">
            Bridge creates value for both businesses seeking financing and investors 
            looking for secure, asset-backed opportunities.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Businesses */}
          <AnimatedElement animation="slide-in-left">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-bridge-green-50 flex items-center justify-center">
                  <Building className="h-6 w-6 text-bridge-green-700" />
                </div>
                <h3 className="text-2xl font-semibold">For Businesses</h3>
              </div>
              
              <ul className="space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-bridge-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">✔ {benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-bridge-green-50 rounded-xl">
                <p className="text-bridge-green-800 font-medium italic">
                  "Bridge has transformed our cash flow management. We're now able to finance our invoices 
                  within 24 hours, which has been game-changing for our growth."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-bridge-green-200 mr-3"></div>
                  <div>
                    <p className="font-medium">Sarah Chen</p>
                    <p className="text-sm text-slate-600">CEO, TechSupply Co.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* For Investors */}
          <AnimatedElement animation="slide-in-right">
            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-md h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-bridge-green-50 flex items-center justify-center">
                  <User className="h-6 w-6 text-bridge-green-700" />
                </div>
                <h3 className="text-2xl font-semibold">For Investors</h3>
              </div>
              
              <ul className="space-y-4">
                {investorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-bridge-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">✔ {benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-bridge-green-50 rounded-xl">
                <p className="text-bridge-green-800 font-medium italic">
                  "The asset-backed tokens on Bridge provide exactly the kind of diversification 
                  I was looking for, with returns that consistently outperform traditional fixed income."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-bridge-green-200 mr-3"></div>
                  <div>
                    <p className="font-medium">Michael Rodriguez</p>
                    <p className="text-sm text-slate-600">Investment Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
