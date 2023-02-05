import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { ProfileInfo } from '../ProfileInfo'
import styles from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1)
  }

  return (
    <section className={styles.comment}>
      <ProfileInfo.Avatar src='https://github.com/dyhalmeida.png' />

      <div className={styles.container}>
        
        <section className={styles.content}>

          <header>

            <div>
              <strong>Diego Almeida</strong>
              <time title="22 de Janeiro de 2023 às 16:07" dateTime="2023-01-22 16:07:00">Há 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Apagar comentário">
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>
        </section>

        <footer>
          <button
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>

      </div>

    </section>
  )
}