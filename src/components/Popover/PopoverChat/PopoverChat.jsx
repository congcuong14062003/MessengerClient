import React, { useEffect, useState } from 'react';
import ChatItem from '../../ChatItem/ChatItem';
import Search from '../../Search/Search';
import Popover from '../Popover';
import './PopoverChat.scss';
import { API_GET_CONVERSATIONS } from '../../../API/api_server';
import { postData } from '../../../ultils/fetchAPI/fetch_API';
import { useSocket } from '../../../provider/socket_context';

function PopoverChat({ privateKey, currentChatId, handleClosePopover, inputRef }) {
    const [conversations, setConversations] = useState([]);

    const socket = useSocket();
    useEffect(() => {
        if (socket) {
            socket.on('updateMessage', () => {
                fetchConversations();
            });
        }
    }, [socket]);

    const fetchConversations = async () => {
        try {
            const response = await postData(API_GET_CONVERSATIONS, {
                private_key: privateKey,
            });
            if (response.status === true) {
                setConversations(response.data); // Gán dữ liệu từ API vào state
            }
        } catch (error) {
            console.error('Error fetching conversations:', error);
        }
    };
    useEffect(() => {
        fetchConversations();
    }, [privateKey]);


    return (
        <Popover inputRef={inputRef} title="Đoạn chat">
            <div className="search_chat_user">
                <Search iconSearch placeholder="Tìm kiếm trên messenger" />
            </div>
            <div className="chat_container">
                {conversations.map((conversation, index) => (
                    <ChatItem
                        key={index}
                        nameFile={conversation.name_file}
                        type={conversation.content_type}
                        onClick={handleClosePopover}
                        avatar={conversation.friend_avatar} // Avatar của bạn bè
                        name={conversation.friend_name} // Tên bạn bè
                        lastMessage={conversation.last_message} // Tin nhắn cuối
                        time={conversation.last_message_time} // Thời gian tin nhắn cuối
                        link={`/messages/${conversation.friend_id}`} // Đường dẫn đến cuộc trò chuyện
                        sender_id={conversation.sender_id} // ID người gửi
                        isActive={currentChatId === conversation.friend_id} // Kiểm tra nếu đây là cuộc trò chuyện hiện tại
                    />
                ))}
            </div>
        </Popover>
    );
}

export default PopoverChat;
