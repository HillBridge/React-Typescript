import styles from './Robot.module.css';

// 直接对函数的参数进行类型定义
interface RobotProps {
  id: number;
  name: string;
  email: string;
  children: React.ReactNode;
}

function RobotItem({
  id,
  name,
  email = 'no email provided',
  children,
}: RobotProps): React.ReactElement {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.cardImageContainer}>
          <img src={`https://robohash.org/${id}`} alt="robot" width={350} />
        </div>
        <h2>{name}</h2>
        <p>{email}</p>
        {children}
      </div>
    </>
  );
}

// React.FC<P> 对函数式组件进行类型定义

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

export default RobotItem;
