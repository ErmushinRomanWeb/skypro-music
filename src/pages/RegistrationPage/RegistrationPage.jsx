import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const ContainerSignup = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
`;

const ModalButtonSignupEnt = styled.button`
  cursor: pointer;

  &:hover {
    background-color: #3F007D;
  }

  &:active {
    background-color: #271A58;
  }
`;

const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px/2));
  top: calc(50% - (439px/2));
  opacity: 1;
`;

const ModalFormLogin = styled.div`
  width: 366px;
  height: 439px;
  background-color: #FFFFFF;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 44px 47px 40px;
`;

const ModalInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #D0CECE;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
`;

const ModalButtonSignupEntLink = styled.a`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegistrationPage = () => {
  return (
    <Wrapper>
      <ContainerSignup>
        <ModalBlock>
          <ModalFormLogin>
            {/* Your component content here */}
            <ModalInput placeholder="Username" />
            <ModalInput type="password" placeholder="Password" />
            <ModalButtonSignupEnt>
              <ModalButtonSignupEntLink>Sign Up</ModalButtonSignupEntLink>
            </ModalButtonSignupEnt>
          </ModalFormLogin>
        </ModalBlock>
      </ContainerSignup>
    </Wrapper>
  );
};

export default RegistrationPage;