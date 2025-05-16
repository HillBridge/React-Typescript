import styles from './Robot.module.css'

interface RobotProps {
    id: number
    name: string
    email: string
}

function RobotItem({ id, name, email }: RobotProps) {
    return (
      <>
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
       </div>
      </>
    )
}
  

// const Robot: React.FC<RobotProps> = ({ id, name, aa }) => {
//     return (
//         <>
//           <div>
//             <img src={`https://robohash.org/${id}`} alt="robot" />
//                 <p>{name}</p>
//                 <p>{ aa}</p>
//          </div>
//         </>
//       )
// }
  
  export default RobotItem
