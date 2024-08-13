"use client"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export function Social() {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button variant={"outline"} size="lg" className="w-full" onClick={() => {

            }}>
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button variant={"outline"} size="lg" className="w-full">
                <FaGithub className="h-5 w-5" />
            </Button>
        </div >
    );
}
