declare module 'electron-next' {
    type Directories = {
        production: string;
        development: string;
    };

    export default function (directories: Directories | string, port?: number): Promise<void>;
}
