import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import winstreamsLogo from "@/assets/winstreams-logo.png";
export function Footer() {
  return <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 mb-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <img src={winstreamsLogo} alt="Winstreams" className="h-12 w-auto mb-4 mx-auto md:mx-0" />
            <p className="text-sm text-muted-foreground">
              Built for Busy Local Operators
            </p>
          </div>
          
          {/* Product */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDjFVnKoPlKFBOxIbcXrnOLLE8aCi7OOnT1HI2WZqj5oftOA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">
                  Onboarding Questionnaire
                </a>
              </li>
              <li>
                <Link to="/book" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">Strategy Call</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/call-flow-audit" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">Call Flow Audit</Link>
              </li>
              <li>
                <Link to="/services/ai-messaging-optimization" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">
                  AI Messaging Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/review-booster" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">Review Booster</Link>
              </li>
              <li>
                <Link to="/services/web-conversion-audit" className="text-sm text-muted-foreground hover:text-brand-navy transition-colors duration-200">Copy Conversion Audit</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-foreground mb-4 text-sm">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:9549451525" className="hover:underline transition-colors">
                  954-945-1525
                </a>
              </li>
              <li>
                <a href="mailto:leads@winstreams.com" className="hover:underline transition-colors">
                  leads@winstreams.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-10 pt-6 border-t border-slate-200 mb-4">
          <a href="/privacy" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
          <span>·</span>
          <a href="/terms" className="hover:text-slate-700 transition-colors">Terms of Service</a>
          <span>·</span>
          <a href="/acceptable-use" className="hover:text-slate-700 transition-colors">Acceptable Use Policy</a>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 WinStreams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}