
import { CheckCircle } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const steps = [
  {
    number: "01",
    title: "Upload Your Assets",
    description: "Securely upload your invoices or other financial assets to the Bridge platform.",
    details: [
      "Supports multiple document formats",
      "Automated data extraction",
      "Secure, encrypted storage"
    ]
  },
  {
    number: "02",
    title: "Asset Verification",
    description: "Our platform verifies the validity of your assets through automated and manual checks.",
    details: [
      "Blockchain-based verification process",
      "Anti-fraud protection measures",
      "Compliance with regulatory standards"
    ]
  },
  {
    number: "03",
    title: "Tokenization Process",
    description: "Your verified assets are converted into digital tokens on our secure blockchain network.",
    details: [
      "Smart contract creation",
      "Transparent token valuation",
      "Immutable blockchain record"
    ]
  },
  {
    number: "04",
    title: "Financing & Settlement",
    description: "Receive funds as investors purchase your asset-backed tokens through our marketplace.",
    details: [
      "Fast fund disbursement",
      "Multiple currency options",
      "Automated repayment scheduling"
    ]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <AnimatedElement animation="fade-in" className="max-w-xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-medium text-bridge-700 bg-bridge-50 border border-bridge-100 mb-4">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            How Bridge Works
          </h2>
          <p className="text-slate-600">
            Our streamlined process takes you from asset submission to funding in four simple steps,
            all powered by secure blockchain technology.
          </p>
        </AnimatedElement>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-bridge-100 hidden md:block"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-24 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Timeline Point */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-bridge-200">
                  <div className="w-3 h-3 rounded-full bg-bridge-500"></div>
                </div>
                
                {/* Content Card */}
                <AnimatedElement 
                  animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                  className="md:w-1/2 md:pr-12"
                >
                  <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-bold text-bridge-100 mr-4">{step.number}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-bridge-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedElement>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
