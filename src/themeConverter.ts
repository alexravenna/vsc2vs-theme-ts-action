import { exec } from "@actions/exec";
import { setFailed, info } from "@actions/core";

/**
 * Clones the ThemeConverter project.
 *
 * @param cloneDir the directory to clone the ThemeConverter project to
 */
export async function cloneRepository(cloneDir: string): Promise<void> {
    info("Cloning ThemeConverter repo...");

    await exec("git clone", [
        "https://github.com/microsoft/theme-converter-for-vs",
        cloneDir,
    ]).catch((error: Error) => {
        setFailed(`Action failed with error: "${error.message}"`);
    });
}

/**
 * Builds the ThemeConverter project.
 *
 * @param buildDir the directory to build the ThemeConverter project in
 */
export async function buildProject(buildDir: string): Promise<void> {
    info("Building ThemeConverter project...");

    await exec(`cd ${buildDir}/ThemeConverter/ThemeConverter/`);

    await exec(`dotnet build ThemeConverter.csproj`).catch((error: Error) => {
        setFailed(`Action failed with error: "${error.message}"`);
    });
}
