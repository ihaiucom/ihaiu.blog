// import { SectionData } from "../../../../JJSG/gameLibs/gow/map/SectionData";

export default interface SectionStage
{
    /** 副本数据 */
    sectionData: SectionData;

    build(sectionData: SectionData): void;
}