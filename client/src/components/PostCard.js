
import React from 'react'
import PropTypes from 'prop-types'
import { Card, Image, Icon, Label, Button } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

export const PostCard = ({ post }) => {
  if (!post) {
    return null
  }

  const { likes, comments, username, likeCount, commentsCount, id, createdAt, body, commentCount } = post

  console.log({ comments, likeCount, likes, commentsCount })

  function onLikeClick () {
    console.log('Like me')
  }

  function onCommentPress () {
    console.log('Comment press')
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={onLikeClick}>
          <Button color='teal' basic>
            <Icon name='heart' />
          </Button>
          <Label as='a' basic color='teal' pointing='left'>
            {likeCount}
          </Label>
        </Button>
        <Button as='div' labelPosition='right' onClick={onCommentPress}>
          <Button color='teal' basic>
            <Icon name='comment' />
          </Button>
          <Label as='a' basic color='teal' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}
