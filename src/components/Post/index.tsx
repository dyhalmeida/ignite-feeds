import { ProfileInfo } from "../ProfileInfo";
import { Comment } from '../Comment'
import styles from './Post.module.css'
import { publishedDateFormatted, publishedDateRelativeToNow } from "../../utils/date";
import { useState } from "react";

interface PostProps {
  author: {
    name: string,
    avatarUrl: string,
    role: string
  },
  contents: Array<{
    type: string,
    content: string
  }>,
  publishedAt: Date
}

export function Post({ author, contents, publishedAt }: PostProps) {

  const [comments, setComments] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState('')

  function handleNewCommentTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.currentTarget.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault()
    setComments((prevComments) => [...prevComments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentInvalid(e: React.InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Campo obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    const newComments = comments.filter(comment => comment !== commentToDelete)
    setComments(newComments)
  }

  const isNewCommentTextEmpty = !newCommentText

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <section>
          <ProfileInfo.Avatar src={author.avatarUrl} />
          <div>
            <ProfileInfo.Name>{author.name}</ProfileInfo.Name>
            <ProfileInfo.Occupation>{author.role}</ProfileInfo.Occupation>
          </div>
        </section>

        <time 
          title={publishedDateFormatted(publishedAt)} 
          dateTime={publishedAt.toISOString()}
        >
            {publishedDateRelativeToNow(publishedAt)}
        </time>
      </header>

      <section className={styles.postContent}>
        {contents.map(({ type, content }) => (
          type === 'paragraph' 
            ? (
              <p key={content}>{content}</p>
            )
            : (
              <p key={content}>
                <a target="_blank" href={content}>{content}</a>
              </p>
            )
        ))}
      </section>

      <form onSubmit={handleOnSubmit} className={styles.postForm}>
        <strong>Deixe seus comentário</strong>

        <textarea 
          placeholder="Deixe um comentário"
          onChange={handleNewCommentTextChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (<Comment key={comment} content={comment} onDeleteComment={deleteComment} />))}
      </div>
    </article>
  )
}