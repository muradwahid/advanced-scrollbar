import { isSet } from '../../../../utils/common';
// import './style.scss';
const Explosion = ({ size = 100, color ='#ffb347',duration=1.5,delay=0.05}) => {
    const styles = {
      ...(isSet(duration) && { "--bPl-spark-explosion-transition-duration": duration+'s' }),
      ...(isSet(size) && { "--bPl-spark-explosion-size": size + 'px' }),
      ...(isSet(color) && { "--bPl-spark-explosion-color": color })
    };
  return (
    <div style={styles} className="spark-explosion-container">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="explosion-particle"
          style={{
            transform: `rotate(${i * 24}deg)`,
            animationDelay: `${i * delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Explosion;