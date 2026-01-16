import { useState } from 'react';
import Home from './components/Home';
import Setup from './components/Setup';
import WordReveal from './components/WordReveal';
import GamePlay from './components/GamePlay';
import Voting from './components/Voting';
import Results from './components/Results';
import RemakeButton from './components/RemakeButton';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('home'); // home, setup, reveal, play, voting, results
  const [players, setPlayers] = useState([]);
  const [category, setCategory] = useState('');
  const [impostorIndex, setImpostorIndex] = useState(null);
  const [secretWord, setSecretWord] = useState('');
  const [impostorWord, setImpostorWord] = useState('');
  const [currentRound, setCurrentRound] = useState(0);
  const [clues, setClues] = useState([]);
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  const startGame = (playerNames, selectedCategory, wordPair) => {
    const impostor = Math.floor(Math.random() * playerNames.length);
    
    setPlayers(playerNames);
    setCategory(selectedCategory);
    setImpostorIndex(impostor);
    setSecretWord(wordPair.secret);
    setImpostorWord(wordPair.impostor);
    setCurrentRound(0);
    setClues([]);
    setVotes({});
    setWinner(null);
    setGameState('reveal');
  };

  const resetGame = () => {
    setGameState('home');
    setPlayers([]);
    setCategory('');
    setImpostorIndex(null);
    setSecretWord('');
    setImpostorWord('');
    setCurrentRound(0);
    setClues([]);
    setVotes({});
    setWinner(null);
  };

  return (
    <div className="app">
      {/* Mostra il pulsante remake in tutte le schermate tranne home e setup */}
      {gameState !== 'home' && gameState !== 'setup' && (
        <RemakeButton onRestart={resetGame} />
      )}
      
      {gameState === 'home' && (
        <Home onStart={() => setGameState('setup')} />
      )}
      
      {gameState === 'setup' && (
        <Setup onBack={() => setGameState('home')} onStart={startGame} />
      )}
      
      {gameState === 'reveal' && (
        <WordReveal
          players={players}
          impostorIndex={impostorIndex}
          secretWord={secretWord}
          impostorWord={impostorWord}
          onComplete={() => setGameState('play')}
        />
      )}
      
      {gameState === 'play' && (
        <GamePlay
          players={players}
          currentRound={currentRound}
          clues={clues}
          onAddClue={(playerIndex, clue) => {
            const newClues = [...clues];
            newClues.push({ playerIndex, clue, round: currentRound });
            setClues(newClues);
          }}
          onNextRound={() => setCurrentRound(currentRound + 1)}
          onStartVoting={() => setGameState('voting')}
        />
      )}
      
      {gameState === 'voting' && (
        <Voting
          players={players}
          clues={clues}
          votes={votes}
          onVote={(voterIndex, votedIndex) => {
            const newVotes = { ...votes };
            newVotes[voterIndex] = votedIndex;
            setVotes(newVotes);
          }}
          onComplete={(votedPlayer, isImpostor) => {
            setWinner(isImpostor ? 'civili' : 'impostore');
            setGameState('results');
          }}
          impostorIndex={impostorIndex}
        />
      )}
      
      {gameState === 'results' && (
        <Results
          winner={winner}
          impostorIndex={impostorIndex}
          players={players}
          secretWord={secretWord}
          impostorWord={impostorWord}
          clues={clues}
          votes={votes}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  );
}

export default App;
