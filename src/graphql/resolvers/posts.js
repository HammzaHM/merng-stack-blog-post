import { Post } from "../models"

export default  {
    Query: {
        async getPosts () {
           try {
               const posts = await Post.find()

               return posts
           } catch (err) {
               throw err
           }   
       }
   }
}