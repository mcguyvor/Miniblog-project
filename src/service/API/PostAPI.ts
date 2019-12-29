import BaseAPI from './baseAPI'
import Post from '../../model/Post'
import { Reaction } from '../../model/Post'

export interface PostInfo {
    title: string;
}

export default class PostAPI extends BaseAPI {
    private readonly BASE_PATH = '/post'

    async createPost(postInfo: PostInfo): Promise<Post> {
        await this.setAuthToken()
        const response = await this.post(this.BASE_PATH, postInfo)
        return this.validateResponse(response)
    }

    async getPost(id: string): Promise<Post> {
        await this.setAuthTokenOptional()
        const response = await this.get(this.BASE_PATH + `/${id}`)
        return this.validateResponse(response)
    }

    async reactPost(id: string, reaction: Reaction): Promise<Post> {
        await this.setAuthToken()
        const response = await this.put(this.BASE_PATH + `/${id}/reaction`, { reaction })
        return this.validateResponse(response)
    }

    async commentPost(id: string, text: string): Promise<Post> {
        await this.setAuthToken()
        const response = await this.post(this.BASE_PATH + `/${id}/comment`, { text })
        return this.validateResponse(response)
    }
}
