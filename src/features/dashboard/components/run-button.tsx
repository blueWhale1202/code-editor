import { Button } from "@/components/ui/button";
import { Loader2, Play } from "lucide-react";

export const RunButton = () => {
    const isRunning = false;

    return (
        <Button>
            <div className="flex items-center gap-2.5">
                {isRunning ? (
                    <>
                        <Loader2 className="animate-spin text-white/70" />
                        Executing...
                    </>
                ) : (
                    <>
                        <Play className="text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
                        Run Code
                    </>
                )}
            </div>
        </Button>
    );
};
