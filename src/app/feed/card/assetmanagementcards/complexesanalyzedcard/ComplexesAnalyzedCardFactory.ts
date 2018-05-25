import {AppModel} from '../../../../AppModel';
import {CardFactory} from '../../CardFactory';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {DynamicCard} from '../../DynamicCard';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {ProgressCardComponent} from '../progress-card/progress-card.component';

export class ComplexesAnalyzedCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                [new DynamicCard(
                    ProgressCardComponent,
                    1,
                    {
                        title: 'Complexes Analyzed',
                        explanation: 'Try and analyze all complexes every year.',
                        progressValue: analyzedComplexes,
                        totalValue: model.complexes.length,
                        action1: 'View Unanalyzed Complexes',
                        action2: 'View C0025',
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}
