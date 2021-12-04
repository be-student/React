import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    //<div className={`${styles.wrapper} ${styles.inverted}`}>
    <div className={[styles.wrapper, styles.inverted].join(' ')}>
      안녕하세요, 저는 <span className="something">CSS module!</span>
    </div>
  );
};

export default CSSModule;
