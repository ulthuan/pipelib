export interface lifeCycleInterface {
    build(): void;
    test(): void;
    download_deps(): void;
    publish(): void;
}