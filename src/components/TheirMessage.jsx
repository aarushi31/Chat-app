const TheirMessage=({lastMessage,message})=>{
    const isFirstByUser=!lastMessage||lastMessage.sender.username!==message.sender.username;

    return(
        <div className="message-row">
            {
                isFirstByUser && (
                    <div className="message-avatar"
                    style={{backgroundImage:`url(${message?.sender?.avatar})`}}
                    />
                )
            }
            {message?.attachments?.length>0
            ?(
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{marginLeft:isFirstByUser?"4px":'48px'}}
            />
        ):(
            <div className="message" style={{float:'left',backgroundColor:'grey',marginLeft:isFirstByUser?"4px":'48px'}}>
            {message.text}
            
        </div>
        )
    }
        </div>
    )
}

export default TheirMessage;