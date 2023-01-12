// priority: 0

console.info('Hey user, doing some stuff to get MWIII to work!')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	event.hide('mekanism:jetpack')
    event.hide('mekanism:jetpack_armored')
    event.hide('electrodynamics:jetpack')
})
