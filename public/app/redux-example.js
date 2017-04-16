
let actions = require('./actions/index')
let store = require('./store/configureStore').configure()


let unsubscribe = store.subscribe(() => {
	let state = store.getState()

	if(state.map.isFetching){
		document.getElementById('app').innerHTML = 'loading...'
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="' + state.map.url +'" target="_blank"> View your location </a>'
	}

	console.log(store.getState())
})

let currentState = store.getState()

console.log(currentState)

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Max'))
store.dispatch(actions.addHobbie('Running'))
store.dispatch(actions.changeName('Emma'))
store.dispatch(actions.addHobbie('Walking'))
store.dispatch(actions.removeHobbie(2))
store.dispatch(actions.addMovie('Mad Max', 'Action'))
store.dispatch(actions.addMovie('Harry Potter', 'Fantasy'))
store.dispatch(actions.removeMovie(2))
