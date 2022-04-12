import { useContext } from 'react';
import { AuthContext } from 'src/contexts/JWTAuthContext';

export const useAuth = () => useContext(AuthContext);
