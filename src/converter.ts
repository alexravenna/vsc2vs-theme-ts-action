import { getInput, setFailed } from "@actions/core";
import { exec } from "@actions/exec";

/**
 * Converts the given VS Code theme to a Visual Studio theme.
 * @param dir 
 */
export async function convertTheme(dir: string): Promise<void> {
    const themeToConvert = getInput("path");

    try {
        exec(`bin\Debug\net6.0\ThemeConverter.exe`, [`-i ${themeToConvert}`]);
    } catch (error: any) {
        setFailed(`Action failed with error: "${error.message}"`);
    }
}
