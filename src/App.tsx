import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import { Post } from './components/Post'
import { posts} from './mock/posts'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              contents={post.contents}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}
