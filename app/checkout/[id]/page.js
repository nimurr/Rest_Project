import Checkout from '@/components/OthersPage/Checkout'
import React from 'react'

export default function page({params}) {
  return (
    <div>
      <Checkout params={params}></Checkout>
    </div>
  )
}
