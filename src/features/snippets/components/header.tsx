import { Logo } from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { ProfileButton } from "@/components/profile-button";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Logo />
                    <Navigation />
                </div>
                <ProfileButton />
            </div>
        </header>
    );
};
