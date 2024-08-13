import { cn } from "@/lib/utils";
import Logo from "../logo";

interface HeaderProps {
    label: string
}

export function Header({
    label
}: HeaderProps) {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Logo logoLink="/" imageSrc="/logo.png" imageAlt="Logo" className="flex items-center" />
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    );
}
