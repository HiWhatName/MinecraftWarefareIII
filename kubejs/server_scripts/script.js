// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
    // Jetpacks
    event.remove({output: 'electrodynamics:jetpack'})
    event.remove({output: 'mekanism:jetpack'})
    event.remove({output: 'mekanism:jetpack_armored'})

    // Tanks
    event.remove({output: 'trajanscore:crafter_block'})
    event.shaped('trajanscore:crafter_block', [
    'SAS',
    'OEB',
    'OOO'
], {
    S: 'mekanism:block_steel',
    A: 'minecraft:anvil',
    O: '#forge:storage_blocks/osmium',
    E: 'mekanism:basic_energy_cube',
    B: 'minecraft:iron_bars'
})
 

    event.remove({output: 'trajanscore:plate_press_block_item'})
    event.shaped('trajanscore:plate_press_block_item', [
    'SAS',
    'P P',
    'SAS'
], {
    S: '#forge:ingots/steel',
    A: 'minecraft:anvil',
    P: 'minecraft:heavy_weighted_pressure_plate'
})
 
    event.remove({output: 'trajanscore:shell_workbench_item'})
    event.shaped('trajanscore:shell_workbench_item', [
    'OOO',
    'BOB',
    'D D'
], {
    O: '#forge:storage_blocks/osmium',
    D: 'minecraft:diamond',
    B: 'minecraft:iron_bars'
})
 
    // Planes
    event.remove({output: 'simpleplanes:charging_station'})
    event.shaped('simpleplanes:charging_station', [
    'ESE',
    'WCW',
    'ESE'
], {
    S: '#forge:ingots/steel',
    C: 'mekanism:chargepad',
    W: 'electrodynamics:wirecopper',
    E: '#forge:batteries'
})
    
    event.remove({output: 'simpleplanes:armor'})
    event.shaped('simpleplanes:armor', [
    'S S',
    'BSB',
    'SBS'
], {
    S: '#forge:ingots/steel',
    B: '#forge:storage_blocks/steel',
})
 
    event.remove({output: 'simpleplanes:plane_workbench'})
    event.shaped('simpleplanes:plane_workbench', [
    'PSA',
    'BOB',
    'RBR'
], {
    P: '#forge:tools/pickaxes/steel',
    A: '#forge:tools/axes/steel',
    R: 'minecraft:redstone',
    S: '#forge:ingots/steel',
    O: '#forge:storage_blocks/osmium',
    B: 'minecraft:obsidian'
})

    event.remove({output: 'simpleplanes:electric_engine'})
    event.shaped('simpleplanes:electric_engine', [
    'WWW',
    'SPS',
    'RWR'
], {
    W: 'electrodynamics:wirecopper',
    S: '#forge:storage_blocks/steel',
    R: '#forge:storage_blocks/redstone',
    P: 'simpleplanes:propeller'
})

    event.remove({output: 'simpleplanes:furnace_engine'})
    event.shaped('simpleplanes:furnace_engine', [
    'SPS',
    'RBR',
    'LLL'
], {
    B: 'minecraft:blast_furnace',
    L: 'minecraft:light_weighted_pressure_plate',
    S: '#forge:storage_blocks/steel',
    R: '#forge:storage_blocks/redstone',
    P: 'simpleplanes:propeller'
})

    event.remove({output: 'simpleplanes:solar_panel'})
    event.shaped('simpleplanes:solar_panel', [
    'SSS',
    'OOO',
    'SES'
], {
    S: '#forge:ingots/steel',
    O: 'mekanismgenerators:solar_panel',
    E: '#forge:batteries'
})






    
})

ServerEvents.tags('item', event => {
})
