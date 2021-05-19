import React from 'react';
import styled from "styled-components";

const RightSide = () => {
    return (
        <Container>
            <FollowCard>
                rightside
            </FollowCard>
        </Container>
    );
};

export default RightSide;



const Container = styled.div`
  grid-area: rightside;
`

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
`
