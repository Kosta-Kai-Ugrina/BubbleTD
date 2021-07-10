// Constants.js
import { Dimensions } from "react-native";
export default {
  MAX_WIDTH: Dimensions.get("screen").width,
  MAX_HEIGHT: Dimensions.get("screen").height,
  MARGIN_HORIZONTAL: 10,
  MARGIN_VERTICAL: 50,
  ENEMY_SIZE: 20,
  ENEMY_SPEED_START: 2,
  ENEMY_SPEED_MODIFIER: 2,
  MR_BUBBLE_SIZE_REDUCTION: 5,
  MR_BUBBLE_SIZE_INCREASE: 10,
};
