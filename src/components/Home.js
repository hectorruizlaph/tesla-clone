import React from 'react'
import styled from 'styled-components'
import Section from './Section'

import ModelS from '../assets/images/model-s.jpg'
import ModelY from '../assets/images/model-y.jpg'
import Model3 from '../assets/images/model-3.jpg'
import ModelX from '../assets/images/model-x.jpg'
import SolarPanel from '../assets/images/solar-panel.jpg'
import SolarRoof from '../assets/images/solar-roof.jpg'
import Accessories from '../assets/images/accessories.jpg'

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={ModelS}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={ModelY}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={Model3}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={ModelX}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in america"
                description="Money-back guarantee"
                backgroundImg={SolarPanel}
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />

            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roof"
                backgroundImg={SolarRoof}
                leftBtnText="Order now"
                rightBtnText="Learn More"
            />

            <Section
                title="Accessories"
                description=""
                backgroundImg={Accessories}
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`