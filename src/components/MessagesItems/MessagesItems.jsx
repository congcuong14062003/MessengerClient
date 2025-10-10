import Waveform from '../WaveSurfer/wave_surfer';
import { ImReply } from 'react-icons/im';
import './MessagesItems.scss';
import { useContext, useState } from 'react';
import Menu from '@mui/material/Menu';
import { MdPhoneCallback, MdPhoneMissed } from 'react-icons/md';
import { formatSecondsToTime } from '../../ultils/formatDate/format_date';
import PrimaryIcon from '../PrimaryIcon/PrimaryIcon';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import { IconButton } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { CiMenuKebab } from 'react-icons/ci';
import MenuItem from '@mui/material/MenuItem';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import ReplayIcon from '@mui/icons-material/Replay';
import { OwnDataContext } from '../../provider/own_data';
import HorizontalItem from '../HorizontalItem/HorizontalItem';
import ToolTip from '../ToolTip/ToolTip';
import { format } from 'date-fns';
function formatTimeFacebookStyle(time) {
    // Kiểm tra nếu `time` không hợp lệ hoặc không thể chuyển thành `Date`
    if (time) {
        const date = new Date(time);
        const now = new Date();

        const isToday = date.toDateString() === now.toDateString();
        const isYesterday = new Date(now - 86400000).toDateString() === date.toDateString();

        if (isToday) {
            return `Hôm nay ${format(date, 'HH:mm')}`;
        } else if (isYesterday) {
            return `Hôm qua ${format(date, 'HH:mm')}`;
        } else {
            return format(date, 'dd/MM/yyyy HH:mm');
        }
    }
    // if (!time || isNaN(new Date(time).getTime())) {
    //     return ''; // Trả về chuỗi rỗng hoặc giá trị mặc định nếu `time` không hợp lệ
    // }
}
function MessagesItems({
    handleDeleteMessage,
    handleDeleteMessageOwnSide,
    anchorEl,
    handleClose,
    className,
    message,
    type,
    nameFile,
    setShowReply,
    setIDReply,
    messenger_id,
    sender_id,
    receiver_id,
    reply_id,
    inputRef,
    handleClickCall,
    handleClick,
    time,
}) {
    const classes = `receiver_user_container ${className}`;
    const dataOwner = useContext(OwnDataContext);
    const [hoverItem, setHoverItem] = useState(false);
    const scrollToMessage = (messageId) => {
        const messageElement = document.querySelector(`.messenger-id-${messageId}`);

        if (messageElement) {
            // Lưu lại màu nền ban đầu
            const originalColor = messageElement.style.backgroundColor;
            const highlightColor = '#cbd400c2'; // Màu nhấn mạnh
            let isOriginalColor = false;

            // Cuộn đến phần tử
            messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Đặt interval để nhấp nháy
            const intervalId = setInterval(() => {
                messageElement.style.backgroundColor = isOriginalColor ? originalColor : highlightColor;
                isOriginalColor = !isOriginalColor;
            }, 250); // Mỗi lần nhấp nháy diễn ra sau 300ms

            // Sau 3 giây dừng nhấp nháy và quay lại màu cũ
            setTimeout(() => {
                clearInterval(intervalId);
                messageElement.style.backgroundColor = originalColor;
            }, 1500); // 3000ms = 3s
        }
    };

    return (
        message && (
            <div onMouseEnter={() => setHoverItem(true)} onMouseLeave={() => setHoverItem(false)} className={classes}>
                {reply_id && (
                    <div className="message_reply" onClick={() => scrollToMessage(reply_id)}>
                        <span>
                            {
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: document.querySelector(`.messenger-id-${reply_id}`)?.outerHTML ?? null,
                                    }}
                                />
                            }
                        </span>
                    </div>
                )}
                <div className={`content_row`}>
                    <div className={`messageses messenger-id-${messenger_id}`}>
                        {/* Nội dung tin nhắn */}
                        {type === 'text' && (
                            <div className="content_receiver">
                                <span>{message}</span>
                            </div>
                        )}
                        {type === 'audio' && (
                            <div className="content_receiver">
                                <Waveform audioUrl={message} />
                            </div>
                        )}
                        {type === 'image' && <img src={message} alt="content" />}
                        {type === 'video' && <video controls src={message} alt="content" />}
                        {type === 'link' && (
                            <p className="link_mesages" dangerouslySetInnerHTML={{ __html: message }}></p>
                        )}
                        {type?.includes('call') && (
                            <div className="content_receiver call_content">
                                <div className="call-container">
                                    {type?.includes('missed') && (
                                        <>
                                            <div className="missed-container">
                                                <PrimaryIcon
                                                    className="secondary"
                                                    icon={<MdPhoneMissed className="missed" />}
                                                />
                                                <p>Cuộc gọi nhỡ</p>
                                            </div>
                                        </>
                                    )}
                                    {type?.includes('accepted') && (
                                        <>
                                            <PrimaryIcon icon={<MdPhoneCallback className="accepted" />} />
                                            <div className="infor_call">
                                                <p>Cuộc gọi thoại</p>
                                                <b>{formatSecondsToTime(message)}</b>
                                            </div>
                                        </>
                                    )}
                                </div>
                                <ButtonCustom className="secondary" title="Gọi lại" onClick={handleClickCall} />
                            </div>
                        )}
                        {type === 'other' && (
                            <div className="file-container">
                                <a href={message} download>
                                    {nameFile}
                                </a>
                            </div>
                        )}
                    </div>
                    {hoverItem && (
                        <div className="action_messages">
                            <div className="delete_icon">
                                <ToolTip
                                    className="messages_tooltip"
                                    title={
                                        <div className="action_messages_detail">
                                            <ButtonCustom
                                                startIcon={<ReplayCircleFilledIcon />}
                                                title="Thu hồi ở phía bạn"
                                                className="primary"
                                                onClick={() => handleDeleteMessageOwnSide(messenger_id, receiver_id)}
                                            />
                                            {dataOwner?.user_id === sender_id && (
                                                <ButtonCustom
                                                    onClick={() => handleDeleteMessage(messenger_id, receiver_id)}
                                                    startIcon={<ReplayIcon />}
                                                    title="Thu hồi ở mọi người"
                                                    className="secondary"
                                                />
                                            )}
                                        </div>
                                    }
                                >
                                    <PrimaryIcon icon={<CiMenuKebab />} className="hover_icon" onClick={handleClick} />
                                </ToolTip>
                            </div>
                            <div
                                className="reply_icon_message"
                                onClick={() => {
                                    console.log('messsage_id: ', messenger_id);

                                    setShowReply(true);
                                    setIDReply(messenger_id);
                                    if (inputRef.current) {
                                        inputRef.current.focus();
                                    }
                                }}
                            >
                                <PrimaryIcon icon={<ImReply />} className="hover_icon" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="time_message">{formatTimeFacebookStyle(time)}</div>
            </div>
        )
    );
}

export default MessagesItems;
