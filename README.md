# MWIII - Minecraft Warfare 3
A simple modpack designed for an competition using packwiz. Try avoiding installing mods from multiple sources (Modrinth/Curseforge/Custom) ones from other platforms the main one (Curseforge) will be packed into the finall installation file, thus increasing its size.

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
- For the full experience, use our fork of "Simple-planes" found at: https://git.jonas-sp.tk/HiWhatName/simply-better-planes

(If you're wondering why there are so few commits, I lost 21 due to gitea not working and having to restore an backup -_-)
