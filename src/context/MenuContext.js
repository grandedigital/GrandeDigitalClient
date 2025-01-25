"use client"

import { createContext, useState, useContext, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import menu from "../data/menu.json"

const MenuContext = createContext();

export function MenuProvider({ children }) {
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const [activeMenu, setActiveMenu] = useState(null);
    const setActiveMenuHandler = (menuId) => {
        setActiveMenu(menuId);
    };

    useEffect(() => {
        setActiveMenu(menu.find(item => item.href == pathname)?.id || null)

    }, [pathname])


    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, activeMenu, setActiveMenuHandler }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () => {
    return useContext(MenuContext);
};
