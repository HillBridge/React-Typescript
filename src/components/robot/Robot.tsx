import robots from '../../mock/robot.json'
import RobotItem from './RobotItem'

function Robot() {
    return (
      <>
        {robots.map(r => <RobotItem key={r.id} id={r.id} name={r.name} email={r.email}/>)}
      </>
    )
}

export default Robot