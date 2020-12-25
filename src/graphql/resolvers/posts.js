import { AuthenticationError, UserInputError } from 'apollo-server'
import { Post } from '../models'
import checkAuth from '../../utils/checkAuth'

export default {
  Query: {
    async getPosts () {
      const posts = await Post.find().sort({ createdAt: -1 })

      return posts
    },
    async getPost (_, { postId }) {
      const post = await Post.findById(postId)
      if (post) {
        return post
      }
      return new UserInputError('Post Not found   ')
    }
  },
  Mutation: {
    async createPost (_, { body }, context) {
      const user = checkAuth(context)

      const newPost = new Post({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
      })

      return newPost.save()
    },
    async deletePost (_, { postId }, context) {
      try {
        const user = checkAuth(context)
        const foundPost = await Post.findById(postId)

        if (!foundPost) {
          throw new UserInputError('Post Not Found!')
        }

        if (foundPost.username === user.username) {
          await foundPost.deleteOne()
          return 'Post deleted successfuly!'
        }

        throw new AuthenticationError('Forbidden!')
      } catch (error) {
        throw new Error(error)
      }
    },
    likePost: async (_, { postId }, context) => {
      const { username } = checkAuth(context)
      try {
        const foundPost = await Post.findById(postId)

        if (!foundPost) {
          return new UserInputError('Post Not Found!')
        }

        if (foundPost.username !== username) {
          return new AuthenticationError('Forbidden')
        }

        const userLike = foundPost.likes.find(like => like.username === username)

        if (userLike) {
          foundPost.likes = foundPost.likes.filter(like => like.username !== username)
        } else {
          foundPost.likes.push({ username, createdAt: new Date().toISOString() })
        }

        return foundPost.save()
      } catch (err) {
        return new UserInputError(err)
      }
    }
  }
}
