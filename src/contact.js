import React, { useContext } from "react";
import MenuBar from "./menubar";

function toThaiDateString(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม.",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ` + `${hour}:${minutes}:${second} น.`;
}

function MyDateTime() {
  const dateNow = new Date();
  const thaiDateString = toThaiDateString(dateNow);
  return <div>{thaiDateString}</div>;
}

function SkillList() {
  return (
    <div className="skill-list">
      <h5 className="mb-3">Skills:</h5>
      <Skill color="orange" skill="PHP" emoji="Professional" />
      <Skill color="blue" skill="React" emoji="Professional" />
      <Skill color="black" skill="Javascript" emoji="Professional" />
      <Skill color="red" skill="Laravel" emoji="Professional" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill mb-2"
      style={{
        backgroundColor: props.color,
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <span className="text-white">
        {props.skill} - {props.emoji}
      </span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายณัฐวุฒิ บรรเรืองทอง</h1>
      <p>
        <b>นักศึกษาปริญญาโท</b>
        <br />
        สาขาวิชาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิตัล
        <br />
        คณะวิทยาศาสตร์ มหาวิทยาลัยอุบลราชธานี
        <br />
        วันจันทร์ ถึง ศุกร์ 08.30 - 16.30 เป็นนักวิชาการคอมพิวเตอร์
        <br />
        วันจันทร์ ถึง ศุกร์ 16.30 - 24.00 เป็น Programmer
        <br />
        วันเสาร์ ถึง อาทิตย์ เป็นนักศึกษาระดับปริญญาโท
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="image/BKP06153.JPG"
      alt="Natthawut_B"
      className="avatar img-fluid rounded-circle p-3"
    />
  );
}

export default function Contact() {
  return (
    <div>
      <MenuBar />
      <div className="card mt-4">
        <div className="row">
          <div className="col-lg-4">
            <Avatar />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <Intro />
              <SkillList />
              <div className="mt-3">
                <MyDateTime />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
