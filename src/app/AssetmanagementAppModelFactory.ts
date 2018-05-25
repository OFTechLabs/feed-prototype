import {AppModel, Complex, Module, Update, User} from './AppModel';

export class AssetmanagementAppModelFactory {

    public static create(): AppModel {
        return new AppModel(
            new User('Mark Rutte', 'markr', ['Assetmanager', 'Taxationmanager']),
            [new Module('AM'), new Module('AVM'), new Module('TMS'), new Module('VGR')],
            AssetmanagementAppModelFactory.createComplexes(231), null,
            2,
            [
                new Update(
                    'Updated property valuations',
                    'Valuations for your properties in your subportfolio have been updated',
                    ['Assetmanager', 'Taxationmanager'],
                    'AVM'
                ),
                new Update(
                    'Proposal Accepted',
                    'A proposal has been accepted by the portfoliomanager.',
                    ['Assetmanager'],
                    'AM'
                ),
            ]
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
