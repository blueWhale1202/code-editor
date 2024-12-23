"use client";

import { SignedIn } from "@clerk/nextjs";

import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { ProfileButton } from "@/components/profile-button";
import { Separator } from "@/components/ui/separator";

import { LanguageSelector } from "./language-selector";
import { ShareSnippet } from "./share-snippet";
import { ThemeSelector } from "./theme-selector";

export const Header = () => {
    return (
        <header className="relative z-10">
            <div className="mb-4 flex items-center justify-center rounded-lg bg-[#0a0a0f]/80 p-6 backdrop-blur-xl lg:justify-between">
                <div className="hidden items-center justify-start gap-8 lg:flex">
                    <Logo />
                    <Navigation />
                </div>

                <div className="flex items-center gap-3">
                    <ThemeSelector />
                    <LanguageSelector />

                    <SignedIn>
                        <ShareSnippet />
                    </SignedIn>

                    <Separator
                        orientation="vertical"
                        className="mx-1 h-8 w-0.5"
                    />

                    <ProfileButton />
                </div>
            </div>
        </header>
    );
};
