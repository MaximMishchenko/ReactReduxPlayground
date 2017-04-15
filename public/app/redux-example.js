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

let store = redux.createStore(reducer)

let currentState = store.getState()

console.log(currentState)

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Max'
})

console.log('should be', store.getState())
