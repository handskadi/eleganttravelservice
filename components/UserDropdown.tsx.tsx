"use client";

import Link from "next/link";
import Image from "next/image";

interface MenuItem {
    label: string;
    icon: keyof typeof icons;
    href: string;
}

const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: "grid", href: "#" },
    { label: "My Bookings", icon: "calendar", href: "#" },
    { label: "Saved Trips", icon: "heart", href: "#" },
    { label: "Account", icon: "user", href: "#" },
    { label: "Sign out", icon: "logout", href: "#" },
];

interface Props {
    open: boolean;
    onClose?: () => void;
}

export default function UserDropdown({ open }: Props) {
    if (!open) return null;

    return (
        <div
            className="absolute right-0 top-12 z-50 w-72 bg-white dark:bg-gray-800 mt-[1px] rounded-2xl shadow-xl p-6 text-gray-800 dark:text-gray-100"
            role="menu"
            aria-label="User dropdown"
        >
            {/* Profile Info */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <Image
                        src="/profile.jpg"
                        alt="User profile"
                        width={80}
                        height={80}
                        className="rounded-full object-cover w-20 h-20"
                    />
                    <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm">
                        <EditIcon />
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">Hello</p>
                <h2 className="text-lg font-semibold mt-1">Mohamed Kadi</h2>
                <p className="text-xs text-gray-400 truncate">handskadi@gmail.com</p>
            </div>

            <hr className="my-4 border-gray-200 dark:border-gray-600" />

            {/* Navigation */}
            <nav className="space-y-2">
                {menuItems.map(({ label, icon, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="flex items-center gap-3 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                        {icons[icon]}
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}

const EditIcon = () => (
    <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L7.5 19.5H3v-4.5L16.732 3.732z"
        />
    </svg>
);

const icons = {
    grid: (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h7v7H3V3zm11 0h7v7h-7V3zm-11 11h7v7H3v-7zm11 0h7v7h-7v-7z"
            />
        </svg>
    ),
    calendar: (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M4 21h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    ),
    heart: (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364 4.318 12.682a4.5 4.5 0 010-6.364z"
            />
        </svg>
    ),
    user: (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
        </svg>
    ),
    logout: (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
        </svg>
    ),
};
