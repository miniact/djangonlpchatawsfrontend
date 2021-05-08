import React from 'react'
import styled from 'styled-components'

const OCcontainer = styled.div`
/* overflow: hidden;
transform: rotate(180deg); */
`

function OneChat({ uname, timestp, send, msg, isDoc, docUrl }) {
    return (<>

        {
            isDoc ?
                <OCcontainer className={`docmedia ${!send ? "" : "docmedia_receiver"}`}>
                    <img src={docUrl} width='200' alt="Media" />
                    {/* </div> */}
                </OCcontainer>

                : <OCcontainer className={`chat_message ${!send ? "" : "chat_receiver"}`}>
                    <span className="chat_name">{uname}</span>
                    {msg}
                    <span className="chat_timestemp">{timestp}</span>
                    {/* </p> */}
                </OCcontainer>


        }

    </>
    )
}

export default OneChat


