const KEY = 'words'

function loadWords() {
	// Hämta en sträng i JSON-format
	let json = localStorage.getItem(KEY)
	if( json === null ) {
		localStorage.setItem(KEY, "[]")
		return []
	}

	// Omvandla strängen till JavaScript-array
	// OBS! Inte säkert att detta lyckas...
	let wordList = JSON.parse(json)
	console.log('Load words: ', wordList)
	return wordList
}

function saveWords(wordList) {
	// Omvandla listan till en sträng i JSON-format
	let json = JSON.stringify(wordList)

	// Spara strängen i localStorage
	localStorage.setItem(KEY, json)
}

export { loadWords, saveWords }
