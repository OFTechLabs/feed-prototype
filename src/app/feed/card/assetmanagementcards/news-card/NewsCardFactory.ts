import { AppModel } from '../../../../AppModel';
import { DynamicCard } from '../../DynamicCard';
import { CardFactoryResponse } from '../../CardFactoryResponse';
import { AppAuthorizationUtil } from '../../../../AppAuthorizationUtil';
import { CardFactory } from '../../CardFactory';
import { NewsCardComponent } from './news-card.component';

export class NewsCardFactory implements CardFactory<AppModel> {
    create(model: AppModel): CardFactoryResponse {
        if (AppAuthorizationUtil.hasModule(model, 'AM')
            && AppAuthorizationUtil.hasRole(model, 'Assetmanager')) {

            return new CardFactoryResponse([
                new DynamicCard(
                    NewsCardComponent,
                    {
                        article: {
                            title: 'Interactieve conjunctuurgrafiek',
                            date: '2018-05-17T09:03:01+0200',
                            teaser: 'Conjunctuurcycli zijn een van de belangrijkste kenmerken (‘stylized facts’) die aangeven hoe assetprijzen, rentes, volatiliteiten en macro-economische variabelen zich in de realiteit gedragen.',
                            imageUrl: 'http://insights.ortec-finance.com/-/media/OF8/Insights/business-cycle-outlook-thumb.ashx?mh=450&la=nl-NL&h=321&w=450&mw=450&hash=65E2A11D2101B87B5E917FA1D3A560CBEBE90366',
                        },
                        readMoreLink: 'http://insights.ortec-finance.com/nl-nl/2018/02/16/interactieve-conjunctuurgrafiek',
                    }
                )]
            );
        }

        return new CardFactoryResponse(
            null,
        );
    }
}
