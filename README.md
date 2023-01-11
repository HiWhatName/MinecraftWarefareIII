# MWIII - Minecraft Warfare 3
A simple modpack designed for an competition using packwiz. Try avoiding installing mods from multiple sources (Modrinth/Curseforge/Custom) ones from other platforms the main one (Curseforge) will be packed into the finall installation file, thus increasing its size.

### Installation
Download the latest release: <a href="https://github.com/HiWhatName/MinecraftWarefareIII/releases/">here</a>

#### MultiMC (recommended)
1. Open MultiMC and click "Add Instance" -> Import from zip -> Browse and select the file you just downloaded.
2. Select the newly installed instance and select "Edit Instance" on the right. Head over to "Java settings" and make sure you're using version 16 or higher and have assigned at least 4GB of ram. (6GB being recommended)

#### Curseforge (untested)
Sorry, at this time we aren't able to supply instrunctions on how to install it for CurseForge. Tho, it should be as simple as adding a new Instance and selecting the zip file.

## Addings mods:
`packwiz curseforge install URL`, will install a mod from the curseforge repositories and it's dependencies. Tho, some are locked behind their api and must be installed manually.

`packwiz modrinth install URL/ID`, same as above but should work all the time.

If you added any mods your self be sure to run `packwiz refresh`.

## How to export (Client and Server)
While this repository doesn't contain the actual jar files used to start the modpack, they can be packed into an modrinth file and extracted from there. Here's how to build it:

#### Curseforge
`packwiz curseforge export --side [server/client/both]`
This will create a .zip file, which can be read by the offical launcher to download the mods.

#### Packwiz
`packwiz modrinth export --side [server/client/both]`
Same as above but creates a way larger file containing all the mods already packed into the file itself. *(May be used by MultiMC to create a .mm instance)*

#### Custom server mods:
- You may add DeathBan next to Limited lives for a short ban on death.
(If you're wondering why there are so few commits, I lost 21 due to gitea not working and having to restore an backup -_-)

### Licensing
While this project is provided under the AGPL-3.0 license, the following submodules have their own:
- Default-Dark-Mode located at https://github.com/nebuIr/Default-Dark-Mode/releases/tag/v1.3.4
