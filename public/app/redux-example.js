const redux =  require('redux')

let stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: []
}

let nextHobbyId = 1
let nextMovieId = 1

let oldReducer = (state = stateDefault, action) => {
	console.log('new action', action)

	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			}
		case 'REMOVE_HOBBY':
			return {
				...state,
				hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
			}
		case 'REMOVE_MOVIE':
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id !== action.id)
			}
		case 'ADD_HOBBIE':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			}
		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						title: action.title,
						genre: action.genre
					}
				]
			}
		default:
			return state
	}
}

let nameReducer = (state =  'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name
		default:
			return state
	}
}

let hobbiesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_HOBBIE':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			]
		case 'REMOVE_HOBBY':
			return state.filter((hobby) => hobby.id !== action.id)
		default:
			return state
	}
}

let moviesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_MOVIE':
			return[
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre
				}
			]
		case 'REMOVE_MOVIE':
			return state.filter((movie) => movie.id !== action.id)
		default:
			return state
	}
}

let reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
})

let store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

let unsubscribe = store.subscribe(() => {
	let state = store.getState()

	document.getElementById('app').innerHTML = state.name

	console.log(store.getState())
})

let currentState = store.getState()

console.log(currentState)

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Max'
})

store.dispatch({
	type: 'ADD_HOBBIE',
	hobby: 'Running'
})

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emma'
})

store.dispatch({
	type: 'ADD_HOBBIE',
	hobby: 'Walking'
})

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Mad Max',
	genre: 'Action'
})

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Harry Potter',
	genre: 'Fantasy'
})

store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 2
})

console.log('should be', store.getState())
