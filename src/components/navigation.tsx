import Link from "next/link";

import { Users } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
    return (
        <nav>
            <Button variant="outline" asChild>
                <Link
                    href="/snippets"
                    className="text-gray-300 hover:text-white"
                >
                    <Users />
                    <span>Community</span>
                </Link>
            </Button>
        </nav>
    );
};
