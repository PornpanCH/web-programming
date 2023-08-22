import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Button, Table } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-bootstrap";
import Contact from "./Contact";

export function Menu() {
  return (
    <nav className="myNav p-2 mn-3 text-center">
      <NavLink
        to="/"
        className="link px-2"
        style={({ isActive}) => {
            return {
                textDecoration: isActive ? "none" : "underline",
            };
        }}
    >
        หน้าแรก
        </NavLink>
       <NavLink
        to="/contact"
        className="link px-2"
        style={({ isActive}) => {
            return {
                textDecoration: isActive ? "none" : "underline",
            };
        }}
    >
        ผู้จัดทำ
    </NavLink>
   </nav>
  );
}

function FoodList(props) {
    return (
        <div className="colum text-center">
            <image className="img-fluid" stopColor={props.img} width="35%"/>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <Button className="mb-3">ดูวิธีทำ</Button>
        </div>
    );
}

function Footer() {
    return (
        <div className="text-center be-secondary link">
            2023 @ Developed by Wanrada S.
        </div>
    );
}

function Index() {
    return (
        <Container>
        <Manu />
        <h4 className="mitr text-center underline mb-3">
          วิธีทำอาหารญี่ปุ่นยอดฮิต
        </h4>
        <div className="row">
        <FoodList
            img="c:\Users\user\Downloads\2-1.pngw3.webp"
            name="ข้าวหมูทอดทงคัตสึ"
            desc="ข้าวหมูทอดทงคัตสึสไตล์ญี่ปุ่น ที่จะทำให้คุณหลงรักการกินหมูทอด"
        />
        <FoodList
            img="c:\Users\user\Downloads\4-9.jpgw3.webp" 
            name="ราเมนหมูชาชุู"
            desc="ราเมน เมนูอาหารญี่ปุ่น แบบเดิมที่คนไทยหลายคนชื่นชอบ"
        />
        <FoodList
            img="c:\Users\user\Downloads\5-3.pngw3.webp"
            name="ปลาซาบะย่างซอสเทริยาก"
            desc="ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม อร่อยรับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น"
        />
        </div>
        <Footer />
        </Container>
    );
}
function App() {
    return (
    <BrowserRouter>
    <Container className="p-3 my-3 bg-light">
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/main" element={<Index/>} /> 
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Container>
    </BrowserRouter>
    );
}

export default App;
