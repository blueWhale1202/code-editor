import { Theme } from "@/types";
import { loader } from "@monaco-editor/react";
import { useEffect, useState } from "react";

export const useLoadEditorTheme = (theme: Theme) => {
    const [loaded, setLoaded] = useState(false);
    const themeName =
        theme === Theme.Default
            ? theme
            : theme.toLowerCase().split(" ").join("");

    useEffect(() => {
        if (theme === Theme.Default) {
            setLoaded(true);
            return;
        }

        loader
            .init()
            .then((monaco) => {
                import(`monaco-themes/themes/${theme}.json`).then((data) => {
                    monaco.editor.defineTheme(themeName, data);
                    setLoaded(true);
                });
            })
            .catch((error) =>
                console.error(
                    "An error occurred during initialization of Monaco: ",
                    error,
                ),
            );
    }, [theme, themeName]);

    return { loaded, themeName };
};
