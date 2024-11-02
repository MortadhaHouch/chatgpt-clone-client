import { Method } from "./types";
export default async function fetchData(url:string,method:string,body:object|null,auth:string|null,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>){
    setIsLoading(true);
    try {
        let requestBody:string|null = null;
        switch (method) {
            case Method.GET:
            case Method.DELETE:
                requestBody = null;
                break;
                case Method.POST:
                case Method.PUT:
                requestBody = JSON.stringify(body);
                break;
            default:
                break;
        }
        const request = await fetch(process.env.NEXT_PUBLIC_REQUEST_URL+url,{
            method,
            body:requestBody,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${auth}`
            }
        })
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }finally{
        setIsLoading(false);
    }
}