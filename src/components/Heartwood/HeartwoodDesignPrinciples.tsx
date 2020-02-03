import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import humanity from '../../pages/heartwood/Heartwood-Design-Principles-Humanity.svg'
import physicality from '../../pages/heartwood/Heartwood-Design-Principles-Physicality.svg'
import augmentation from '../../pages/heartwood/Heartwood-Design-Principles-Augmentation.svg'
import flexibility from '../../pages/heartwood/Heartwood-Design-Principles-Flexibility.svg'
import './Heartwood.scss'

export default () => {

    return (
        <div className="hw-design-principles-wrapper">
            <div className="hw-design-principles-container">
                <img className="hw-design-principle-card" src={humanity} />
                <img className="hw-design-principle-card" src={physicality} />
                <img className="hw-design-principle-card" src={augmentation} />
                <img className="hw-design-principle-card" src={flexibility} />
            </div>
        </div>
    )
}
