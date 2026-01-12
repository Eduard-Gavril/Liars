import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import './GamePlay.css';

function GamePlay({ players, currentRound, clues, onAddClue, onNextRound, onStartVoting }) {
  const { language } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);
  
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [clueInput, setClueInput] = useState('');

  const handleAddClue = () => {
    if (clueInput.trim()) {
      onAddClue(currentPlayer, clueInput.trim());
      setClueInput('');
      
      if (currentPlayer < players.length - 1) {
        setCurrentPlayer(currentPlayer + 1);
      } else {
        setCurrentPlayer(0);
      }
    }
  };

  const handleNextRound = () => {
    setCurrentPlayer(0);
    onNextRound();
  };

  const currentRoundClues = clues.filter(c => c.round === currentRound);
  const allPlayersGaveClues = currentRoundClues.length === players.length;

  return (
    <div className="gameplay fade-in">
      <div className="gameplay-header">
        <div className="round-info">
          <h2>{t('round')} {currentRound + 1}</h2>
          <p>{t('turnOfPlayer')} <strong>{players[currentPlayer]}</strong></p>
        </div>
      </div>

      <div className="gameplay-content">
        {/* Input indizio */}
        <div className="card clue-input-card">
          <h3>💬 {t('yourClue')}</h3>
          <p className="hint-text">
            {t('clueInstruction')}
          </p>
          <div className="input-group">
            <input
              type="text"
              value={clueInput}
              onChange={(e) => setClueInput(e.target.value)}
              placeholder={t('cluePlaceholder')}
              maxLength={100}
              onKeyPress={(e) => e.key === 'Enter' && handleAddClue()}
            />
            <button 
              className="btn btn-primary"
              onClick={handleAddClue}
              disabled={!clueInput.trim()}
            >
              {t('send')}
            </button>
          </div>
        </div>

        {/* Indizi del round corrente */}
        {currentRoundClues.length > 0 && (
          <div className="card clues-card">
            <h3>📝 {t('cluesThisRound')}</h3>
            <div className="clues-list">
              {currentRoundClues.map((clue, index) => (
                <div key={index} className="clue-item">
                  <div className="clue-player">{players[clue.playerIndex]}</div>
                  <div className="clue-text">{clue.clue}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Azioni */}
        <div className="actions-card">
          {allPlayersGaveClues && (
            <div className="round-complete">
              <p>✅ {t('allGaveClues')}</p>
              <div className="actions-buttons">
                <button className="btn btn-secondary" onClick={handleNextRound}>
                  {t('anotherRound')}
                </button>
                <button className="btn btn-primary" onClick={onStartVoting}>
                  {t('startVoting')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Storico indizi precedenti */}
        {currentRound > 0 && (
          <div className="card history-card">
            <details>
              <summary>📜 {t('previousClues')}</summary>
              <div className="history-content">
                {Array.from({ length: currentRound }, (_, roundIndex) => {
                  const roundClues = clues.filter(c => c.round === roundIndex);
                  return (
                    <div key={roundIndex} className="history-round">
                      <h4>{t('round')} {roundIndex + 1}</h4>
                      <div className="clues-list">
                        {roundClues.map((clue, index) => (
                          <div key={index} className="clue-item small">
                            <div className="clue-player">{players[clue.playerIndex]}</div>
                            <div className="clue-text">{clue.clue}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamePlay;
