import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <nav>
      <Link href="/about">About</Link
    </nav>
  )
};

<<nav>>
/*
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <Link href="/about">About</Link
    </nav>
  )
}
*/