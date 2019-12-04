export interface DisplayImageInfo {
    image: string
}

export interface AnonymousInfo {
    displayName: string
}

export enum CurrentFeeling {
    Loneliness = 1,
    SocialProblems,
    Relationships,
    Depression
}

export default interface User {
    _id: string
    uid: string
    email: string
    displayName?: string
    age: number
    description: string
    displayImageInfo?: DisplayImageInfo 
    gender: Gender
    currentFeeling: CurrentFeeling[]
    anonymousInfo: AnonymousInfo
    isFriend?: boolean
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
    UNSPECIFIED = 'unspecified'
}