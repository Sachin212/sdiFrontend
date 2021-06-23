import React from 'react'
import sdiContactAbove from '../svgs/sdiContactAbove.svg'
import contactLeft from '../svgs/Contact/contactLeft.svg'
import contactMiddle from '../svgs/Contact/contactMiddle.svg'
import contactRight from '../svgs/Contact/contactRight.svg'
import contactMiddleBottom from '../svgs/Contact/contactMiddleBottom.svg'
import contactImage from '../svgs/Contact/contactImage.svg'
import contactBottom from '../svgs/Contact/contactBottom.svg'
function Contact(){
    return(
        <div>
            <img src={sdiContactAbove} alt="" id="sdi_contact_above" />
            <p className="sdi_join">Why Join SDI?</p>
            <div>
                <div id="sdi_contact_left"  >
                    <img src={contactLeft} alt="" />
                    <p>Something</p>
                </div>
                <div id="sdi_contact_middle" >
                    <img src={contactMiddle} alt="" />
                    <p>Something</p>
                </div>
                <div id="sdi_contact_right" >
                    <img src={contactRight} alt="" />
                    <p>Something</p>
                </div>
            </div>
            <img src={contactMiddleBottom} alt="" id="sdi_contact_middle_bottom" />
            <div>
                <img src={contactImage} alt="" id="sdi_contact_image" />
                <p className="contact_us">Contact Us</p>
                <img src={contactBottom} alt="" id="sdi_contact_bottom" />
            </div>
        </div>
    )
}

export default Contact;