import { useState } from 'react';
const NotActiveButton = ({title,description}) => {
    const [isShown, setIsShown] = useState(false);
    return (
            <a className="btn collection__card not-published"
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={(e) => e.currentTarget !== document.activeElement? setIsShown(false): ''}
             onFocus={() => setIsShown(true) } 
             onBlur={ () => setIsShown(false) } 
          >
            <h3 className="card__title regular capitalize">{title}</h3>
            <p className="card__details light">{description}</p>
              {isShown && (
              <div className="not-published__overlay">
                 <h3>To be published soon</h3>
              </div>
            )}
          </a>
    )
}

export default NotActiveButton
