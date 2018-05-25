import {AppModel, AvmDataSet, Module, User} from './AppModel';
import {AssetmanagementAppModelFactory} from './AssetmanagementAppModelFactory';

export class AVMAppModelFactory {

    public static create(): AppModel {
        return new AppModel(
            new User('Mark Rutte', 'markr', ['Taxationmanager']),
            [new Module('AM'), new Module('AVM'), new Module('TMS'), new Module('VGR')],
            AssetmanagementAppModelFactory.createComplexes(231),
            [
                new AvmDataSet(
                    'Bar Chart',
                    ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                    [
                        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
                        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
                    ],
                    'bar'
                )
            ]
        );
    }
}
