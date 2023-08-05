import React, { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import MenuBar from "./menubar";

const MenuList = () => {
  const [data, setData] = useState([
    ["ข้าวหมูทอดคัตสึด้ง", 1000],
    ["ราเมนหมูชาชู", 1500],
    ["ปลาซาบะย่างซอสเทริยากิ", 2000],
  ]);

  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, [menuName, parseInt(price, 10)]]);
    setMenuName("");
    setPrice("");
  };

  const deleteRow = (i) => {
    const updatedData = [...data];
    updatedData.splice(i, 1);
    setData(updatedData);
  };

  const totalSum = data.reduce((sum, item) => sum + item[1], 0);
  const averagePrice = totalSum / data.length;

  return (
    <div>
      <MenuBar />
      <div className="font text-center">
        <h3>
          <u>เมนูอาหารญี่ปุ่น</u>
        </h3>
      </div>
      <Table striped bordered hover className="my-3 font">
        <thead>
          <tr>
            <th>ชื่อเมนู</th>
            <th>ราคา (บาท)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td className="text-center">
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteRow(i)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="1"><b>รวม</b></td>
            <td colSpan="2">{totalSum}</td>
          </tr>
          <tr>
            <td colSpan="1"><b>เฉลี่ย</b></td>
            <td colSpan="2">{averagePrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </Table>
      <form onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="row">
            <div className="font">
              <h3>เพิ่มเมนูใหม่</h3>
            </div>
            <div className="col-md-6">
              <label htmlFor="menuName">ชื่อเมนู</label>
              <input
                type="text"
                id="menuName"
                name="menu_name"
                className="form-control"
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="price">ราคา</label>
              <input
                type="number"
                id="price"
                name="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary mt-4 col-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MenuList;
