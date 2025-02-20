import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

import { inject, injectable } from "tsyringe";

@injectable()
export class LoggingUtil
{

    constructor(
        @inject("WinstonLogger") private logger: ILogger)
    {
    }

    public green(message: string, enableDebug: boolean) : void
    {
        if ( enableDebug ) this.logger.log(`ContainersAreContainers: ${message}`, LogTextColor.GREEN);
    }

    public cyan(message: string, enableDebug: boolean) : void
    {
        if ( enableDebug ) this.logger.log(`ContainersAreContainers: ${message}`, LogTextColor.CYAN);
    }

    public error(message: string) : void
    {
        this.logger.error(`SeasonalWeatherAtHome: ${message}`);
    }

}