import { Loading } from "../../../utils/types";
import LottieReact from "lottie-react"
import error from "../../../assets/animations/Animation - error.json"
import loading from "../../../assets/animations/Animation - loading.json"
import login from "../../../assets/animations/Animation - login.json"
import message_loading from "../../../assets/animations/atom-loader.json"
export default function Loader({
    type
}:{
    type:Loading
}) {
    switch (type) {
        case Loading.ERROR:
            return (
                <LottieReact animationData={error} className="w-[100vw] h-[100vh]"/>
            )
        case Loading.LOADING:
            return(
                <LottieReact animationData={loading} className="w-[100vw] h-[100vh]"/>
            )
        case Loading.LOGIN:
            return(
                <LottieReact animationData={login} className="w-[100vw] h-[100vh]"/>
            )
        case Loading.MESSAGE_LOADING:
            return <LottieReact animationData={message_loading} className="w-[100vw] h-[100vh]"/>
    }
}
