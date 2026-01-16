import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import './WordReveal.css';

function WordReveal({ players, impostorIndex, secretWord, impostorWord, onComplete }) {
  const { language } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);
  
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Timer automatico di 5 secondi quando la carta è rivelata
  useEffect(() => {
    if (!isRevealed) return;
    
    setCountdown(5); // Reset countdown ogni volta che si rivela una carta
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNext();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRevealed, currentPlayer]);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = () => {
    if (currentPlayer < players.length - 1) {
      setCurrentPlayer(currentPlayer + 1);
      setIsRevealed(false);
    } else {
      onComplete();
    }
  };

  const isImpostor = currentPlayer === impostorIndex;
  const word = isImpostor ? impostorWord : secretWord;
  const role = isImpostor ? t('impostorRole') : t('civil');

  return (
    <div className="word-reveal fade-in">
      <div className="reveal-header">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentPlayer + 1) / players.length) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          {t('playerOf', { current: currentPlayer + 1, total: players.length })}
        </p>
      </div>

      <div className="reveal-content">
        <div className="player-name-card card">
          <h2>{t('turnOf')}</h2>
          <h1 className="player-name">{players[currentPlayer]}</h1>
        </div>

        {!isRevealed ? (
          <div className="reveal-instructions card">
            <p>⚠️ {t('ensurePrivacy')}</p>
            <p>{t('readyReveal')}</p>
            <button className="btn btn-primary btn-large" onClick={handleReveal}>
              {t('revealWord')}
            </button>
          </div>
        ) : (
          <div className="word-card-container">
            <div className={`word-card card ${isImpostor ? 'impostor' : 'civil'}`}>
              <div className="role-badge">
                {isImpostor ? '🎭' : '👤'} {role}
              </div>
              <div className="word-display">
                <p className="word-label">{t('yourWord')}</p>
                <h1 className="word">{word}</h1>
              </div>
              
              <div className="countdown-timer">
                ⏱️ {countdown}s
              </div>
              
              {isImpostor && (
                <div className="impostor-hint">
                  <p>🤫 {t('impostorWarning')}</p>
                  <p>{t('impostorHint')}</p>
                </div>
              )}
              {!isImpostor && (
                <div className="civil-hint">
                  <p>🔍 {t('findImpostorHint')}</p>
                  <p>{t('civilHint')}</p>
                </div>
              )}
            </div>

            <button className="btn btn-primary btn-large" onClick={handleNext}>
              {currentPlayer < players.length - 1 ? t('nextPlayer') : t('startPlaying')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WordReveal;
