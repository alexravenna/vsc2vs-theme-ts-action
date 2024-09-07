import * as core from "@actions/core";
import { cloneRepository, buildProject } from "./themeConverter";
import { dependencyChecks } from "./checks";

const WORK_DIRECTORY = "work";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
    try {
        // Run dependency checks first
        dependencyChecks();

        // Clone and build ThemeConverter program
        cloneRepository(WORK_DIRECTORY).then(() =>
            buildProject(WORK_DIRECTORY),
        );

        // Convert theme JSON
        const path = core.getInput("path");

        // Set outputs for other workflow steps to use
        core.setOutput("output-vsix", "");
    } catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error) core.setFailed(error.message);
    }
}
