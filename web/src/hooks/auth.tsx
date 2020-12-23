import { createContext, useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  data: AuthState;
  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
}

/**
 * Criando o contexto incializando vázio
 */
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/**
 * O Componente de fato que irá encapsular os demais que pertecem
 * a esse contexto de autentificação
 */
const AuthProvider: React.FC = ({ children }) => {
  
  const [data, setData] = useState<AuthState>();

  useEffect(() => {
    const token = localStorage.getItem('@CotaPlix:token');

    if (token) {
      setData({token})
    } else {
      setData({} as AuthState)
    }

  }, [])
  

  /**
   * Login de fato (chamando api post "/sessions")
   */
  const sigIn = useCallback(async ({ email, password}) => {
    const response = await api.post<AuthState>('/auth', {
      email,
      password
    })

    const { token } = response.data;

    localStorage.setItem('@CotaPlix:token', token);

    api.defaults.headers.Authorization = `Bearer ${token}`;


    setData({ token });

  }, [])


  const sigOut = useCallback(() => {

    localStorage.removeItem('@CotaPlix:token');

    setData({ } as AuthState);
  }, [])

  return (
    /**
     * Value são todos  os dados globais ou funções pertecente a esse
     * componente que podem ser acessada pelos demais
     */
    <AuthContext.Provider value={{ sigIn, sigOut, data }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {  
    throw new Error('useAuth must be used within a Authentication')
  }

  return context;
}

export { AuthProvider, useAuth }
