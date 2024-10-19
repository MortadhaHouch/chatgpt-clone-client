type SubscriptionType = {
    title:string
    description:string
    features:string[]
}
enum Loading {
    ERROR="ERROR",
    LOGIN="LOGIN",
    LOADING="LOADING"
}
export type {SubscriptionType}
export {Loading}