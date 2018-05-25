import {AppModel} from '../../../../AppModel';
import {DynamicCard} from '../../DynamicCard';
import {CardFactoryResponse} from '../../CardFactoryResponse';
import {CardFactory} from '../../CardFactory';
import {NewsCardComponent} from './news-card.component';

export class NewsCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        const cards = model.moduleData.map(entry => entry.NewsDataSet.map(dataPoint => {
            return new DynamicCard(
                NewsCardComponent,
                2,
                dataPoint
            );
        })).reduce((left, right) => left.concat(right), []);
        return new CardFactoryResponse(cards);
    }
}
