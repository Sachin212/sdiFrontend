import React from 'react'
import { Button } from 'semantic-ui-react'
import manAndPhone from '../svgs/manAndPhone.svg'

function Home(){
    return(
        <>
        <div className="sdi_home_">
            <div>Hello,</div>
            <br />
            <h1>This is SDI <br />
            How can we help you :)
            </h1>
            <Button color="teal">Ask Question</Button>
        </div>
        <img src={manAndPhone} className="sdi_image"  alt="" />
        </>
    )
}
export default Home;