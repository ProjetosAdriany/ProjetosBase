import React from 'react';

import ProfilePage from '../ProfilePage';
import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button> 
                  <BackIcon />
              </button>
              <ProfileInfo>
                  <strong> Adriany </strong>
                  <span> 100 twitter </span>
              </ProfileInfo>
          </Header>
          <ProfilePage></ProfilePage>
          <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu>
      </Container>
  )
}

export default Main;