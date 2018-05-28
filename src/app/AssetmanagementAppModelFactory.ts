import {AppModel, Complex, Module, Update, User, Warning} from './AppModel';

export class AssetmanagementAppModelFactory {

    public static create(): AppModel {
        return new AppModel(
            new User('Mark Rutte', 'markr', ['Assetmanager']),
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
            ],
            [
                new Warning(
                    'Invalid real estate data',
                    'Some of the datasets contain invalid data, please try and resolve all errors.',
                    ['Go to invalid datasets'],
                    ['Taxationmanager'],
                    'AVM'
                ),
                new Warning(
                    'Calculation failed',
                    'A calculation has failed, the service desk has already been notified, ' +
                    'we will get in touch when the issue has been resolved.',
                    [],
                    ['Assetmanager'],
                    'AM'
                ),
            ],
            null
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
