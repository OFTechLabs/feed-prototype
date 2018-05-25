import {AppModel, Complex, Module, User} from './AppModel';

export class AssetmanagementAppModelFactory {

    public static create(): AppModel {
        return new AppModel(
            new User('Mark Rutte', 'markr', ['Assetmanager']),
            [new Module('AM'), new Module('AVM'), new Module('TMS'), new Module('VGR')],
            AssetmanagementAppModelFactory.createComplexes(231)
        );
    }

    public static createComplexes(numberOfComplex: number): Complex[] {
        const complexes = [];
        for (let i = 0; i < numberOfComplex; i++) {
            complexes.push(new Complex('C00' + i, (i % 2) === 0));
        }
        return complexes;
    }
}
