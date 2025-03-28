import Link from "next/link";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Others", path: "/others" }, // New category for extra links
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md rounded-full shadow-lg border border-red-400/30 px-6 z-50 transition-all duration-300 hover:border-red-400/50 hover:bg-black/40">
      <ul className="inline-flex items-center py-3 text-red-400 gap-x-10 font-mono">
        {navItems.map((item) => (
          <li key={item.path} className="relative group">
            <Link
              href={item.path}
              className={`px-3 py-1 transition-all duration-300 hover:text-gray-300 ${styles["hover:glow-red"]} inline-block`}
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
