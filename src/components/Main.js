import React, {useEffect} from 'react';
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import {Chat} from "@material-ui/icons";
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { useState } from "react";
import PostModal from "./PostModal";
import {Button, IconButton} from "@material-ui/core";
import {connect} from "react-redux";
import { getArticleAPI } from "../actions";

const Main = (props) => {

    const [showModal, setShowModal ] = useState("close");

    useEffect(() => {
        // run once
        props.getArticles();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();

        if(e.target !== e.currentTarget) {
            return;
        }

        switch (showModal) {
            case "open":
                setShowModal("close");
                console.log("closed")


                break;
            case "close":
                setShowModal("open");
                console.log("fired")
                break;

            default:
                setShowModal("close");
                break;
        }
    };
    return (
        <Container>
            <ShareBox>
                <div>
                { props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} />
                    ) : (
                    <img src="/images/user.svg" alt=""/>
                )}
                    <button onClick={handleClick} disabled={props.loading ? true : false}>Start a post</button>
                </div>

                <div>
                    <button>
                        <IconButton>
                            <HomeIcon/>
                        </IconButton>
                        <span>Photo</span>
                    </button>

                    <button>
                    <IconButton>
                            <VideocamIcon />
                    </IconButton>
                        <span>Video</span>
                    </button>

                    <button>
                    <IconButton>
                        <EventIcon/>
                    </IconButton>
                        <span>Event</span>
                    </button>

                    <button>
                    <IconButton>
                        <DescriptionIcon/>
                    </IconButton>
                        <span>Write an article</span>
                    </button>

                </div>
            </ShareBox>
            <Content>
                {
                    props.loading && <AutorenewIcon />
                }

                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" alt=""/>
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                            </div>
                        </a>

                        <button>
                            <MoreHorizIcon />
                        </button>
                    </SharedActor>

                    <Description>
                        Description
                    </Description>

                    <SharedImg>
                        <a>
                            <img src="https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg" alt=""/>
                        </a>
                    </SharedImg>

                    <SocialCounts>
                        <li>
                            <Button>
                                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                                <span>
                                    76
                                </span>
                            </Button>
                        </li>
                        <li>
                            <a>
                                2 comments
                            </a>
                        </li>
                    </SocialCounts>
                <SocialActions>
                    <Button>
                        <ThumbUpAltIcon color="primary" />
                        <span>Like</span>
                    </Button>

                    <Button>
                        <ChatBubbleIcon color="primary" />
                        <span>Comments</span>
                    </Button>

                    <Button>
                        <ShareIcon color="primary" />
                        <span>Share</span>
                    </Button>
                    <Button>
                        <SendIcon color="primary" />
                        <span>Send</span>
                    </Button>

                </SocialActions>
                </Article>
            </Content>

            <PostModal showModal={showModal} handleClick={handleClick}/>
        </Container>
    );
};




const Container = styled.div`
  grid-area: main;
  
`

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20% );
  
`

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin:  0 0 8px;
  background: white;
  cursor: pointer;
  
  img {
    width: 34px;
    height: 34px;
  }
  
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
      
    }
    
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      
      img {
        width: 34px;
        border-radius: 50%;
        margin-right: 8px;
      }
      
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
      
      
      }
      &:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-bottom: 4px;
        
        button {
          img {
            margin: 0 4px 0 -2px;
          }
          
          span {
            color: #70b5f9;
            
          }
        }
      }
  }
`

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    
    img {
      width: 48px;
      height: 48px;
    }
    
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        
        &:nth-child(n+1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
          
        }
      }
    }
  }
  
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
  
  
`

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    
  }
`
const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      
    }
  }
`

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    
    
    @media(min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`


const Content = styled.div`
  text-align: center;
  transition: transform 2s ease-in-out;
  & > .MuiSvgIcon-root {
    width: 30px;
    transform: rotate(360deg);
  }
`;

const mapStateToProps = (state) => {
    return {
        loading: state.articleState.loading,
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
























