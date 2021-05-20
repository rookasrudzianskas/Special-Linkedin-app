import React from 'react';
import styled from "styled-components";
import {isCompositeComponent} from "react-dom/test-utils";
import CloseIcon from '@material-ui/icons/Close';
import ImageIcon from '@material-ui/icons/Image';
import MovieIcon from '@material-ui/icons/Movie';
import ShareIcon from '@material-ui/icons/Share';
import {useState } from "react";

const PostModal = (props) => {

    const [editorText, setEditorText] = useState("");

    const reset = (e) => {
        setEditorText("");
        props.handleClick(e)
    }

    console.log(editorText)
    return (
        <>
            { props.showModal === 'open' && (
        <Container>
            <Content>
                <Header>
                    <h2>Create a post</h2>
                    <button onClick={(event) => reset(event)}>
                       <CloseIcon />
                    </button>
                </Header>
                <SharedContent>
                    <UserInfo>
                        <img src="/images/user.svg" alt=""/>
                        <span>Name</span>
                    </UserInfo>
                    <Editor>
                    <textarea value={editorText} onChange={(e) => setEditorText(e.target.value)} placeholder="Add the post about anything?! 🚀" autoFocus={true}></textarea>
                    </Editor>
                </SharedContent>
                <SharedCreation>
                    <AttachAssets>
                        <AssetButton>
                            <button>
                            <ImageIcon />
                            </button>
                        </AssetButton>
                        <AssetButton>
                            <button>
                            <MovieIcon />
                            </button>
                        </AssetButton>
                    </AttachAssets>
                <ShareComment>
                        <button>
                    <AssetButton>
                        <ShareIcon />
                        Anyone
                    </AssetButton>
                </button>

                </ShareComment>

                    <PostButton>
                        Post
                    </PostButton>

                </SharedCreation>
            </Content>
        </Container>
            )}
        </>
    );
};


const Container = styled.div`
  position: fixed;
  // it entire browser window
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);

`

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 2%;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .MuiSvgIcon-root, img {
    height: 40px;
    width: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

`

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;

  svg, img {
    width: 48px;
    height: 48px;
    background-clip: border-box;
    border: 2px solid transparent;
    border-radius: 50%;

  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`
const AssetButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);


  .MuiSvgIcon-root {
    color: gray;
  }
`

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;

  ${AssetButton} {
    width: 40px;

  }
`

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  cursor: pointer;
  border-left: 1px solid rgba(0, 0, 0, 0.15);
  ${AssetButton} {
    .MuiSvgIcon-root {
      margin-right: 5px;
      cursor: pointer;
    }
  }
`
const PostButton = styled.div`
  min-width: auto;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: #0a66c2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #004182;
  }
`


const Editor = styled.div`
  padding: 12px 24px;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    outline: none;

  }

  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
    outline: none;
  }
`




















export default PostModal;

