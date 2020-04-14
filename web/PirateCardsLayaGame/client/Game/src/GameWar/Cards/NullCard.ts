import CardBase from "./CardBase";

export default class NullCard extends CardBase
{

    getScore() {
        return 0
    }
    reduceScoreInNSeconds(t, e) {}
    increaseScoreInNSeconds(t, e) {}
    stepUpdate() {}
    isNegative() {
        return false;
    }
    getGoldValue() {
        return 0
    }
}