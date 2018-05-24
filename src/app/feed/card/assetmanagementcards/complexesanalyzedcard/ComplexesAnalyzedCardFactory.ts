import {AppModel} from '../../../../AppModel';
import {CardFactory} from '../../CardFactory';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {DynamicCard} from '../../DynamicCard';
import {ComplexesAnalyzedComponent} from './complexes-analyzed.component';

export class ComplexesAnalyzedCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        return new CardFactoryResponse(
            true,
            new DynamicCard(ComplexesAnalyzedComponent, {analyzedComplexes: 20, totalComplexes: 100})
        );
    }
}
