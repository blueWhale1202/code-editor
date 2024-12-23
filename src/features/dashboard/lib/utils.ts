import { Monaco } from "@monaco-editor/react";
import { MONACO_THEMES } from "../constants/themes";

export const defineMonacoThemes = (monaco: Monaco) => {
    Object.entries(MONACO_THEMES).forEach(([theme, themeData]) => {
        monaco.editor.defineTheme(theme, themeData);
    });
};
