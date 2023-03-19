"use client"
import GraphPanel from '@/components/graphPanel'
import MoneyInfo from '@/components/moneyInfo'
import TransactionPanel from '@/components/transactionPanel'
import Link from 'next/link'
import React from 'react'

export default function DashboardComponents() {
  return (
    <>
      <div className="w-full">
        <MoneyInfo />
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div>
            <GraphPanel />
          </div>
          <div>
            {/* <Link href='/dashboard/transaction'> */}
            <TransactionPanel />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
