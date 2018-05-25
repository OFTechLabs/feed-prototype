import { AppModel } from '../../../../AppModel';
import { DynamicCard } from '../../DynamicCard';
import { CardFactoryResponse } from '../../CardFactoryResponse';
import { AppAuthorizationUtil } from '../../../../AppAuthorizationUtil';
import { CardFactory } from '../../CardFactory';
import { ProgressCardComponent } from './progress-card.component';

export class ProgressCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {
            const analyzedComplexes = model.complexes.filter(complex => complex.isAnalyzed).length;

            const description =
                'For assetmanagement it is preferably if all complexes are analyzed, so far ' + analyzedComplexes + ' out of '
            + model.complexes.length + ' are analyzed. ';

            return new CardFactoryResponse(
                [new DynamicCard(ProgressCardComponent,
                    {
                        explanation: description,
                        progressValue: analyzedComplexes,
                        totalValue: model.complexes.length,
                    })]);
        }

        return new CardFactoryResponse(
            []
        );
    }
}
