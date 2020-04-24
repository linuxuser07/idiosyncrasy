// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from './layout'
// import colors from ".../common/colors"
// import fonts from "../common/colors"
import lightBulb from "../images/light.svg"

const HomeExtraElement = styled.div`
    background-color: #686868;
    // height: 720px;
    // left: 0px;

`
const FirstContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const BulbImageElement = styled.div`
    display: absolute;
    width: 15%;
    height: 331px;
    left: 92px;
    position: absolute;
    margin-top: 10px;
`
const TextElement = styled.div`
    display: absolute;
    width: 461px;
    height: 331px;
    left: 335px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 102.5%;
    color: #FFF7EB;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
const SeconContainer = styled.div`
    flex-direction: row;
`


const HomeExtra = ()  => (
    <HomeExtraElement>
        <InnerWrapper>
            <FirstContainer>
            <BulbImageElement>
                <img src={require('../images/light.svg')} alt="twitch logo"/>
            </BulbImageElement>
            <TextElement>
                Custom LIFX
                Stream Alerts
            </TextElement>
            </FirstContainer>
            {/* <br/>
            <SeconContainer>
            <TextElement>
                Handle Twitch
                Channel Points
                    Better
            </TextElement>
            <img src={require('../images/twitch.svg')} alt="twitch logo"/>
            </SeconContainer> */}
        </InnerWrapper>
    </HomeExtraElement> 
)

export default HomeExtra