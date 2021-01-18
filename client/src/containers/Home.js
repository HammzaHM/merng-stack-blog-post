import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Grid } from 'semantic-ui-react'
import { PostCard } from '../components'

const POSTS = gql`
  {
    getPosts {
      id
      username
      body
      createdAt
      likeCount
      commentCount
      likes {
        id
        username
      }
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`

export function Home () {
  const { data, loading, error } = useQuery(POSTS)

  if (error) {
    return null
  }

  if (loading) {
    return <h1>loading....</h1>
  }

  const posts = data.getPosts

  return (
    <Grid columns={3}>
      <Grid.Row className='page-title'>
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {
        loading
          ? (<h1>loading...</h1>)
          : (
              posts && posts.map(post =>
                (
                  <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                    <PostCard post={post} />
                  </Grid.Column>
                )
              )
            )
        }
      </Grid.Row>
    </Grid>
  )
}
