import config, {DiConfig} from './config';

export class Container {
    static instance: Container;
    configuration: DiConfig = config;

    static getInstance(): Container {
        if (!this.instance) {
            this.instance = new Container();
        }
        return this.instance;
    }

    getImplementationByInterface(interfaceName: string) {
        return this.configuration[interfaceName];
    }
}
