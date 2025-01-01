# VS Code to Visual Studio Theme Converter Action

This GitHub Action converts a Visual Studio Code (VS Code) theme to a theme that
can be installed in Visual Studio.

## How it works

The steps that this action uses for converting a VS Code theme to a Visual
Studio VSIX:

1. Clone ThemeConverter repo
   <https://github.com/microsoft/theme-converter-for-vs>
2. Build project `dotnet build ThemeConverter.csproj`
3. Run `bin\Debug\net6.0\ThemeConverter.exe` with extension .json file → creates
   a .pkgdef file
4. In VS 2022 create new Empty VSIX Project
5. Add converted .pkgdef file(s)
6. Edit the properties of the .pkgdef file:

    a. Set `Copy to Output Directory` to `Copy always`.

    b. Set `Include in VSIX` to `true`.

    c. Open the `source.extension.vsixmanifest` file, then select Assets, select
    New.

    d. Set `Type` to `Microsoft.VisualStudio.VsPackage`, and `Source` to
    `File on filesystem`.

    e. Select Browse and select the .pkgdef you added. Select OK.

    f. Edit other fields in the vsixmanifest as desired (author, version,
    company, etc).

7. Build solution → VSIX is in output folder

## Resources

- [Bring VS Code Themes to Visual Studio (YouTube video)](https://www.youtube.com/watch?v=2Gwqr5uuBt4)
- [Microsoft DevBlog post discussing custom Visual Studio themes and the Theme Converter](https://devblogs.microsoft.com/visualstudio/custom-themes/)
- [theme-converter-for-vs GitHub repo](https://github.com/microsoft/theme-converter-for-vs)
