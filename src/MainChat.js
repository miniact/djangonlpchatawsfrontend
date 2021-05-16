import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Pusher from 'pusher-js'



import { Avatar, IconButton, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import OneChat from './OneChat';
import { useParams, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import axios from './axios';
import SendRoundedIcon from '@material-ui/icons/SendRounded';


const MCcontainer = styled.div`
flex:0.75;
background-color:#f7f7f7;
display:flex;
flex-direction:column;

/* padding:20px; */
`

const MCheader = styled.div`
background-color:#ebebeb;
height:10%;
display:flex;
align-items:center;
/* justify-content:space-between; */
border-bottom:1px solid lightgray;

/* margin:20px; */
`
const Uname = styled.h3`
 padding-left:40px;
`

const LeftDiv = styled.div`
display:flex;
/* flex-direction:ro; */
align-items:center;
flex:1;
padding:20px;

`

const RightDiv = styled.div`
display:flex;
/* flex-direction:ro; */
align-items:center;
padding:20px;
justify-content:space-around;
min-width:100px;

`
const MCBody = styled.div`
     flex: 2;
    background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    /* overflow-x: hidden; */
/* overflow: scroll;
transform: rotate(180deg);
direction:rtl; */

/* overflow-x: hidden;
overflow-y: auto;
transform: rotate(180deg); */
overflow: auto;
display: flex;
  flex-direction: column-reverse;

    max-height:75vh;
    /* flex-direction: column-reverse; */
`
function MainChat({ imgsrc }) {
    const [{ user, chatroomlist }, dispatch] = useStateValue();
    const [roomName, setRoomName] = useState("Room Name");
    const { roomId } = useParams();
    const [postimage, setPostImage] = useState(null);
    const history = useHistory();


    // console.log("chatlist1: ", chatroomlist);
    // let temp = chatroomlist?.filter(el => el.id == roomId)[0]['room_name'];
    // console.log("temp", temp);
    //    const setRname =(name)=>{
    //     setRoomName(temp);

    //    } 


    const [ChatsList, setChatLists] = useState([]);
    const [ChatRoomMembers, setChatRoomMembers] = useState(null);


    useEffect(() => {
        axios.get(`chat/chatroom/${roomId}/members`).then(res => {
            console.log("members", res.data[0]);
            setChatRoomMembers(res.data[0]);

        }).then(() => {
            axios.get(`chat/chatsync/${roomId}`).then(res => {
                // console.log("chats: ", res.data);
                setChatLists(res.data);
                // console.log("mangesh ka log", ChatsList);
                // console.log("chats before pusher0: ", ChatsList);

            })
        }).catch(err => alert(err.message));



        // .catch(err => alert(err.message));



    }, [roomId]);

    console.log("chats before pusher0: ", ChatsList);

    useEffect(() => {
        // Pusher.logToConsole = true;

        var pusher = new Pusher('33929cdafd04f27fb3e6', {
            cluster: 'ap2'
        });

        var channel = pusher.subscribe(roomId);
        channel.bind('newmessage', function (data) {
            //alert(JSON.stringify(data));
            data.media_url = "http://localhost:8000" + data.media_url;

            console.log("chagedimageuri", data);
            setChatLists([...ChatsList, data]);
            console.log("chats after pusher: ", ChatsList);
        });
        // return () => {
        //     channel.unbind_all();
        //     channel.unsubscribe();
        // };
    }, [roomId, ChatsList])



    const [input, setInput] = useState("");

    const sendMessage = (e) => {

        e.preventDefault();
        // data= {"room_id"}
        axios.post('chat/chat/', {
            room_id: roomId,
            message: input,
            sent_by: user.id,
            // chat_type:'msg'


        }).then((res) => {
            console.log(res, 'data sent!! please reload');
            // window.location.reload(false);
            // setChatLists([...ChatsList, res.data])
        }).catch(err => alert(err.message));
        setInput("");
    }


    const handleChange = (e) => {
        if ([e.target.name] == 'image') {
            setPostImage({
                image: e.target.files,
            });
            console.log(e.target.files);
        }
        // if ([e.target.name] == 'title') {
        //     updateFormData({
        //         ...postData,
        //         [e.target.name]: e.target.value.trim(),
        //         ['slug']: slugify(e.target.value.trim()),
        //     });
        // } else {
        //     updateFormData({
        //         ...postData,
        //         [e.target.name]: e.target.value.trim(),
        //     });
        // }
    };

    const handleSubmit = () => {
        // e.preventDefault();
        if (!postimage) {
            alert("Please select Image first!");
            return null;
        }
        var formData = new FormData();
        // formData.append('title', postData.title);
        // formData.append('slug', postData.slug);
        // formData.append('author', 1);
        // formData.append('excerpt', postData.excerpt);
        // formData.append('content', postData.content);
        // fromData.append('sent_by', user.id);
        formData.append('media_url', postimage.image[0]);
        formData.append('room_id', roomId);
        formData.append('chat_type', 'media');
        formData.append('sent_by', user.id);

        console.log(formData);
        // fromData.append('chat_type', 'media');
        // 
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post(`chat/chat/upload`, formData, config).then((res) => {
            console.log(res, 'data sent!! pleas reload');
            // window.location.reload(false);
            res.data.media_url = "http://localhost:8000" + res.data.media_url;

            console.log("chagedimageuri", res.data);
            // setChatLists([res.data, ...ChatsList])
        }).catch(err => alert(err.message));
        // history.push({
        //     pathname: `/rooms/${roomId}`,
        // });
        // window.location.reload();
    };


    // console.log("chatlist: ", chatroomlist)
    // for (let room in chatroomlist) {
    //     console.log("room:", room.id);
    //     if (room.id == roomId) {
    //         setRoomName(room.room_name);
    //     }
    // }
    // let mainRoom = chatroomlist?.filter(el => el.id == roomId);
    // console.log("mainroom:", mainRoom[0]);
    // setRoomName(mainRoom[0] ? mainRoom[0]?.room_name : "Room");
    return (
        <MCcontainer>
            <MCheader>
                <LeftDiv>
                    <IconButton>
                        <Avatar alt="Remy Sharp" src={ChatRoomMembers?.room_avatar} />
                    </IconButton>
                    <Uname> {/*console.log("chatm", chatroomlist)*/} {ChatRoomMembers?.room_name}</Uname>
                </LeftDiv>
                <RightDiv>
                    <form>
                        <Button variant="contained"
                            component="label">
                            {/* <input
                            type="file"
                            hidden
                        /> */}
                            <AttachFileIcon />

                            <input
                                accept="image/*"
                                //   className={classes.input}
                                style={{ display: 'none' }}


                                id="post-image"
                                onChange={handleChange}
                                name="image"
                                type="file"
                            />

                        </Button>
                        <Button
                            // type="submit"
                            component="label"

                            variant="contained"

                            // className={classes.submit}
                            onClick={handleSubmit}
                        >
                            <SendRoundedIcon />
                        </Button>
                    </form>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </RightDiv>


            </MCheader>

            <MCBody>
                {/* {messages.map(message => ( */}
                {/* <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="hello!!" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="kal exam hai" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="ha hai" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="Notes send kar" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="1,2,3 chp padh le" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="OK!" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={false} />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={true} docUrl='https://i.pravatar.cc/200' />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={true} msg="hello!!" isDoc={true} docUrl='https://i.pravatar.cc/200' />
                    <OneChat uname="mangesh gupta" timestp="1:00 am" send={false} msg="hello!!" isDoc={true} docUrl='https://i.pravatar.cc/200' /> */}
                {

                    [...ChatsList].reverse()?.map(el => {
                        return (<OneChat uname={el.sender_name} key={el.id} timestp={el.timestp} send={el.sent_by == user.id} msg={el.message} isDoc={el.chat_type === "media"} docUrl={el.media_url} tags={el.tags} />)


                    })

                }


            </MCBody>
            <div className='chat_footer'>
                {/* <InsertEmoticonIcon /> */}
                <form className="formclass">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <SendIcon type="submit" onClick={sendMessage}> Send a Message</SendIcon>

                </form>

            </div>


        </MCcontainer >
    )
}

export default MainChat
