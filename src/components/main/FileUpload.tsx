"use client"
import { FiUploadCloud } from "react-icons/fi";
import fileReading from "../../../utils/fileReading";
import { ChangeEvent } from "react";
export default function FileUpload({
    setAvatar,
}:{
    setAvatar:React.Dispatch<React.SetStateAction<string>>
}) {
    return (
        <div className="w-[150px] h-[150px] relative flex justify-center items-center p-3 gap-2 hover:border-sky-200 border-2 border-dashed rounded-lg">
            <FiUploadCloud className="w-full h-full z-10 pointer-events-none"/>
            <input
                onChange={async(e:ChangeEvent<HTMLInputElement>)=>{
                    try {
                        if (e.target.files && e.target.files[0]) {
                            const userAvatar = await fileReading(e.target.files[0]);
                            if(userAvatar && typeof(userAvatar) === "string" ){
                                setAvatar(userAvatar);
                            }
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }}
                type="file" 
                name="file" 
                id="file" 
                className="w-full h-full opacity-0 absolute top-0 left-0"
            />
        </div>
    )
}
