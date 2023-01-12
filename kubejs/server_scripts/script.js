// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
    event.remove({output: 'electrodynamics:jetpack'})
    event.remove({output: 'mekanism:jetpack'})
    event.remove({output: 'mekanism:jetpack_armored'})
})

ServerEvents.tags('item', event => {
})
