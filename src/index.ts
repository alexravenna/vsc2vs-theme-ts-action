/**
 * The entrypoint for the action.
 */
import { cloneRepository, buildProject } from './themeConverter'

cloneRepository().then(() => buildProject())
