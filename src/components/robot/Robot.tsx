import robots from './robot.json'
import styles from './Robot.module.css'
import RobotItem from './RobotItem'

function Robot() {
    return (
      <>
        <div className={styles.robotList}>
            {robots.map(r => <RobotItem key={r.id} id={r.id} name={r.name} email={r.email}/>)}
        </div>
      </>
    )
}

export default Robot
