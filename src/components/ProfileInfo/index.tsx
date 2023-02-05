import styles from './ProfileInfo.module.css'

interface ProfileAvatarProps 
extends React.ImgHTMLAttributes<HTMLImageElement> {}
function Avatar(props: ProfileAvatarProps) {
  return (
    <img {...props} className={styles.profileAvatar} />
  )
}

interface ProfileNameProps {
  children: React.ReactNode
}
function Name({ children }: ProfileNameProps) {
  return <strong className={styles.profileName}>{children}</strong>
}


interface ProfileOccupationProps {
  children: React.ReactNode
}
function Occupation({ children }: ProfileOccupationProps) {
  return <strong className={styles.profileOccupation}>{children}</strong>
}


export const ProfileInfo = {
  Avatar,
  Name,
  Occupation
}
