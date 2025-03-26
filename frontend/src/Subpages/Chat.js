import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";


const Chat = () => {
return (
        <div class='container chat mt-5'>
            <div class='row'>
                <div class='col-12 col-lg-4 d-flex justify-content-center'>
                    <img src='/images/chat.jpg' alt='' />
                </div>
                <div class='col-12 col-lg-4 d-flex justify-content-center'>
                    <h3 class='chat-h3'>Talk to our career development specialist</h3>
                </div>
                <div class='col-12 col-lg-4 ps-5 mt-4'>
                    <div class='d-flex justify-content-center'>
                        <button class='chat-btn'>
                            <FaWhatsapp class='pe-1' />
                            Contact us
                        </button>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Chat