import { Schema ,model} from "mongoose";

export interface Blog {
    name: string;
    biography: string;
    education: string;
    experience: string;
    imageUrl:string;
}

export const BlogSchema=new Schema<Blog>({
    name:{type: String,required:true},
    biography:{type:String,required:true},
    education:{type:String,required:true},
    experience:{type:String,required:true},
    imageUrl:{type:String,required:true}
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

export const BlogModel=model<Blog>('blog',BlogSchema);