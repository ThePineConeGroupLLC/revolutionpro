"use client";

import Navbar from "../components/Navbar";
import FloatingCTA from "../components/FloatingCTA";

export default function Home() {
  return (
    <main>

      <Navbar />
      <FloatingCTA />

      <section style={height:"100vh",position:"relative"}>
        <img src="https://i.postimg.cc/gYDk7s2w/419304238_10160445821143863_8674791776829291759_n.jpg"
        style={width:"100%",height:"100%",objectFit:"cover",position:"absolute"}/>
        <div style={position:"absolute",inset:0,background:"rgba(0,0,0,0.6)"} />
        <div style={position:"relative",color:"white",textAlign:"center",top:"40%"}>
          <h1 style={fontSize:"3rem"}>SMALL TOWNS AREN’T DYING.</h1>
          <p>They’re being rebuilt.</p>
        </div>
      </section>

      <section style={padding:"80px",textAlign:"center"}>
        <h2>The Book</h2>
        <img src="https://i.postimg.cc/LRD99ykx/The_Rural_Revolution_Book_Cover_New_Group.png" width="200"/>
      </section>

      <section id="join" style={padding:"80px",textAlign:"center",background:"#E4682D",color:"white"}>
        <h2>Join The Movement</h2>
        <input placeholder="Email" style={padding:"10px"}/>
      </section>

    </main>
  );
}
