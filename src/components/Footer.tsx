import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <img 
                src="/lovable-uploads/e0be2166-7286-4336-928d-316bc468b851.png" 
                alt="Bridge Logo" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-slate-600 mb-6 max-w-md">
              Revolutionizing business financing through blockchain technology. We connect businesses 
              with capital by tokenizing real-world assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-bridge-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-bridge-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-bridge-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">For Businesses</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">For Investors</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Whitepaper</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Bridge Finance. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-bridge-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-bridge-600 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-bridge-600 text-sm transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
