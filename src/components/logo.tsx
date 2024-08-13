import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    logoLink: string,
    imageSrc: string,
    imageAlt: string,
    className: string
}
export default function Logo({
    logoLink,
    imageSrc,
    imageAlt,
    className
}: LogoProps) {
    return (
        <Link href={logoLink} className={className}>
            <Image src={imageSrc} alt={imageAlt} width={50} height={50} />
            <div className="mx-2 text-lg italic font-bold">Envision<span className="text-[#3B81F6]">Pad</span></div>
        </Link>
    );
}
