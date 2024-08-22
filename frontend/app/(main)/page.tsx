'use client'

import { SignOut } from "@/components/SignOut";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

export default  function Home () {
  const session=useSession()
  
  const router= useRouter();
  if (session?.status == "unauthenticated" ){
      router.push('/login')
  }
   console.log(session);
  return (
    <div>
      <img src={session?.data?.user.image || "image"} alt="User Avatar" />
      <SignOut/>
    </div>
  )

}
