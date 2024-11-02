type SubscriptionType = {
    title:string
    description:string
    features:string[]
}
enum Loading {
    ERROR="ERROR",
    LOGIN="LOGIN",
    LOADING="LOADING",
    MESSAGE_LOADING = "MESSAGE_LOADING"
}
enum TabType {
    HOME,
    INBOX,
    PROFILE,
    SETTINGS,
    SEARCH,
    DISCUSSIONS,
    WORKSPACES
}
type User = {
    firstName:string
    lastName:string
    email:string
    avatars:string
}
type Post = {
    content:string
    author:User
    replies:Comment[]
    likes:number
    dislikes:number
}
type Comment = {
    content:string
    author:User
    replies:Comment[]
    likes:number
    dislikes:number
}
type DashboardComponentType = {
    content:string|JSX.Element
    description:string
    component:JSX.Element
    stats?:number
}
enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export type {SubscriptionType,Post,Comment,User,DashboardComponentType}
export {Loading,TabType,Method}