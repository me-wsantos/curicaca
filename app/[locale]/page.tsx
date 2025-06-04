'use client'

import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import {
  Section01,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
  Section10,
  Section11,
} from "./(overview)/home/"

import Footer from './components/Footer'

export default function Home() {

  return (
    <>
      <Navbar />
      <NavbarMobile />
      <Section01 id="section1" />
      <Section10 id="section10" />
      <Section03 id="section3" />
      <Section11 id="section10" />
      <Section04 id="section4" />
      <Section05 id="section5" />
      <Section06 id="section6" />
      <Section07 id="section7" />
      <Section08 id="section8" />
      <Section09 id="section9" />
      <Footer />
    </>
  )
}