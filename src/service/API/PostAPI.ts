import BaseAPI from './BaseAPI'
import Post from '../../model/Post'

export interface PostInfo {
    title: string;
}

export default class PostAPI extends BaseAPI {
    private readonly BASE_PATH = '/post'

    async createPost(postInfo: PostInfo): Promise<Post> {
        await this.setAuthToken()
        const response = await this.post(this.BASE_PATH, postInfo)
        if (this.isOkResponse(response)) {
            return response.body
        } else {
            throw Error(response.body.message)
        }
    }
}
