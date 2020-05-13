import React from 'react';
import {ReactComponent as Chainring } from '../images/chainring.svg'
import {ReactComponent as Wheel } from '../images/bike-wheel.svg'
import {ReactComponent as SickWhip } from '../images/sick-whip.svg'

const Icon2 = () => {
    return (
           <div>
               <Chainring className="clIcon" />
               <Wheel className="clIcon" />
               <SickWhip className="clIcon" />
           </div>

        
    )
}

export default Icon2;