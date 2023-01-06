import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, EditButton, CakeIcon, Followage } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>
          <ProfileData>
              <EditButton outlined> Editar Perfil </EditButton>
              <h1>Adriany</h1>
              <h2>@adriany</h2>
              <p>Developer as @avanade </p>

            <ul>
                <li>
                    <LocationIcon />
                    Recife
                </li>
                <li>
                    <CakeIcon />
                    02/10/1985
                </li>
            </ul>
            <Followage>
                <span>
                    Seguindo <strong> 94 </strong>
                </span>
                <span>
                    <strong> 72 </strong> Seguidores
                </span>
            </Followage>
          </ProfileData>
          <Feed />
      </Container>
  );
}

export default ProfilePage;