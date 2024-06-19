import React from "react";
import Navbar from "../HomeContents/Navbar/Navbar";
import Hero from "../HomeContents/Hero/Hero";
import Explore from "../HomeContents/Explore/Explore";
import Worktips from "../HomeContents/Worktips/Worktips";
import Hosts from "../HomeContents/Hosts/Hosts";
import Benefit from "../HomeContents/Benefit/Benefit";
import Waveface from "../HomeContents/Waveface/Waveface";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Explore />
      </div>
      <div>
        <Worktips />
      </div>
      <div>
        <Hosts />
      </div>
      <div>
        <Benefit/>
      </div>
      <div>
        <Waveface/>
      </div>
    </div>
  );
};

export default Home;
