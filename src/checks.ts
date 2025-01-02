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
        throw error;
    }
}
