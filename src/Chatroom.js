import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
const Chatroom= () => {
	const [username, setUsername] = useState('')
	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}
	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
		}
	return (
		<ChatEngine
			height='100vh'
			userName='William'
			userSecret='William@1'
			projectID='
            16e6715d-3616-45cd-a9e7-3a70aeafb283'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}
export default Chatroom;