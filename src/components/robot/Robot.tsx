import { useContext } from 'react'
import { GlobalContext } from '../../context/global'
import styles from './Robot.module.css'
import RobotItem from './RobotItem'

interface RobotProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userList: any[]
}

function Robot({ userList }: RobotProps) {
  const {username} = useContext(GlobalContext)
    return (
      <>
        <div className={styles.robotList}>
            {userList.map(r => <RobotItem key={r.id} id={r.id} name={r.name} email={r.email}>
              <button className={styles.buy}>Buy Me</button>
              <p>作者: {username}</p>
            </RobotItem>)}
        </div>
      </>
    )
}

export default Robot
