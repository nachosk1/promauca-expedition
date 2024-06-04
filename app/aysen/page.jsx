'use client';

import Logo from '../components/Logo';
import PannellumPage from '../components/PannellumPage';
import useMenu from '../hooks/useMenu';

export default function PanoramaViewer() {
    const { menu, openMenu, closeMenu } = useMenu();

    return (
        <main>
            <div className="relative">
                <div
                    className={`transform bg-black/70 fixed z-50  w-[300px] h-full top-0 left-0 hidden md:block transition-transform duration-300 ease-in-out ${
                        menu ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                </div>
                <div className="absolute right-20 top-20 z-50">
                    <button
                        onClick={() => closeMenu()}
                        className="bg-red-500 p-2"
                    >
                        cerrar
                    </button>
                </div>
                <div className="absolute right-48 top-20 z-50">
                    <button
                        onClick={() => openMenu()}
                        className="bg-blue-500 p-2"
                    >
                        abrir
                    </button>
                </div>
                <PannellumPage />
            </div>
        </main>
    );
}
