"use client";

import { defineMonacoThemes } from "@/features/dashboard/lib/utils";
import { Language, Theme } from "@/types";
import { Editor } from "@monaco-editor/react";
import { Skeleton } from "./ui/skeleton";

type Props = {
    theme: Theme;
    language: Language;
    value?: string;
    onChange: (value?: string) => void;
};

export const CodeEditor = ({ theme, language, value, onChange }: Props) => {
    return (
        <Editor
            language={language}
            theme={theme}
            value={value}
            onChange={onChange}
            beforeMount={defineMonacoThemes}
            options={{
                fontSize: 16,
                automaticLayout: true,
                scrollBeyondLastLine: false,
                padding: { top: 16, bottom: 16 },
                fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                fontLigatures: true,
                cursorBlinking: "smooth",
                smoothScrolling: true,
                renderLineHighlight: "none",
                lineHeight: 1.6,
                letterSpacing: 0.5,
                scrollbar: {
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                },
            }}
            loading={<CodeEditorSkeleton />}
        />
    );
};

export function CodeEditorSkeleton() {
    return (
        <div className="size-full overflow-hidden rounded-xl border border-white/[0.05] bg-[#12121a]/90 p-6 backdrop-blur">
            <div className="overflow-hidden rounded-xl ring-1 ring-white/[0.05]">
                <div className="bg-[#1e1e2e]/50 p-4 backdrop-blur-sm">
                    {[...Array(18)].map((_, i) => (
                        <div key={i} className="mb-3 flex items-center gap-4">
                            <Skeleton className="h-4 w-12" />
                            <Skeleton
                                className="h-4"
                                style={{
                                    width: `${Math.random() * 60 + 20}%`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}