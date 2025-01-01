import { setFailed } from "@actions/core";
import { exec } from "@actions/exec";

/**
 * Check for necessary tools on the system:
 * - Git
 * - .NET CLI
 */
export async function dependencyChecks(): Promise<void> {
    try {
        await exec("git --version");
        await exec("dotnet --info");
    } catch (error) {
        setFailed(`Action failed with error: "${(error as Error).message}"`);
    }
}
