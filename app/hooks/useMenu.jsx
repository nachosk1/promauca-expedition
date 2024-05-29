"use client"

import { useState } from "react";

export default function useMenu() {
    const [menu, setMenu] = useState(false);

    const openMenu = () => {
        setMenu(true);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return {
        menu,
        openMenu,
        closeMenu,
    };
}
