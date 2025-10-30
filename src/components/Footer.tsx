import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t bg-card/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SOS CHEF. All rights reserved.
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/soschef2021/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="group inline-flex items-center gap-2 rounded-full px-4 py-2 bg-primary text-primary-foreground shadow hover:shadow-md transition-all duration-300 hover:translate-y-[-1px]"
          >
            <Facebook className="h-5 w-5" />
            <span className="hidden sm:inline">Facebook</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


