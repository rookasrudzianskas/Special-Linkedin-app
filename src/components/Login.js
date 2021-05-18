import React from 'react';
import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg" alt=""/>
                </a>

                <div>
                    <Join>Join now</Join>
                </div>
            </Nav>
        </Container>
    );
};

export default Login;

const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.div`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  & > a {
    width: 135px;
    height: 34px;
    
    
    @media(max-width: 768px) {
      padding: 0 5px;
      
    }
  }
`;

const Join = styled.div`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0,0 ,0 , 0.9);
    text-decoration: none;
    
  }
`
