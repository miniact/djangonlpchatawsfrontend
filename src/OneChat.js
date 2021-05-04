import React from 'react'

function OneChat({ uname, timestp, send, msg, isDoc, docUrl }) {
    return (<>

        {
            isDoc ?
                <div className={`docmedia ${!send ? "" : "docmedia_receiver"}`}>
                    <img src={docUrl} width='200' alt="Media" />
                </div>


                : <p className={`chat_message ${!send ? "" : "chat_receiver"}`}>
                    <span className="chat_name">{uname}</span>
                    {msg}
                    <span className="chat_timestemp">{timestp}</span>
                </p>


        }

    </>
    )
}

export default OneChat
