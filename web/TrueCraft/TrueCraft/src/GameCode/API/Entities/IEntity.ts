export interface IEntity
{
    EntityID: int;
    EntityManager: IEntityManager;
    World: IWorld;
    Update(entityManager: IEntityManager): void;
}