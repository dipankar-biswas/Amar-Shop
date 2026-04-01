import Icon from "@/components/Icon";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="border-b border-gray-200 bg-[#f5f5f5] text-xs text-gray-600">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Icon
              name="facebook"
              size={14}
              className="hover:scale-120 transition duration-300"
            />
          </Link>

          <Link href="/">
            <Icon
              name="tik-tok"
              size={14}
              className="hover:scale-120 transition duration-300"
            />
          </Link>

          <Link href="/">
            <Icon
              name="instagram"
              size={14}
              className="hover:scale-120 transition duration-300"
            />
          </Link>

          <Link href="/">
            <Icon
              name="youtube"
              size={14}
              className="hover:scale-120 transition duration-300"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="hover:text-[#ef553f]">
            About us
          </Link>
          <Link href="/contact" className="hover:text-[#ef553f]">
            Contact us
          </Link>
          <Link href="/faq" className="hover:text-[#ef553f]">
            FAQs
          </Link>
          <Link href="/blog" className="hover:text-[#ef553f]">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};
