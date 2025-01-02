import { exec } from "@actions/exec";
import { toPlatformPath, setFailed, info } from "@actions/core";

/**
 * Clones the ThemeConverter project.
 *
 * @param cloneDir the directory to clone the ThemeConverter project to
 */
export async function cloneRepository(cloneDir: string): Promise<void> {
    info(`Cloning ThemeConverter repo to "${cloneDir}"...`);

    try {
        await exec("git clone", [
            "https://github.com/microsoft/theme-converter-for-vs",
            cloneDir,
        ]);
    } catch (error) {
        setFailed(`Action failed with error: "${(error as Error).message}"`);
    }
}

/**
 * Builds the ThemeConverter project.
 *
 * @param buildDir the directory to build the ThemeConverter project in
 */
export async function buildProject(buildDir: string): Promise<void> {
    info(`Building ThemeConverter project in "${buildDir}"...`);

    try {
        await exec(
            `dotnet build ${toPlatformPath(`${buildDir}/ThemeConverter/ThemeConverter/ThemeConverter.csproj`)}`,
        );
    } catch (error) {
        setFailed(`Action failed with error: "${(error as Error).message}"`);
    }
}
