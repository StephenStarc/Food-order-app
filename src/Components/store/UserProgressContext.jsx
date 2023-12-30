import { createContext, useState } from "react";

export const Progess = createContext(null)

export default function UserprogressContextProvider({children}){
     const [userprogress, setUserProgress] = useState('')

     function showCart(){
        setUserProgress('cart')
     }
     function hideCart(){
        setUserProgress('')
     }
     function showCheckout(){
        setUserProgress('checkout')
     }
     function hideCheckout(){
        setUserProgress('')
     }

     const userprogressCtx = {progress:userprogress,showCart,hideCart,showCheckout,hideCheckout}
    return <Progess.Provider value={userprogressCtx}>{children}</Progess.Provider>
}