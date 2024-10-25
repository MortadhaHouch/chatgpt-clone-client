import { Method } from "./types";
export default async function fetchData(url:string,method:string,body:object,auth:string|null,setIsLoading:React.Dispatch<React.SetStateAction<boolean>>){
    try {
        let requestBody:string|null = null;
        switch (method) {
            case Method.GET:
            case Method.DELETE:
                requestBody = JSON.stringify(body);
                break;
            case Method.POST:
            case Method.PUT:
                requestBody = null;
                break;
            default:
                break;
        }
        const request = await fetch(url,{
            method,
            body:requestBody,
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${auth}`
            }
        })
        setIsLoading(true);
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }finally{
        setIsLoading(false);
    }
}