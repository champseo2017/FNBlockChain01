import { useEffect } from 'react'
import { ethers, providers } from "ethers";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getWeb3Modal } from '../store/getWeb3Modal'

export default function Home() {

  const { web3Modal } = getWeb3Modal()
 
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const web3Provider = new providers.Web3Provider(provider)
      const userAddress = await web3Provider.getSigner().getAddress()
      const network = await web3Provider.getNetwork()
      console.log('network', network)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <button onClick={connectWallet}>connect wallet</button>
  )
}
