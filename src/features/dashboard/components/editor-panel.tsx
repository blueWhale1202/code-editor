"use client";

import { LANGUAGES } from "../constants";
import { CODE_EXAMPLES } from "../constants/code-example";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

import { CodeEditor } from "@/components/editor";
import { ShareSnippet } from "./share-snippet";

import { useEditor } from "@/hooks/use-editor";

export const EditorPanel = () => {
    const {
        config: { theme, language },
    } = useEditor();

    const [value, setValue] = useState<string | undefined>("");

    const onReset = () => {
        setValue(CODE_EXAMPLES[language]);
    };

    return (
        <div className="rounded-xl border border-white/[0.05] bg-[#12121a]/90 p-6 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
                        <Image
                            src={LANGUAGES[language].logo}
                            alt={language}
                            width={32}
                            height={32}
                        />
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-white">
                            Code Editor
                        </h2>
                        <p className="text-xs text-gray-500">
                            Write and execute your code
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="border-none text-gray-300 hover:bg-[#2a2a3a]"
                        onClick={onReset}
                    >
                        <RotateCcw />
                    </Button>
                    <ShareSnippet />
                </div>
            </div>
            <div className="h-[600px]">
                <CodeEditor
                    value={value}
                    onChange={setValue}
                    theme={theme}
                    language={language}
                />
            </div>
        </div>
    );
};
