import * as Logger from 'bunyan';

export abstract class abstractTool {
    logger: Logger;
    constructor(){
        this.logger = Logger.createLogger({
            name: "pipelib",
            level: Logger.INFO,
            src: true
        }); 
    }
    get_name(): string {
        return "";
    }
}