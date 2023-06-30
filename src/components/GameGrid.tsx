import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game, Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <Text>{error}</Text>;
  const loading =
    isLoading === true
      ? skeletons.map((skeleton) => (
          <GameContainer key={skeleton}>
            <GameCardSkeleton />
          </GameContainer>
        ))
      : null;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {loading}
      {data.map((game) => (
        <GameContainer key={game.id}>
          <GameCard game={game} />
        </GameContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
