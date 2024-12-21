import { UserButton } from "@clerk/nextjs";

export default function AppPage() {
    return (
        <div>
            <h2 className="text-3xl">Home page</h2>
            <UserButton />
        </div>
    );
}
