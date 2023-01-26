import { useState } from 'react';
import styles from './IconPicker.module.css';
import icons from './Icons';

export default function IconPicker({ setIcon, iconIndex = 0 }) {

  const [selectedIndex, setSelectedIndex] = useState(iconIndex);

  return (
    <>
      <label className='vertical-align'>
          Icon
          {/* <img 
            src={`/icons/outline/${icons[selectedIndex]}.svg`} 
            alt={icons[selectedIndex]} 
            className={styles.iconLabel}
          /> */}
        </label>
      <div className={styles.iconPicker}>
        {icons.map((icon, index) =>
          <div key={icon}
            className={`vertical-align ${styles.icon} ${index === selectedIndex ? styles.selected : ''}`}
            onClick={() => { setSelectedIndex(index); setIcon(icons[index]) } }>
            <img src={`/icons/outline/${icon}.svg`} alt={icon} />
          </div>
        )}
      </div>
    </>
  )
}
