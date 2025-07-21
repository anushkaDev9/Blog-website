import Image from "next/image";
import Navigation from "./navigation/Navigation";
import Header from "./home/Header";
import BlogItem from "./home/BlogItem";
import HeaderPage from "./home/HeaderPage";
import Footer from './footer/Footer'

export default function Home() {
  return (
    
  <div className={`w-full h-19`}>
    <Navigation/>
   <HeaderPage/>
<Footer/>
  </div>
  );
}
