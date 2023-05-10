import fs from 'fs.promises';

export const actions ={
    uploadImage: async ({request})=>{
        const form = await request.formData();
        const pictureName = form.get("pictureName")??'';
        const pictureData = form.get("pictureData")??'';

        await fs.writeFile(`static/${pictureName.toString()}`,pictureData)
    }
}





