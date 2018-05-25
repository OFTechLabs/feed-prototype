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
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
                ' Quisque tempus tincidunt est sed placerat. ' +
                ' In vehicula, sem in pulvinar gravida, ipsum tellus vestibulum metus, nec ornare purus turpis et libero. ' +
                'Ut commodo neque urna, in malesuada libero tristique nec. ';

            return new CardFactoryResponse(
                true,
                new DynamicCard(ProgressCardComponent,
                    {
                        explanation: description,
                        progressValue: analyzedComplexes,
                        totalValue: model.complexes.length,
                    }));
        }

        return new CardFactoryResponse(
            false,
            null
        );
    }
}
