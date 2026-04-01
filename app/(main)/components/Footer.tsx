import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  // Helper function to create proper URLs
  const createSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  // Navigation links configuration
  const footerLinks = {
    help: {
      title: "Help",
      links: [
        { name: "Term & Policy", path: "/terms" },
        { name: "Press", path: "/press" },
        { name: "Careers", path: "/careers" },
        { name: "Delivery", path: "/delivery" },
        { name: "Service", path: "/service" },
      ],
    },
    info: {
      title: "Info",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "About Us", path: "/about" },
        { name: "My Cart", path: "/cart" },
        { name: "Checkout", path: "/checkout" },
        { name: "My Account", path: "/my-account" },
      ],
    },
    policy: {
      title: "Policy",
      links: [
        { name: "Return Policy", path: "/return-policy" },
        { name: "Security", path: "/security" },
        { name: "Careers", path: "/careers" },
        { name: "Sitemap", path: "/sitemap" },
        { name: "FAQs", path: "/faqs" },
      ],
    },
    product: {
      title: "Product",
      links: [
        { name: "Best Seller", path: "/products?category=best-seller" },
        { name: "Top Rated", path: "/products?category=top-rated" },
        { name: "Special", path: "/products?category=special" },
        { name: "Featured", path: "/products?category=featured" },
        { name: "New Arrivals", path: "/products?category=new-arrivals" },
      ],
    },
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      // Add your newsletter subscription logic here
      console.log("Newsletter signup:", email);
      alert("Thank you for subscribing!");
      e.target.reset();
    }
  };

  return (
    <footer className="bg-[#f3f3f3] text-gray-700">
      <section className="border-y border-gray-200 bg-[#ececec]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2 text-2xl text-[20px] font-semibold">
            <Mail className="h-5 w-5" /> Sign up for newsletter
          </p>
          <p className="text-sm">
            Join our mailing list and get 15% Off. We promise not to spam.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-[420px] items-center gap-2">
            <input
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef553f]"
            />
            <button 
              type="submit"
              className="rounded bg-[#ef553f] px-5 py-2 text-white hover:bg-[#d4382c] transition-colors duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
      
      <section className="mx-auto grid w-full max-w-[1240px] grid-cols-2 gap-6 px-4 py-10 md:grid-cols-5">
        {/* Help Column */}
        <div>
          <h3 className="mb-3 text-lg text-[22px] font-semibold text-[#ef553f]">
            {footerLinks.help.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.help.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-[#ef553f] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info Column */}
        <div>
          <h3 className="mb-3 text-lg text-[22px] font-semibold text-[#ef553f]">
            {footerLinks.info.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.info.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-[#ef553f] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policy Column */}
        <div>
          <h3 className="mb-3 text-lg text-[22px] font-semibold text-[#ef553f]">
            {footerLinks.policy.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.policy.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-[#ef553f] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Column */}
        <div>
          <h3 className="mb-3 text-lg text-[22px] font-semibold text-[#ef553f]">
            {footerLinks.product.title}
          </h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.product.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-[#ef553f] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="mb-3 text-lg text-[22px] font-semibold text-[#ef553f]">
            Contact Info
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
              <span>99 New Theme St. XY, USA 12345</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <a href="tel:+00123456789" className="hover:text-[#ef553f] transition-colors">
                +00 123-456-789
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <a href="tel:+00987654321" className="hover:text-[#ef553f] transition-colors">
                +00 987-654-321
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <a href="mailto:demo@example.com" className="hover:text-[#ef553f] transition-colors">
                demo@example.com
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <section className="border-t border-gray-200 py-5 text-center text-sm">
        © 2026 Amar-Shop - Theme by Dipankar
      </section>
    </footer>
  );
};