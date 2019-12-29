import FeedAPI, { FeedType } from './API/FeedAPI'
import Post from '../model/Post'

export default class FeedService {
    private feedAPI = new FeedAPI()

    async getFeedNew(page: number = 1, limit: number = 20, category?: string): Promise<Post[]> {
        const feed = await this.feedAPI.getFeed(FeedType.NEW, page, limit, category)
        return feed
    }

    async getFeedTop(page: number = 1, limit: number = 20, category?: string): Promise<Post[]> {
        const feed = await this.feedAPI.getFeed(FeedType.TOP, page, limit, category)
        return feed
    }

    async searchFeed(keyword: string, page: number = 1, limit: number = 20): Promise<Post[]> {
        return this.feedAPI.search(keyword, page, limit)
    }
}
