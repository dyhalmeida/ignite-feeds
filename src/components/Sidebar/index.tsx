import { PencilLine } from 'phosphor-react'
import { ProfileInfo } from '../ProfileInfo'

import styles from './Sidebar.module.css'
import coverSidebar from '../../assets/cover-sidebar.png'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      
      <img className={styles.cover} src={coverSidebar} />

      <div className={styles.profile}>
        <ProfileInfo.Avatar src="https://github.com/dyhalmeida.png" />
        <ProfileInfo.Name>Diego Almeida</ProfileInfo.Name>
        <ProfileInfo.Occupation>Frontend Developer</ProfileInfo.Occupation>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}