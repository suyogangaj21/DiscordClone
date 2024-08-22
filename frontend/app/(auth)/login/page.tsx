'use client'
import {SignIn} from '@/components/SignIn'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
const login = () => {
  const router=useRouter()
  const session =useSession()
  if(session?.status=="authenticated"){
      router.push('/')
  }
  return (
    <div>
        <SignIn/>
    </div>
  )
}

export default login
