'use client'

import { Phone, MapPin, Clock } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-50 text-foreground px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h3 className="font-bold mb-2 text-foreground">Lumina Dental Studio</h3>
            <p className="text-slate-700 text-sm">Premium dental care that feels like art.</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              Hours
            </h4>
            <div className="space-y-2 text-slate-700 text-sm">
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p className="pt-2">Saturday</p>
              <p>10:00 AM - 4:00 PM</p>
              <p className="pt-2">Sunday: Closed</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              Location
            </h4>
            <p className="text-slate-700 text-sm">
              123 Premium Lane<br />
              San Francisco, CA 94102
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              Contact
            </h4>
            <p className="text-slate-700 text-sm">
              <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                (555) 123-4567
              </a>
            </p>
            <p className="text-slate-700 text-sm mt-2">
              <a href="mailto:hello@lumina.dental" className="hover:text-primary transition-colors">
                hello@lumina.dental
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-slate-600 text-sm">
          <p>&copy; 2024 Lumina Dental Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-700 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-700 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
