import { exec } from "@actions/exec";

export async function PackageTheme(): Promise<void> {
    await SetUpVsixProject();
}

async function SetUpVsixProject(): Promise<void> {
    // Install the necessary template for creating an empty VSIX project
    await exec("dotnet new install Microsoft.VisualStudio.Sdk.Templates");

    await exec("dotnet new vsix -n ConvertedTheme");
}
