import { Post } from "./models"

export const resolvers = {
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