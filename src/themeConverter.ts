import { exec } from '@actions/exec'
import { setFailed, info } from '@actions/core'

export async function cloneRepository(cloneDir: string): Promise<void> {
  info('Cloning ThemeConverter repo...')

  await exec('git clone', [
    'https://github.com/microsoft/theme-converter-for-vs',
    cloneDir
  ]).catch((error: Error) => {
    setFailed(`Action failed with error: "${error.message}"`)
  })
}

export async function buildProject(buildDir: string): Promise<void> {
  info('Building ThemeConverter project...')
  
  await exec(`cd ${buildDir}/ThemeConverter/ThemeConverter/`)

  await exec(
    `dotnet build ThemeConverter.csproj`
  ).catch((error: Error) => {
    setFailed(`Action failed with error: "${error.message}"`)
  })
}
