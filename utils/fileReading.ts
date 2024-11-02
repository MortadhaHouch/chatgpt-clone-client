export default async function fileReading(file:File){
    return new Promise((resolve, reject) =>{
        const fileReader:FileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            if(fileReader.result){
                resolve(fileReader.result);
            }
        };
        fileReader.onerror = () => {
            reject(new Error("Error reading file"));
        };
    })
}