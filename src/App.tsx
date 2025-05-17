
import styles from './App.module.css'
import Robot from './components/robot/Robot'
function App() {
  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>Robot Friends</h1>
        <Robot />
     </div>
    </>
  )
}

export default App
