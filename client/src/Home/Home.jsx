import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./components/SocialLinks";
import Button from "./components/Button";
import CustomLink from "./components/CustomLink";
import BelowHomeContent from "./components/BelowHomeContent";
function Home() {
  return (
    <>
      <main
        className="h-[100vh]  flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1699769966730-037736d7289c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <section className=" flex justify-between  h-[75%] w-[100%]">
          <div className=" w-[10%] flex justify-center items-center">
            <SocialLinks />
          </div>

          <div className=" w-[60%] flex justify-center text-right items-center px-10 flex-col text-white">
            <h1 className="text-[3rem] text-right pb-6 w-full">
              Stay on Track: Your Personal Organizer for Tasks and Notes!
            </h1>
            <p className="w-full pb-6  text-[1.2rem]">
              Stay organized and efficient with our all-in-one desktop
              application. Manage your to-do lists, take notes, and keep track
              of important tasks effortlessly. Designed for simplicity and
              productivity, it helps you stay focused on what matters most. Your
              perfect companion for a clutter-free and streamlined workflow!
            </p>

            <div className=" w-[100%] flex  justify-end h-[20%] gap-10 items-center">
            <CustomLink linkname={"Get Started"} linkpath={"/signin"} />

              <Button buttonname="Download" />
            </div>
          </div>
        </section>

        <section className=" h-[25%] w-[100%] flex justify-around items-center">
          <BelowHomeContent content="All-in-One Productivity – Manage your to-do lists and notes in one seamless application, keeping everything organized."/>
          <BelowHomeContent content={"Effortless Task Management – Prioritize, categorize, and track your tasks with ease, ensuring you stay on top of your schedule."}/>
          <BelowHomeContent content={"Clutter-Free & Intuitive – A minimal and distraction-free design helps you focus, making productivity simple and stress-free."}/>

        </section>
      </main>
    </>
  );
}

export default Home;
