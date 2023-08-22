import React from "react";
import { Menu, Footer } from "./App"

import "./App1.css";
import { Container } from "react-bootstrap";

function Contact() {
    return (
      <Container>
        <Menu />
        <div className="card">
          <Avatar />
          <div className="data">
            <Intro />
            <SkillList />
          </div>
        </div>
        <Footer />
        </Container>
    );
}
    
function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill="Unity" emoji="👌" color="cyan" />
        <Skill skill="PHP emoji="👊" color="orange" />
        <Skill skill="React" emoji="👏" color="yellow" />
        <Skill skill="MySQL" emoji="🖖" color="orangered" />
      </div>
    );
}

function Skill(props) {
    return (
      <div className="skill" style={{ backgroundColor: props.color}}>
        <span>{props.skill}</span>
        <span>{props.emoji}</span>
      </div>
    );
}

function Intro() {
    return (
      <div>
        <h1>พรพรรณ ฉิวภิรมย์</h1>
        <p>นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
            มหาวิทยาลัยอุบลราชธานี ชื่อชอบในการใช้คอมพิวเตอร์และเล่นเกมส์
            งานอดิเรกนอน เล่นเกมส์ กิน
        </p>
      </div>
    );
}
function Avatar() {
    return <img className="avatar" src="c:\Users\user\Desktop\ntzhip.jpg" alt="My Avatar"