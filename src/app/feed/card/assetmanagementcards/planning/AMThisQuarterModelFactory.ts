import {AppModel} from '../../../../AppModel';
import {AppAuthorizationUtil} from '../../../../AppAuthorizationUtil';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {ThisQuarterComponent} from './this-quarter.component';

export class AMThisQuarterModelFactory {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {

            if (model.quarter === 1) {
                return new CardFactoryResponse(
                    [new DynamicCard(
                        ThisQuarterComponent,
                        Math.round(Math.random() * 100),
                        {
                            title: 'Quarterly Tasks',
                            quarter: 'Q1',
                            highlights: [
                                'Finalize the year-transition so we can combine the past policy with the current properties.',
                                'Start analyzing the goals & properties.',
                            ],
                            actions: ['Year transition', 'Goals', 'Analyze'],
                            dismiss: () => {
                            }
                        })]);
            }
            if (model.quarter === 2) {
                return new CardFactoryResponse(
                    [new DynamicCard(
                        ThisQuarterComponent,
                        Math.round(Math.random() * 100),
                        {
                            title: 'Quarterly Tasks',
                            quarter: 'Q2',
                            highlights: [
                                'Finalize all your policy, make sure all properties have the correct policy.',
                                'Make a proposal for your subportfolio.'
                            ],
                            actions: ['Properties missing policy', 'Make a proposal'],
                            dismiss: () => {
                            }
                        })]);
            }
            if (model.quarter === 4) {
                return new CardFactoryResponse(
                    [new DynamicCard(
                        ThisQuarterComponent,
                        Math.round(Math.random() * 100),
                        {
                            title: 'Quarterly Tasks',
                            quarter: 'Q4',
                            highlights: [
                                'Start the year transition',
                                'Start strategy for next year',
                            ],
                            actions: ['Year transition', 'Formulate strategy'],
                            dismiss: () => {
                            }
                        })]);
            }


        }

        return new CardFactoryResponse(
            []
        );
    }
}
