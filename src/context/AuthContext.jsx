import { createContext, useContext, useState } from 'react';
const AuthContext=createContext();
export function AuthProvider({children}){
 const [user,setUser]=useState(JSON.parse(localStorage.getItem('hustlehub_user'))||null);
 const login=(data)=>{localStorage.setItem('hustlehub_user',JSON.stringify(data));setUser(data);};
 const logout=()=>{localStorage.removeItem('hustlehub_user');setUser(null);};
 return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>;
}
export function useAuth(){return useContext(AuthContext);} 