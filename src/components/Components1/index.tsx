//模块化引入样式
import styles from './comp1.module.scss'

export default function Comp1() {
  return (
    <div className={styles.box1}>
      <p>组件1</p>
    </div>
  )
}
