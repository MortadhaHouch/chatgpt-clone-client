'use client'
import { Loading } from "../../../utils/types";
import LottieReact from "lottie-react"
import error from "../../../assets/animations/Animation - error.json"
import loading from "../../../assets/animations/Animation - loading.json"
import login from "../../../assets/animations/Animation - login.json"
export default function Loader({
    type
}:{
    type:Loading
}) {
    switch (type) {
        case Loading.ERROR:
            return (
                <LottieReact animationData={error}/>
            )
        case Loading.LOADING:
            return(
                <LottieReact animationData={loading}/>
            )
        case Loading.LOGIN:
            return(
                <LottieReact animationData={login}/>
            )
    }
}
