import BaseAPI from './baseAPI'
import NewsletterSubscriber from '../../model/NewsletterSubscriber'

enum Path {
    SUBSCRIPTION = '/subscription'
}

export default class NewsletterAPI extends BaseAPI {
    private readonly BASE_PATH = '/newsletter'

    async subscription(email: string): Promise<NewsletterSubscriber> {
        const response = await this.post(this.BASE_PATH + Path.SUBSCRIPTION, { email })
        return this.validateResponse(response)
    }
}
