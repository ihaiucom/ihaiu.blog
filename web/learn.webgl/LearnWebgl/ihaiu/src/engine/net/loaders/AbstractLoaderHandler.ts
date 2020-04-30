import { Loader } from "../Loader";

export class AbstractLoaderHandler
{
    loader: Loader;
    constructor(loader: Loader)
    {
        this.loader = loader;
    }
}