const TheirMessage = ({lastMessage, message}) =>{
    const isFirstMessagByUser=!lastMessage || lastMessage.sender.username !== message.sender.username;

    return(

        <div className="message-row">
            {isFirstMessagByUser &&(
                <div
                className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}

                />
            )}
              {message?.attachments?.length > 0
        ? (
            <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{marginLeft: isFirstMessagByUser?'4px':'48px'}}

            />
        ) :(
            <div className="message" style={{float:'left',backgroundColor:'#CABCDC',marginLeft: isFirstMessagByUser?'4px':'48px'}}>
                     {message.text}
             </div>
        )
        }
        </div>
    )
}

export default TheirMessage