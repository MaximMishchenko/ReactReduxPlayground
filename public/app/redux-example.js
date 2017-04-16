const redux =  require('redux')

let nextHobbyId = 1
let nextMovieId = 1

let nameReducer = (state =  'Anonymous', action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return action.name
		default:
			return state
	}
}

let changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
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

let addHobbie = (hobby) => {
	return {
		type: 'ADD_HOBBIE',
		hobby
	}
}

let removeHobbie = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
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

let addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title,
		genre
	}
}

let removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
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

store.dispatch(changeName('Max'))
store.dispatch(addHobbie('Running'))
store.dispatch(changeName('Emma'))
store.dispatch(addHobbie('Walking'))
store.dispatch(removeHobbie(2))
store.dispatch(addMovie('Mad Max', 'Action'))
store.dispatch(addMovie('Harry Potter', 'Fantasy'))
store.dispatch(removeMovie(2))
