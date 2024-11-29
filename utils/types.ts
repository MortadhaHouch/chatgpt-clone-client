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
    HOME="HOME",
    INBOX="INBOX",
    PROFILE="PROFILE",
    SETTINGS="SETTINGS",
    SEARCH="SEARCH",
    DISCUSSIONS="DISCUSSIONS",
    WORKSPACES="WORKSPACES",
    BIN="BIN"
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
type Discussion = {
    messages:Message[],
    createdAt:Date,
    name:string
    id:string
}
type Message = {
    from:User|"BOT",
    content:string,
    createdAt:Date
    isDeleted:boolean
}
type Workspace = {
    name: string,
    createdAt:Date,
    isDeleted:boolean,
    discussions:Discussion[]
    id:string
}
enum Action {
    CREATE_POST,
    CREATE_DISCUSSION,
    DELETE_DISCUSSION,
    GET_DISCUSSION,
    EDIT_DATA_DISPLAY
}
export type {SubscriptionType,Post,Comment,User,DashboardComponentType,Discussion,Workspace,Message}
export {Loading,TabType,Method,Action}