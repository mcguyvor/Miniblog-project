import User from './User'

export enum PostType {
    TEXT = 'text',
    LINK = 'link',
    IMAGE = 'image'
}

export type PostContentInfo = {
    detail1: string;
    detail2?: string;
    detail3?: string;
    detail4?: string;
    imgUrl1?: string;
    imgUrl2?: string;
    imgUrl3?: string;
    imgUrl4?: string;
}

export enum Reaction {
    LIKE = 'like',
    NONE = 'none'
}

export interface AuthInfo {
    canDelete: boolean;
    canEdit: boolean;
    canSeeProfile: boolean;
}

export default interface Post {
    post: any;
    _id: string;
    title: string;
    category: string;
    type: PostType;
    content: PostContentInfo;
    creator: User;
    likeInfo: {
        like: User[];
        isLiked?: boolean;
        count?: number;
    };
    commentInfo: {
        comments: Comment[];
        count?: number;
    };
    authInfo?: AuthInfo;
}
