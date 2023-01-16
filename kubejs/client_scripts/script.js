console.info('[MWIII]=> Setting up user space events...')

JEIEvents.hideItems(event => {
	// Hide items in JEI here
    console.info('Disabling recipes from JEI')

	event.hide('mekanism:jetpack')
    event.hide('mekanism:jetpack_armored')
    event.hide('electrodynamics:jetpack')
})
