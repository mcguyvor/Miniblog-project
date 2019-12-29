import NewsletterSubscriber from '../model/NewsletterSubscriber'
import NewsletterAPI from './api/NewsletterAPI'

export default class NewsletterService {
    private readonly newsletterAPI = new NewsletterAPI()

    async subscribe(email: string): Promise<NewsletterSubscriber> {
        return this.newsletterAPI.subscription(email)
    }
}
