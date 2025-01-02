import * as core from "@actions/core";
import { exec } from "@actions/exec";
import path from "path";

/**
 * Converts the given VS Code theme to a Visual Studio theme.
 * @param dir
 */
export async function convertTheme(
    workDir: string,
    themePath: string,
): Promise<void> {
    const themeDir = path.resolve(themePath);
    core.info(`Converting theme ${themeDir}...`);

    try {
        // ThemeConverter looks for some files in the same directory as the executable relatively,
        // so we have to execute it there and not from the action root
        process.chdir(
            `${core.toPlatformPath(`${workDir}/ThemeConverter/ThemeConverter/bin/Debug/net6.0`)}`,
        );
        await exec(`./ThemeConverter -i ${themeDir}`);
    } catch (error: any) {
        core.setFailed(`Action failed with error: "${error.message}"`);
    }
}
