import BaseAPI from './BaseAPI'
import Post from '../../model/Post'

export enum FeedType {
    TOP = 'top',
    NEW = 'new'
}

enum Path {
    ALL = '/all',
    SEARCH = '/search'
}

interface FeedQueryString {
    page: number;
    limit: number;
    category?: string;
    sortType: FeedType;
}

export default class FeedAPI extends BaseAPI {
    private readonly BASE_PATH = '/feed'

    private buildQuery(type: FeedType, page: number, limit: number, category?: string): FeedQueryString {
        return {
            page,
            limit,
            category,
            sortType: type
        }
    }

    async getFeed(type: FeedType, page: number, limit: number, category?: string): Promise<Post[]> {
        await this.setAuthTokenOptional()
        const query = this.buildQuery(type, page, limit, category)
        const response = await this.get(this.BASE_PATH + Path.ALL, query)
        return this.validateResponse(response)
    }

    async search(keyword: string, page: number, limit: number): Promise<Post[]> {
        await this.setAuthTokenOptional()
        const response = await this.get(this.BASE_PATH + Path.SEARCH, { keyword, page, limit })
        return this.validateResponse(response)
    }
}
