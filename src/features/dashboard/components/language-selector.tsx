"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { ChevronsUpDown, Sparkles } from "lucide-react";

import { Language } from "@/types";
import { LANGUAGES } from "../constants";

export const LanguageSelector = () => {
    const data = LANGUAGES;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(data.javascript.value);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="group w-44 justify-start border-gray-800/50 bg-[#1e1e2e]/80 hover:border-gray-700 hover:bg-[#262637]"
                >
                    <div className="size-6 rounded-md bg-gray-800/50 p-0.5">
                        <Image
                            src={data[value].logo}
                            alt="programming language logo"
                            width={24}
                            height={24}
                            className="relative z-10 h-full w-full object-contain"
                        />
                    </div>
                    <span className="text-gray-300 group-hover:text-white">
                        {value ? data[value].label : "Select item..."}
                    </span>

                    <ChevronsUpDown className="ml-auto shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-0" align="start">
                <Command className="bg-[#1e1e2e]/95">
                    <CommandList>
                        <CommandGroup heading="Select Language">
                            {Object.values(data).map((item) => {
                                const isActive = value === item.value;

                                return (
                                    <CommandItem
                                        key={item.label}
                                        className={cn(
                                            "group border-2 border-transparent py-2 text-gray-300 data-[selected=true]:bg-[#262637] data-[selected=true]:text-white",
                                            isActive &&
                                                "border-blue-500/30 bg-blue-500/10 text-blue-400",
                                        )}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue as Language);
                                            setOpen(false);
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "relative size-8 rounded-lg bg-gray-800/50 p-1.5",
                                                isActive && "bg-blue-500/10",
                                            )}
                                        >
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                                            <Image
                                                width={20}
                                                height={20}
                                                src={item.logo}
                                                alt={`${item.label} logo`}
                                                className="object-contain"
                                            />
                                        </div>

                                        <span>{item.label}</span>

                                        {isActive && (
                                            <Sparkles className="ml-auto animate-pulse text-blue-400" />
                                        )}
                                    </CommandItem>
                                );
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};
