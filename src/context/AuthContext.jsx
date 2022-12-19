import { createContext, useState } from "react"

export const AuthContext=createContext()
function AuthContextProvider({children}){
    const [isAuth,setisAuth]=useState(false)
    const toggle=()=>{
        setisAuth(!isAuth)
    }
  return(
    <div>
        <AuthContext.Provider value={{toggle,isAuth}}>{children}</AuthContext.Provider>
    </div>
  )
}
export default AuthContextProvider