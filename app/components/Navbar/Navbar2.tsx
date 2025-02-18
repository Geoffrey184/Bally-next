"use client";

import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image'; // Remplace <img> pour l'optimisation Next.js
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Accueil', href: '#accueil', current: true },
    { name: 'À propos', href: '#apropos', current: false },
    { name: 'Réalisations', href: '#realisations', current: false },
    { name: 'Contact', href: '#contact', current: false },
];

// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ');
// }

// Fonction pour gérer le scroll fluide et la redirection propre
const CustomLink = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
    return (
        <span
            onClick={onClick}
            className="px-3 py-4 text-lg font-normal cursor-pointer"
        >
            {children}
        </span>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Fonction pour gérer le clic sur un lien de navigation
    const handleScroll = (section: string) => {
        setIsOpen(false);
        if (pathname === '/') {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push(`/#${section}`);
        }
    };

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="relative flex h-12 md:h-20 items-center justify-between">
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                            {/* LOGO */}
                            <div className="flex flex-shrink-0 items-center">
                                <Image
                                    className="block h-10 w-auto lg:hidden"
                                    src="/assets/nav/BallyLogo.jpg"
                                    alt="Bally Paysage Logo"
                                    width={120}
                                    height={50}
                                    priority
                                />
                                <Image
                                    className="hidden h-12 w-auto lg:block"
                                    src="/assets/nav/BallyLogo.jpg"
                                    alt="Bally Paysage Logo"
                                    width={150}
                                    height={60}
                                    priority
                                />
                            </div>

                            {/* LINKS */}
                            <div className="hidden lg:flex m-auto space-x-6">
                                {navigation.map((item) => (
                                    item.name === "Réalisations" ? (
                                        <div
                                            key={item.name}
                                            className="relative group"
                                            onMouseEnter={() => setDropdown(true)}
                                            onMouseLeave={() => setDropdown(false)}
                                        >
                                            <button 
                                                onClick={() => handleScroll('realisations')} 
                                                className="text-gray-600 px-4 py-4 text-lg font-normal rounded"
                                            >
                                                Réalisations
                                            </button>
                                            {dropdown && (
                                                <div 
                                                    className="absolute bg-white text-black shadow-lg rounded w-48 mt-0"
                                                    onMouseEnter={() => setDropdown(true)} 
                                                    onMouseLeave={() => setDropdown(false)}
                                                >
                                                    <Link href="/cloture" className="block px-4 py-2 hover:bg-gray-200">Clôture</Link>
                                                    <Link href="/engazonnement" className="block px-4 py-2 hover:bg-gray-200">Engazonnement</Link>
                                                    <Link href="/entretien" className="block px-4 py-2 hover:bg-gray-200">Entretien</Link>
                                                    <Link href="/pavage" className="block px-4 py-2 hover:bg-gray-200">Pavage</Link>
                                                    <Link href="/terrasse" className="block px-4 py-2 hover:bg-gray-200">Terrasse</Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <CustomLink
                                            key={item.name}
                                            onClick={() => handleScroll(item.href.substring(1))}
                                        >
                                            <span className="px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100">
                                                {item.name}
                                            </span>
                                        </CustomLink>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* MENU BURGER POUR MOBILE */}
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER POUR MOBILE */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
