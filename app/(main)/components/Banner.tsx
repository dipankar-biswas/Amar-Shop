import Link from "next/link";

export const Banner = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#d9d0cb]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=2200&auto=format&fit=crop')",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/15 to-transparent" />
      <div className="mx-auto flex h-[350px] w-full max-w-[1240px] items-center px-4 md:h-[370px]">
        <div className="relative z-10 max-w-[420px] text-white">
          <p className="text-sm font-semibold text-lime-300">Tracking Items</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-[48px]">
            Shop Best Offers On Sofa Set
          </h1>
          <Link
            href="/shop"
            className="mt-5 inline-block rounded bg-[#ef553f] px-5 py-2 text-sm font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
