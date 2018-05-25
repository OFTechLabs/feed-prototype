import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {ThisQuarterComponent} from './this-quarter.component';

export class AMThisQuarterModelFactory {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {

            const cards = model.moduleData.map(entry => entry.PlanningSet.filter(value => value.quarternumber === model.quarter)
                .map(dataPoint => {
                    return new DynamicCard(
                        ThisQuarterComponent,
                        Math.round(Math.random() * 100),
                        dataPoint,
                    );
                })).reduce((left, right) => left.concat(right), []);
            return new CardFactoryResponse(cards);
        }
    }
}
