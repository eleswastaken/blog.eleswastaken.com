import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1>This is my blog.</h1>
    <p>The design is awful you don't have to tell me that.</p>
    <p>I will fix it soon;)</p>
    <a href="https://twitter.com/elesismailov">my twitter</a>
    <p>
      For now check out my 
      <a href="/posts"> blog posts</a>.
    </p>
    </>
  )
}
