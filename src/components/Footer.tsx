
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
              Bridge is revolutionizing SME financing and investment by leveraging blockchain technology to unlock real-world assets. 
              From invoice factoring to supply chain financing and fractional investments, we connect businesses and investors in a 
              seamless, secure ecosystem.
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
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 How It Works</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 For Businesses</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 For Investors</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 FAQs</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 Blog</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 Documentation</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 Case Studies</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 Whitepaper</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">📌 Contact</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Compliance</a></li>
              <li><a href="#" className="text-slate-600 hover:text-bridge-600 transition-colors">Security</a></li>
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
