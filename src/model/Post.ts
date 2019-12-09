import User from './User'

export enum PostType {
    TEXT = 'text',
    LINK = 'link',
    IMAGE = 'image'
}

export type PostContentInfo = {
    link?: string;
    text?: string;
    imageInfo?: {
        image: string;
        width?: number;
        height?: number;
    };
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
    categoryId: number;
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
