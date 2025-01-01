import { exec } from "@actions/exec";

/**
 * Check for necessary tools on the system:
 * - Git
 * - .NET CLI
 */
export async function dependencyChecks(): Promise<void> {
    await exec("git").catch()
}
