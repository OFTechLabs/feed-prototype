import {AppModel} from '../../../../AppModel';
import {CardFactory} from '../../CardFactory';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {DynamicCard} from '../../DynamicCard';
import {ComplexesAnalyzedComponent} from './complexes-analyzed.component';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';

export class ComplexesAnalyzedCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            return new CardFactoryResponse(
                [new DynamicCard(
                    ComplexesAnalyzedComponent,
                    Math.round(Math.random() * 100),
                    {
                        analyzedComplexes: analyzedComplexes,
                        totalComplexes: model.complexes.length
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}
