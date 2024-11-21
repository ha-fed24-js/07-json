// const TEST_KEY = 'test'
// let data = localStorage.getItem(TEST_KEY)
// console.log('Data från localStorage: ', data)

// let word = {
// 	word: 'gata',
// 	translation: 'street'
// }
// let json = JSON.stringify( word )

// localStorage.setItem(TEST_KEY, json)
import { loadWords, saveWords } from "./storage.js"

const inputSwedish = document.querySelector('#swedish-word')
const inputEnglish = document.querySelector('#english-word')
const wordButton = document.querySelector('#add-word')
const wordGrid = document.querySelector('.word-grid')

let wordList = loadWords()
// [
// 	{ sv: 'katt', en: 'cat' }
// ]

// Visa alla tidigare glosor
renderWords()


wordButton.addEventListener('click', () => {
	// skapa word-objekt
	// lägg till objektet till wordList
	// rendera alla glosor i .word-grid
	let word = {
		sv: inputSwedish.value,
		en: inputEnglish.value
	}
	// console.log('Word objekt: ', word)

	wordList.push(word)
	saveWords(wordList)
	renderWords()
})

function renderWords() {
	// Alternativ 1: funkar alltid
	// const heading1 = document.createElement('div')
	// heading1.innerText = 'Svenska'
	// const heading2 = document.createElement('div')
	// heading2.innerText = 'Engelska'
	// wordGrid.append(heading1, heading2)

	// Alternativ 2: funkar ibland (när man inte behöver event listeners, samt texten inte kommer från användaren)
	wordGrid.innerHTML = `
		<div> Svenska </div>
		<div> Engelska </div>
	`

	wordList.forEach(word => {
		const swe = document.createElement('div')
		const eng = document.createElement('div')
		swe.innerText = word.sv
		eng.innerText = word.en

		wordGrid.append(swe, eng)
		// wordGrid.append(eng)
	})
}
