import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-sky-100 shadow">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <a href="/" className="text-xl font-extrabold">
                    Dashboard
                </a>

                <button
                    className="lg:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="block size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>

                <ul
                    className={`flex flex-col lg:flex-row lg:gap-6 absolute lg:static top-16 left-0 w-full bg-sky-100 lg:w-auto lg:bg-transparent transition-all ${
                        menuOpen ? "block" : "hidden lg:flex"
                    }`}
                >
                    <li>
                        <a
                            href="/"
                            className="block p-3 lg:p-0 hover:text-sky-700"
                        >
                            Containers
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="block p-3 lg:p-0 hover:text-sky-700"
                        >
                            Imagens
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
