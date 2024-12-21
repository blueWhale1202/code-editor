import { SignedIn } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { ProfileButton } from "@/components/profile-button";

import { LanguageSelector } from "./language-selector";
import { RunButton } from "./run-button";
import { ThemeSelector } from "./theme-selector";

export const Header = () => {
    return (
        <header className="relative z-10">
            <div className="mb-4 flex items-center justify-center rounded-lg bg-[#0a0a0f]/80 p-6 backdrop-blur-xl lg:justify-between">
                <div className="hidden items-center justify-start gap-8 lg:flex">
                    <Logo />

                    <Navigation />
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                        <ThemeSelector />
                        <LanguageSelector />
                    </div>

                    <SignedIn>
                        <RunButton />
                    </SignedIn>

                    <div className="flex items-center gap-2 border-l border-gray-800 pl-3">
                        <ProfileButton />
                    </div>
                </div>
            </div>
        </header>
    );
};
