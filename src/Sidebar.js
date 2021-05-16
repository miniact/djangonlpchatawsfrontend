import React, { useEffect, useState } from 'react'
import axios from './axios';
import { actionTypes } from './reducer';


import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { IconButton } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useStateValue } from './StateProvider';
import ChatInfo from './ChatInfo';
import { Link } from 'react-router-dom';

const Scontainer = styled.div`
display:flex;
flex-direction:column;
flex:0.25;
box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

const Sheader = styled.div`
    display:flex;
    padding:5px;
    align-items:center;
    justify-content:space-between;
   height:8%;
   

`

const Sbody = styled.div`
    background-color:#0000;
    height:85%;
`
const STab = styled.div`
background: linear-gradient(to bottom right, #04bca0 0%,  #47dca2 100%);
display:flex;
align-items:center;
justify-content:space-evenly;
height:5%;
width:100%;
`


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    green: {
        color: '#fff',
        backgroundColor: green[500],/*'#4caf50',*/
    },
}));

function Sidebar() {
    const classes = useStyles();

    const [Mychatlist, setMychatList] = useState([]);


    var [{ user, chatroomlist }, dispatch] = useStateValue();
    useEffect(() => {
        axios.get('chat/chatroom/').then(res => {
            console.log(res.data);

            dispatch({
                type: actionTypes.SET_CHATRL,
                chatroomlist: res.data,
            })
            console.log(chatroomlist);
            setMychatList(res.data);

        }).catch(err => alert(err.message));


    }, []);

    // var [{ chatroomlist: Mychatlist }, dispatch] = useStateValue();
    // console.log("mangya", Mychatlist)




    return (
        // container




        <Scontainer>
            <Sheader>
                <IconButton>
                    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=11" className={classes.large} />
                </IconButton>
                <h3> {user?.first_name}</h3> &nbsp;&nbsp;<small>{user?.start_date.slice(0, 10)}</small>
                <IconButton>
                    <MenuIcon />
                </IconButton>


            </Sheader>
            <STab>

                <IconButton>
                    <PersonAddIcon />
                </IconButton>

                <IconButton>
                    <InsertCommentIcon />
                </IconButton>
                <Link to="/myads">
                    <IconButton >
                        <PhotoLibraryIcon />
                    </IconButton>
                </Link>

            </STab>
            <Sbody>

                {

                    Mychatlist?.map(el => {
                        return (<Link to={`/rooms/${el.id}`}><ChatInfo key={el.id} imgsrc={el?.room_avatar} uname={el?.room_name} lastmsg={el.timestp.slice(0, 10)} /></Link>)

                    })


                }



                {/* <ChatInfo imgsrc="https://i.pravatar.cc/150?img=2" uname="Shubham Yadav" lastmsg="cp kar jaldi" />
                <ChatInfo imgsrc="https://i.pravatar.cc/150?img=3" uname="Suraj Yadav" lastmsg="ans bata" /> */}
            </Sbody>
        </Scontainer>
    )
}

export default Sidebar
