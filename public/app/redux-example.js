var redux =  require('redux')

console.log('Startting redux example')

var reducer = (state = {name: 'Anonymous'}, action) => {
	console.log('new action', action)

	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			}
		default:
			return state
	}
}

let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

let unsubscribe = store.subscribe(() => {
	let state = store.getState()

	document.getElementById('app').innerHTML = state.name
})

let currentState = store.getState()

console.log(currentState)

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Max'
})

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emma'
})

console.log('should be', store.getState())
