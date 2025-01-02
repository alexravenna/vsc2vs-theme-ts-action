import { exec } from "@actions/exec";

export async function SetUpProject(): Promise<void> {
    // Install the necessary template for creating an empty VSIX project
    exec("dotnet new install Microsoft.VisualStudio.Sdk.Templates");
}
