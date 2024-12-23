import { Language, Theme } from "@/types";

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
    value: Theme;
    icon: LucideIcon;
    color: string;
};

export const THEMES: ThemeItem[] = [
    {
        label: "Dark",
        value: Theme.Default,
        icon: Moon,
        color: "#1e1e1e",
    },
    {
        label: "Dracula",
        value: Theme.Dracula,
        icon: Glasses,
        color: "#282a36",
    },
    {
        label: "Night Owl",
        value: Theme.NightOwl,
        icon: CloudMoon,
        color: "#011627",
    },
    {
        label: "Github",
        value: Theme.Github,
        icon: Github,
        color: "#24292e",
    },
    {
        label: "Cobalt",
        value: Theme.Cobalt,
        icon: Eclipse,
        color: "#002240",
    },
];

type LanguageConfig = {
    label: string;
    value: Language;
    logo: string;
    pistonRuntime: { language: Language; version: string };
};

export const LANGUAGES: Record<Language, LanguageConfig> = {
    javascript: {
        label: "JavaScript",
        value: Language.JavaScript,
        logo: "languages/javascript.svg",
        pistonRuntime: {
            language: Language.JavaScript,
            version: RUNTIMES[Language.JavaScript],
        },
    },
    typescript: {
        label: "TypeScript",
        value: Language.TypeScript,
        logo: "languages/typescript.svg",
        pistonRuntime: {
            language: Language.TypeScript,
            version: RUNTIMES[Language.TypeScript],
        },
    },
    python: {
        label: "Python",
        value: Language.Python,
        logo: "languages/python.svg",
        pistonRuntime: {
            language: Language.Python,
            version: RUNTIMES[Language.Python],
        },
    },
    java: {
        label: "Java",
        value: Language.Java,
        logo: "languages/java.svg",
        pistonRuntime: {
            language: Language.Java,
            version: RUNTIMES[Language.Java],
        },
    },
    cpp: {
        label: "C++",
        value: Language.Cpp,
        logo: "languages/cpp.svg",
        pistonRuntime: {
            language: Language.Cpp,
            version: RUNTIMES[Language.Cpp],
        },
    },
    csharp: {
        label: "C#",
        value: Language.CSharp,
        logo: "languages/csharp.svg",
        pistonRuntime: {
            language: Language.CSharp,
            version: RUNTIMES[Language.CSharp],
        },
    },
};
