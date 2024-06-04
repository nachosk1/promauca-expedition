'use client';

import Link from 'next/link';

import { optionMenu } from '@/constants';
import PannellumPage from './components/PannellumPage';
import Logo from './components/Logo';
import useMenu from './hooks/useMenu';

export default function Home() {
    const { menu, openMenu, closeMenu } = useMenu();

    return (
        <main>
            <div className="relative">
                <div
                    className={`transform bg-black/70 fixed z-[5]  w-[320px] h-full top-0 left-0 hidden md:block transition-transform duration-300 ease-in-out ${
                        menu ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex justify-center">
                        <Logo />
                    </div>
                    <h1 className="text-white text-3xl px-8 mb-8 uppercase text-balance">
                        La experiencia de elegir el{' '}
                        <span className="text-primary">turismo</span>
                    </h1>
                    <div className="px-8">
                        {optionMenu.map(item => (
                            <Link
                                key={item.key}
                                href={item.url}
                                className="flex items-center justify-between py-2 mb-2 rounded-md text-white hover:bg-gray-100 hover:text-black transition_all"
                            >
                                <span className="text-lg px-2">
                                    {item.title}
                                </span>
                                <span className="ml-2">{item.icon}</span>
                            </Link>
                        ))}
                    </div>
                    {menu && (
                        <div className="absolute right-10 bottom-20 z-[5]">
                            <button
                                onClick={() => closeMenu()}
                                className="bg-gray-200 p-2 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-chevrons-left"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="#2c3e50"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M11 7l-5 5l5 5" />
                                    <path d="M17 7l-5 5l5 5" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {!menu && (
                    <div className="absolute left-10 top-[50%] z-[5]">
                        <button
                            onClick={() => openMenu()}
                            className="bg-gray-200 p-2 rounded-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-chevrons-right"
                                width="44"
                                height="44"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M7 7l5 5l-5 5" />
                                <path d="M13 7l5 5l-5 5" />
                            </svg>
                        </button>
                    </div>
                )}
                <PannellumPage />
            </div>
        </main>
    );
}
