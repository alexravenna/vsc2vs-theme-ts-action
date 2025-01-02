import * as core from "@actions/core";
import { dependencyChecks } from "./checks";
import { convertTheme } from "./converter";
import { buildProject, cloneRepository } from "./themeConverter";

const WORK_DIRECTORY = "work";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
    try {
        // Run dependency checks first
        await dependencyChecks();

        // Clone and build ThemeConverter program
        await cloneRepository(WORK_DIRECTORY);
        const projectDir = await buildProject(WORK_DIRECTORY);
        if (projectDir === undefined) throw new Error();

        // Convert theme JSON
        // await convertTheme(projectDir, core.getInput("themePath"));
        await convertTheme(WORK_DIRECTORY, "theme.json");

        // Set outputs for other workflow steps to use
        core.setOutput("output-vsix", "");
    } catch (error) {
        // Fail the workflow run if an error occurs
        core.setFailed(
            `Action failed with error: "${(error as Error).message}"`,
        );
    }
}
