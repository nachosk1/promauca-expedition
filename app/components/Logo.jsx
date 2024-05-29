import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <Image
                src="/img/logo_oficial.png"
                alt="logo"
                width={200}
                height={200}
            />
        </div>
    );
}
