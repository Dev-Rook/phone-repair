import React, {useState} from 'react'
import Styles from "../Styles/Page-Section-Styles/Services.module.scss"

import ServiceData from "../Assets/Data/Services.json"

const Services = () => {
  const [data, setData] = useState(ServiceData)

  return (
    <div className={Styles.Section}>
      
      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Services