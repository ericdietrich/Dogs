import React from 'react';
import {UserContext} from '../../UserContext'
import PhotoCommetsForm from './PhotoCommetsForm';
import styles from './PhotoComments.module.css';

const PhotoCommets = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const {login} = React.useContext(UserContext)

  return (
    <>
      <ul className={StyleSheet.comments}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}: </b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommetsForm id={props.id} setComments={setComments} /> }
    </>
  )
}

export default PhotoCommets