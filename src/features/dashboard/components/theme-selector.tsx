"use client";

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
import { ChevronsUpDown, Palette } from "lucide-react";

import { THEMES } from "../constants";

export const ThemeSelector = () => {
    const data = THEMES;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(data[0].label);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="group w-40 justify-start border-gray-800/50 bg-[#1e1e2e]/80 hover:border-gray-700 hover:bg-[#262637]"
                >
                    <Palette className="text-gray-400 group-hover:text-gray-300" />
                    <span className="text-gray-300 group-hover:text-white">
                        {value
                            ? data.find((item) => item.label === value)?.label
                            : "Select item..."}
                    </span>

                    <ChevronsUpDown className="ml-auto shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0" align="start">
                <Command className="bg-[#1e1e2e]/95">
                    <CommandList>
                        <CommandGroup heading="Select Theme">
                            {data.map((item) => {
                                const isActive = value === item.label;

                                return (
                                    <CommandItem
                                        key={item.label}
                                        className={cn(
                                            "group border-2 border-transparent text-gray-300 data-[selected=true]:bg-[#262637] data-[selected=true]:text-white",
                                            isActive &&
                                                "border-blue-500/30 bg-blue-500/10 text-blue-400",
                                        )}
                                        value={item.label}
                                        onSelect={(currentValue) => {
                                            setValue(
                                                isActive ? "" : currentValue,
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        <div
                                            className={cn(
                                                "flex size-8 items-center justify-center rounded-lg bg-gray-800/50 text-gray-400 transition-all duration-200 group-hover:scale-110",
                                                isActive &&
                                                    "bg-blue-500/10 text-blue-400",
                                            )}
                                        >
                                            <item.icon className="size-4" />
                                        </div>
                                        <span>{item.label}</span>

                                        <div
                                            className="ml-auto size-4 rounded-full border border-gray-600"
                                            style={{ background: item.color }}
                                        />
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
