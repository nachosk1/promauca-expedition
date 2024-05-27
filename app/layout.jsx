import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Promauca Expedition',
    description:
        "Promauca Expedition, turismo de aventura dentro del país de Chile, conoce los mejores destinos turísticos de la región de los Ríos, Aysen, Araucanía y O'Higgins.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
