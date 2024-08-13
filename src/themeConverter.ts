import { exec } from '@actions/exec'
import { setFailed, info } from '@actions/core'

const WORK_DIRECTORY = 'work'

export async function cloneRepository(
  cloneDir = WORK_DIRECTORY
): Promise<void> {
  info('Cloning ThemeConverter repo...')

  await exec('git clone', [
    'https://github.com/microsoft/theme-converter-for-vs',
    cloneDir
  ]).catch((error: Error) => {
    setFailed(`Action failed with error: "${error.message}"`)
  })
}

export async function buildProject(): Promise<void> {
  info('Building ThemeConverter project...')
  await exec(
    `dotnet build ${WORK_DIRECTORY}/ThemeConverter/ThemeConverter/ThemeConverter.csproj`
  ).catch((error: Error) => {
    setFailed(`Action failed with error: "${error.message}"`)
  })
}
