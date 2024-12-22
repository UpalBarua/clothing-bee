import Image from "next/image";
import Link from "next/link";

import { MobileNavigation } from "./mobile-navigation";
import { navigationLinks, phoneNo } from "@/config";

export function Navigation() {
  return (
    <header className="grid-container fixed border-black/25 w-full h-16 bg-background/75 backdrop-blur">
      <div className="flex items-center justify-between">
        <Link
          className="flex gap-x-1 items-center text-2xl font-meidum relative"
          href="/"
        >
          <Image
            className="size-8 absolute end-0 top-0 -me-7 -mt-2 -rotate-45"
            src="/images/img-logo.png"
            alt="clothing bee logo"
            height={75}
            width={75}
          />
          <h1>Clothing Bee</h1>
        </Link>
        <nav className="md:flex items-center gap-x-8 hidden">
          <ul className="flex items-center gap-x-6">
            {navigationLinks.map(({ label, href }) => (
              <li className="text-lg" key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <a
            className="bg-accent text-white text-lg px-4 py-2 rounded-md shadow-sm"
            href={`tel:${phoneNo}`}
          >
            {phoneNo}
          </a>
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}
