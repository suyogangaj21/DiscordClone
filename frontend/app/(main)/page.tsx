import SignIn from "@/components/SignIn";
import Image from "next/image";
import {auth} from "@/auth"
import { SignOut } from "@/components/SignOut";
export default async function Home () {

  const session= await auth()

  if (!session?.user) return <SignIn/>
 
  return (
    <div>
      <img src={session.user.image || "image"} alt="User Avatar" />
      <SignOut/>
    </div>
  )

}
