import { objPriorityType } from "../type";
// ф-я для определнения победителя
const getWinner = (player: string, computer: string) => {
  const objPriority: objPriorityType = {
    scissors: 2,
    paper: 1,
    rock: 0,
    lizard: -1,
    spock: -2,
  };
  const difference = objPriority[player] - objPriority[computer];
  console.log(difference);
  switch (difference) {
    case 1:
    case 3:
    case -2:
    case -4:
      return "player";
    case 2:
    case -1:
    case -3:
    case 4:
      return "computer";
    case 0:
      return "draw";
    default:
      return "draw";
  }
};
export default getWinner;
