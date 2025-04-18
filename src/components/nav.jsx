import { useLenis } from "@/context/lenis-context";
import { usePathname, useRouter } from "next/navigation";
import { IoChevronBackSharp } from "react-icons/io5";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { scrollToLenis } = useLenis();

  const navigation = [
    { title: "indice", href: "#index" },
    { title: "chi siamo", href: "#about" },
    { title: "progetti (12)", href: "#project" },
  ];

  return (
    <nav className="fixed top-0 w-full h-6 z-50 !mix-blend-exclusion">
      <ul className="relative px-6 py-6 flex items-center justify-between select-none max-md:px-3 max-md:py-4">
        {pathname === "/" &&
          navigation.map((nav, i) => (
            <li
              className="relative group cursor-default"
              key={i}
              onClick={() => scrollToLenis(nav.href)}
            >
              <a className="nav-txt">{nav.title}</a>
              <div className="absolute w-0 h-0.5 bottom-[-3px] bg-s transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

        {pathname !== "/" && (
          <li className="relative group cursor-pointer">
            <a
              onClick={() => router.push("/", undefined, { scroll: false })}
              scroll={false}
              className="nav-txt flex items-center gap-1 mix-blend-difference group-hover:-translate-x-0.5 transition-all duration-300 max-sm:text-[.8rem]"
            >
              <IoChevronBackSharp className="group-hover:-translate-x-0.5 transition-all duration-500" />
              ritorno
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
