import { Outlet } from 'react-router-dom';
import { HeaderSearch } from '../components/Header/Header';
import { useState, useEffect} from 'react';
import { AuthContext } from '../auth/AuthContext';

export default function Root() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('athensHubUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser}}>
      <HeaderSearch />
      <Outlet />
    </AuthContext.Provider>
  );
}
