import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

type Props = {
    src?: string;
    className?: HTMLImageElement["className"];
};

export const UserAvatar = ({ src }: Props) => {
    return (
        <Avatar>
            <AvatarImage src={src} />
            <AvatarFallback>
                <UserIcon className="size-4 text-[#808086]" />
            </AvatarFallback>
        </Avatar>
    );
};
