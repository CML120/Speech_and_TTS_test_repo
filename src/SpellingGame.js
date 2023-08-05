// Import dependencies from the 'react' package
import React, { useState } from 'react';
import SpeechRecognitionComponent from './SpeechRecognitionComponent';

const SpellingGame = () => {
    const [spokenWord, setSpokenWord] = useState('');
    const correctWord = 'apple'; // Replace with your choice of word  < testing only, will be planning to create an array that holds words/pictures
    const speakWord = (word) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    };


    const handleSpokenWord = (word) => {
        const spokenLetter = word.toLowerCase();
        setSpokenWord((prevSpokenWord) => prevSpokenWord + spokenLetter);
    };


    const checkSpelling = () => {
        const sanitizedSpokenWord = spokenWord.replace(/\s+/g, '').toLowerCase();
        const sanitizedCorrectWord = correctWord.replace(/\s+/g, '').toLowerCase();
        if (sanitizedSpokenWord === sanitizedCorrectWord.slice(0, sanitizedSpokenWord.length)) {
            alert('Correct spelling!');
        } else {
            alert('Incorrect spelling. Try again.');
        }
    };


    const clearSpokenLetters = () => {
        setSpokenWord('');
    };


    return (
        <div>
            <h1>Spelling Game</h1>
            <p>Speak the word: "{correctWord}"</p>
            <SpeechRecognitionComponent handleSpokenWord={handleSpokenWord} />
            <button onClick={() => speakWord(correctWord)}>Hear Word</button>
            <button onClick={clearSpokenLetters}>Clear</button>
            <div>
                <p>Spoken Letters: {spokenWord}</p>
            </div>
            <button onClick={checkSpelling}>Check Spelling</button>
        </div>
    );
};


export default SpellingGame;
