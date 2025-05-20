import styles from './Robot.module.css'
import RobotItem from './RobotItem'

interface RobotProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userList: any[]
}

function Robot({userList}: RobotProps) {
    return (
      <>
        <div className={styles.robotList}>
            {userList.map(r => <RobotItem key={r.id} id={r.id} name={r.name} email={r.email}>
              <button className={styles.buy}>Buy Me</button>
            </RobotItem>)}
        </div>
      </>
    )
}

export default Robot
