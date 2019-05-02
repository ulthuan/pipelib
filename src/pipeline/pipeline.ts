import { lifeCycleInterface } from "../tools/lifecycle/interface";

export abstract class Pipeline {
    private lifeCycleTool: lifeCycleInterface;
    constructor(
        lifecycleTool: lifeCycleInterface
    ) {
        this.lifeCycleTool = lifecycleTool
    }
    build(): void {
        this.lifeCycleTool.download_deps()
        this.lifeCycleTool.build()
        this.lifeCycleTool.test()
        this.lifeCycleTool.publish()
    }
    abstract deploy(): void;
}