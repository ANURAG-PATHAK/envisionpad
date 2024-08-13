"use client"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Social } from "./social";
import { BackButton } from "./back-button";
import { Header } from "./header";

interface cardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLabel: string,
    backButtonHref: string,
}

export function CardWrapper({
    children,
    headerLabel,
    backButtonHref,
    backButtonLabel
}: cardWrapperProps) {
    return (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <Card className="w-[300px] md:w-[400px] lg:w-[450px] shadow-md">
                <CardHeader>
                    <Header label={headerLabel} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                <CardFooter>
                    <Social />
                </CardFooter>
                <CardFooter>
                    <BackButton label={backButtonLabel} href={backButtonHref} />
                </CardFooter>
            </Card>
        </div>
    );
}
