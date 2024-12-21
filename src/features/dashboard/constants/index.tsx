import { Language } from "@/types";

import { CODE_EXAMPLES } from "./code-example";
import { RUNTIMES } from "./runtime";

import {
    CloudMoon,
    Eclipse,
    Github,
    Glasses,
    LucideIcon,
    Moon,
} from "lucide-react";

type ThemeItem = {
    label: string;
    icon: LucideIcon;
    color: string;
};

export const THEMES: ThemeItem[] = [
    {
        label: "Dark",
        icon: Moon,
        color: "#1e1e1e",
    },
    {
        label: "Dracula",
        icon: Glasses,
        color: "#282a36",
    },
    {
        label: "Night Owl",
        icon: CloudMoon,
        color: "#011627",
    },
    {
        label: "Github",
        icon: Github,
        color: "#24292e",
    },
    {
        label: "Cobalt",
        icon: Eclipse,
        color: "#002240",
    },
];

type LanguageConfig = {
    label: string;
    value: Language;
    logo: string;
    pistonRuntime: { language: Language; version: string };
    defaultCode: string;
};

export const LANGUAGES: Record<Language, LanguageConfig> = {
    javascript: {
        label: "JavaScript",
        value: Language.JavaScript,
        logo: "language/javascript.svg",
        pistonRuntime: {
            language: Language.JavaScript,
            version: RUNTIMES[Language.JavaScript],
        },
        defaultCode: CODE_EXAMPLES[Language.JavaScript],
    },
    typescript: {
        label: "TypeScript",
        value: Language.TypeScript,
        logo: "language/typescript.svg",
        pistonRuntime: {
            language: Language.TypeScript,
            version: RUNTIMES[Language.TypeScript],
        },
        defaultCode: CODE_EXAMPLES[Language.TypeScript],
    },
    python: {
        label: "Python",
        value: Language.Python,
        logo: "language/python.svg",
        pistonRuntime: {
            language: Language.Python,
            version: RUNTIMES[Language.Python],
        },
        defaultCode: CODE_EXAMPLES[Language.Python],
    },
    java: {
        label: "Java",
        value: Language.Java,
        logo: "language/java.svg",
        pistonRuntime: {
            language: Language.Java,
            version: RUNTIMES[Language.Java],
        },
        defaultCode: CODE_EXAMPLES[Language.Java],
    },
    cpp: {
        label: "C++",
        value: Language.Cpp,
        logo: "language/cpp.svg",
        pistonRuntime: {
            language: Language.Cpp,
            version: RUNTIMES[Language.Cpp],
        },
        defaultCode: CODE_EXAMPLES[Language.Cpp],
    },
    csharp: {
        label: "C#",
        value: Language.CSharp,
        logo: "language/csharp.svg",
        pistonRuntime: {
            language: Language.CSharp,
            version: RUNTIMES[Language.CSharp],
        },
        defaultCode: CODE_EXAMPLES[Language.CSharp],
    },
};
