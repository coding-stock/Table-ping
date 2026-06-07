'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function TablePage({ id }: { id: string }) {
  const [waiterCalled, setWaiterCalled] = useState(false);

  function callWaiter() {
    alert("Waiter has been called! They will be with you shortly.");
  }
  function requestBill(){
    alert("Your bill has been requested! Our staff will bring it to you shortly.");
  }

  return (
    <>
      <header>
        <div>
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-center bg-gray-200 w-50 p-2 rounded-xl">Table {id}</h1>
        </div>
      </header>
      <main className="p-1">
        <h1 className="font-bold text-2xl text-center mt-5">How can we assist you today?</h1>
        <p className="text-center text-gray-600 mt-3">Select a service below and our team will attend to you shortly.</p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-xl mt-5 flex gap-5">
          <div className="bg-green-900/20 h-full p-4 rounded-lg">
            <Image src="/bell.png" alt="bell" width={100} height={100} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wider mb-2">Call Waiter</h1>
            <p className="text-sm text-gray-600 mb-5">Need assistance? Press the button our staff will be with you shortly.</p>
            <button onClick={callWaiter} disabled={waiterCalled} className={` rounded-lg text-white p-3 w-60 transition  ${waiterCalled ? "bg-gray-400" : "bg-green-950/90 hover:bg-green-950/80"}`}>Call Waiter</button>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-xl mt-5 flex gap-5">
          <div className="bg-green-900/20 h-full p-4 rounded-lg">
            <Image src="/bill.png" alt="bill" width={100} height={100} />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-wider mb-2">Request Bill</h1>
            <p className="text-sm text-gray-600 mb-5">Need your bill? Press the button and our staff will bring it to you.</p>
            <button onClick={requestBill} className="border-2 border-green-950/90 rounded-lg text-green-950/90 font-bold p-3 w-60">Request Bill</button>
          </div>
        </div>
    <h1 className="text-2xl font-bold text-center mt-5">Honey Restaurant</h1>
    <p className="text-center text-gray-600 mt-3">&copy;2026 all rights reserved</p>
      </main>
    </>
  );
}