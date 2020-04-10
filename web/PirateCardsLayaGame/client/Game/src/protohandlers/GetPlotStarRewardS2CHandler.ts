import Game from '../Game';
import GetPlotStarRewardS2C = proto.GetPlotStarRewardS2C;
var GetPlotStarRewardS2CHandler = function(msg: GetPlotStarRewardS2C)
{
    if(!msg.error)
    {
        let chapterData = Game.moduleModel.section.getChapterDataById(msg.chapterGradeId);
        chapterData.plotChapterGradeIdList.push(msg.chapterLevel);
    }
}            
export {GetPlotStarRewardS2CHandler}
