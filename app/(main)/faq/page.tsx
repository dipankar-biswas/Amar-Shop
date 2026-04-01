'use client'

import { useState } from "react";
import { SimplePage } from "../components/SimplePage";
import { ChevronRight } from "lucide-react";

const FAQPage = () => {
  const [open, setOpen] = useState(0);
  const items = [
    ["How do I track my order?", "Use order ID and billing email in tracking page."],
    ["Can I return products?", "Yes, within 30 days with original package."],
    ["Do you ship all over Bangladesh?", "Yes, we deliver nationwide."],
  ];
  return (
    <SimplePage title="FAQ">
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={item[0]} className="rounded border border-gray-300 bg-white">
            <button onClick={() => setOpen(open === idx ? -1 : idx)} className="flex w-full items-center justify-between px-4 py-3 text-left">
              {item[0]} <ChevronRight className={`h-4 w-4 transition ${open === idx ? "rotate-90" : ""}`} />
            </button>
            {open === idx && <p className="border-t border-gray-200 px-4 py-3 text-sm text-gray-600">{item[1]}</p>}
          </div>
        ))}
      </div>
    </SimplePage>
  );
};


export default FAQPage;