import {Container} from './Container';

const diContainer: Container = Container.getInstance();

// NOTE: the annotation cannot read the interface from
// the declaring line and this is why we pass it as an arg
// Would be nice if it could though ;)
export function inject(interfaceName: string) {
    return (target: any, propertyKey: string) => {
        target[propertyKey] = diContainer.getImplementationByInterface(interfaceName);
    };
}
