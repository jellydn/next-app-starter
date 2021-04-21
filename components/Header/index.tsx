import { HeaderProps } from "./types";

const Header = ({ links = [] }: HeaderProps) => (
  <header className="text-gray-600 body-font">
    <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
      <a
        href="/"
        className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
      >
        <img src="/logo.svg" alt="ProductsWay Logo" className="w-12 h-12" />
        <span className="ml-3 text-xl">Next App Starter</span>
      </a>
      <nav className="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="mr-5 hover:text-gray-900"
          >
            {link.title}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0"
      >
        Sign In
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
);

export default Header;
export * from "./types";
