import { useCopyToClipboard } from "@/hooks/use-copy-clipboard";
import { CheckCircle, Copy } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
    value?: string;
};

export const CopyButton = ({ value }: Props) => {
    const { isCopied, copyToClipboard } = useCopyToClipboard();

    return (
        <Button
            variant="secondary"
            size="sm"
            className="text-xs font-normal"
            onClick={() => copyToClipboard(value)}
        >
            {isCopied ? (
                <>
                    <CheckCircle className="!size-3.5" />
                    Copied!
                </>
            ) : (
                <>
                    <Copy className="!size-3.5" />
                    Copy
                </>
            )}
        </Button>
    );
};
