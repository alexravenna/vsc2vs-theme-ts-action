import { exec } from '@actions/exec'

export async function cloneRepository(): Promise<void> {
  await exec('git clone', [
    'https://github.com/microsoft/theme-converter-for-vs',
    'work'
  ])
}
