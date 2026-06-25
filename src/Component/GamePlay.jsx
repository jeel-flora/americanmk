import { useParams } from 'react-router-dom';
import { gameList } from '../Component/Allgames';

function GamePlay() {
  const { gameId } = useParams();
  const game = gameList.find((g) => g.id === gameId);

  if (!game) return <div>Game Not Found</div>;

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <iframe
        src={game.gamePath}
        title={game.name}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
}

export default GamePlay;