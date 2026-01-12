import { useLanguage } from '../i18n/LanguageContext';
import { getTranslation } from '../i18n/translations';
import './Results.css';

function Results({ winner, impostorIndex, players, secretWord, impostorWord, clues, votes, onPlayAgain }) {
  const { language } = useLanguage();
  const t = (key, replacements) => getTranslation(language, key, replacements);
  
  const impostorWon = winner === 'impostore';
  
  // Calcola i conteggi dei voti
  const voteCounts = {};
  Object.values(votes).forEach(votedIndex => {
    voteCounts[votedIndex] = (voteCounts[votedIndex] || 0) + 1;
  });

  return (
    <div className="results fade-in">
      <div className={`results-header ${impostorWon ? 'impostor-win' : 'civil-win'}`}>
        <div className="winner-announcement">
          <h1 className="winner-emoji">{impostorWon ? '🎭' : '👥'}</h1>
          <h2 className="winner-text">
            {impostorWon ? t('impostorWin') : t('civilsWin')}
          </h2>
        </div>
      </div>

      <div className="results-content">
        {/* Rivelazione impostore */}
        <div className="card impostor-reveal">
          <h3>🎭 {t('impostorWas')}</h3>
          <div className="impostor-name">{players[impostorIndex]}</div>
          <div className="words-reveal">
            <div className="word-box civil">
              <p className="word-label">{t('civilWord')}</p>
              <p className="word-value">{secretWord}</p>
            </div>
            <div className="word-box impostor">
              <p className="word-label">{t('impostorWord')}</p>
              <p className="word-value">{impostorWord}</p>
            </div>
          </div>
        </div>

        {/* Risultati votazione */}
        <div className="card vote-results">
          <h3>🗳️ {t('voteResults')}</h3>
          <div className="vote-bars">
            {players.map((player, index) => {
              const voteCount = voteCounts[index] || 0;
              const percentage = voteCount > 0 ? (voteCount / players.length) * 100 : 0;
              const isImpostor = index === impostorIndex;
              
              return (
                <div key={index} className="vote-bar-container">
                  <div className="vote-bar-header">
                    <span className={`player-name ${isImpostor ? 'impostor-marker' : ''}`}>
                      {player} {isImpostor && '🎭'}
                    </span>
                    <span className="vote-count">{voteCount} {t('votes')}</span>
                  </div>
                  <div className="vote-bar-track">
                    <div 
                      className={`vote-bar-fill ${isImpostor ? 'impostor' : ''}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Storico indizi */}
        <div className="card clues-history">
          <h3>📝 {t('allCluesHistory')}</h3>
          <div className="all-player-clues">
            {players.map((player, index) => {
              const playerClues = clues.filter(c => c.playerIndex === index);
              const isImpostor = index === impostorIndex;
              
              return (
                <div key={index} className={`player-section ${isImpostor ? 'impostor-section' : ''}`}>
                  <div className="player-section-header">
                    <strong>{player}</strong>
                    {isImpostor && <span className="impostor-badge">{t('impostorBadge')}</span>}
                  </div>
                  <div className="player-section-clues">
                    {playerClues.map((clue, cIndex) => (
                      <div key={cIndex} className="clue-bubble">
                        <span className="clue-round">{t('round')} {clue.round + 1}:</span>
                        {clue.clue}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Azioni */}
        <div className="results-actions">
          <button className="btn btn-primary btn-large" onClick={onPlayAgain}>
            {t('newGame')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
