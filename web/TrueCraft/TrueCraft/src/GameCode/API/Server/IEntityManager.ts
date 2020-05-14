import { IEntity } from "../Entities/IEntity";

export interface IEntityManager
{
    World: IWorld;
    SpawnEntity(entity: IEntity): void;
    DespawnEntity(entity: IEntity);
    GetEntityByID(id: int): IEntity;

    Update():void;
}