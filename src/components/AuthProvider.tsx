import { Flex, Skeleton, Stack, useToast } from '@chakra-ui/react';
import { useState, useEffect, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useKeycloak } from '@react-keycloak/web';
import api from '../services/api' 


  export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const toast = useToast();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const router = useRouter();
  const [tokenKc, setTokenKc] = useState <any>()

  const handleLogout = () => {
    localStorage.clear();
    keycloak.logout();
  };

  const { keycloak } = useKeycloak();
  const checkAuthStatus = () => {
    if (!keycloak?.authenticated) {
      keycloak.login();
    }
  };
    const gettoken = async ()=>{
      if (!keycloak?.token) return;
    }

    const getUserProfile = async () => {
    try {
      if (!keycloak?.token) return;

      const { data: userProfile } = await api.get<UserProfile>('/auth/me', {
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
        },
      });
      localStorage.setItem('cmd-token', keycloak.token);
      
      
      localStorage.setItem('cmd-payload', JSON.stringify(userProfile));
      setUserProfile(userProfile);
    } catch (error) {
      console.error(error);
      // return handleLogout();
    }
  };



  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      {!keycloak?.authenticated && (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}

      {keycloak?.authenticated && children}
    </>
  );
};

export default AuthProvider;
