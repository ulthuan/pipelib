
import {abstractTool} from "../abstractTool";
import {lifeCycleInterface} from "./interface";

import {spawn} from 'child_process';

export class Maven extends abstractTool implements lifeCycleInterface{
    constructor() {
        super()
    }
    build(): void {
        this.logger.info("Launch Process");
        const child = spawn('pwd');
        child.stdout.on('data', (data) => {
            this.logger.debug(`child stdout:\n${data}`);
          });
        child.on('exit',  (code, signal) => {
            this.logger.debug('child process exited with ' +
                    `code ${code} and signal ${signal}`);
            this.logger.info("End process");
        });
    }    
    test(): void {
        throw new Error("Method not implemented.");
    }
    download_deps(): void {
        throw new Error("Method not implemented.");
    }
    publish(): void {
        throw new Error("Method not implemented.");
    }
}