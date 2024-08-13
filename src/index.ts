/**
 * The entrypoint for the action.
 */
import { cloneRepository, buildProject } from './themeConverter'

const WORK_DIRECTORY = 'work'

// Clone and build ThemeConverter program
cloneRepository(WORK_DIRECTORY).then(() => buildProject(WORK_DIRECTORY))

// Convert theme JSON
