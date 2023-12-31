import React, { useRef, useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

const FoodList = () => {
  const header1 = useRef();
  const [showText, setShowText] = useState("");
  const toggleText = () => {
    setShowText((prevShowText) => !prevShowText);
  };

  const header2 = useRef();
  const [showText2, setShowText2] = useState("");
  const toggleText2 = () => {
    setShowText2((prevShowText) => !prevShowText);
  };

  const header3 = useRef();
  const [showText3, setShowText3] = useState("");
  const toggleText3 = () => {
    setShowText3((prevShowText) => !prevShowText);
  };

  return (
    <div>
      <div className="col-md-12">
        <div className="text-center">
          <h3 className="p-4 font">
            <u>วิธีการทำอาหารญี่ปุ่นยอดฮิต</u>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-4">
              <img src="food1.png" alt="food1" className="rounded-circle"></img>
              <div className="font2">
                <h3 className="font2 text-center">ข้าวหมูทอดคัตสึด้ง</h3>
                <p className="font3 text-center">
                  ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ
                  ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่
                  แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น
                  ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี
                </p>
                <p className="font3" ref={header1}>
                  {showText && (
                    <div>
                      <h3>ส่วนผสม</h3>
                      <ul>
                        <li>หมูสันนอก</li>
                        <li>ไข่ไก่ 1 ฟอง</li>
                        <li>หอมใหญ่ 1/2 ลูก</li>
                        <li>แป้งทอดกรอบ</li>
                        <li>น้ำซุปชาบูน้ำดำแบบขวด 4 ช้อนโต๊ะ</li>
                        <li>น้ำเปล่า 2 ช้อนโต๊ะ</li>
                      </ul>

                      <h3>วิธีทำ</h3>
                      <p>1.ปอกเปลือกหอมใหญ่ แล้วหั่นเป็นเส้นเล็ก ๆ เตรียมไว้</p>
                      <p>
                        2.เตรียมหมูสันนอก โดยใช้กระดาษทิชชู่ซับเนื้อหมูให้แห้ง
                        ถ้ามีมันหมูและเอ็นหมู ติดกับเนื้อหมู ให้ใช้มีดหั่น
                        ให้ขาดแยกออกจากกัน เพื่อเวลาทอด เนื้อหมูจะไม่งอหรือหดตัว
                        ทั้ง 2 ด้าน จากนั้น ใช้ส้อมจิ้มเนื้อหมูให้มีรูพรุน
                        แล้วใช้สันมีดทุบเนื้อหมูให้นุ่มลง แล้วเริ่มหมัก
                        โดยใส่เกลือ พริกไทย ตามชอบ
                      </p>
                      <p>
                        3.ตอกไข่ไก่ ใบที่ 1 ใส่ชามผสม ตีให้เข้ากัน
                        สำหรับเตรียมชุบหมู พร้อมกับเตรียมแป้งทอดกรอบ
                        เกล็ดขนมปังเตรียมไว้
                      </p>
                      <p>
                        4.นำเนื้อหมูมาชุบแป้งทอดกรอบ ชุบไข่ ตามด้วย เกล็ดขนมปัง
                        จากนั้น ตั้งกระทะ ใส่น้ำมันลงไป รอจนน้ำมันร้อนได้ที่แล้ว
                        ใส่เนื้อหมูลงไป ทอดจนหมูสีเหลืองทองกรอบแล้ว ตักขึ้น
                        พักให้สะเด็ดน้ำมัน
                      </p>
                      <p>
                        5.เตรียมทำซุปไข่ โดยใส่น้ำซุปชาบูน้ำดำ 4 ช้อนโต๊ะ
                        ผสมกับน้ำเปล่า 2 ช้อนโต๊ะให้เข้ากัน เตรียมไว้
                      </p>
                      <p>
                        6.จากนั้น ตั้งกระทะ แล้วนำหอมใหญ่มาผัดในกระทะ ให้นิ่มลง
                        พอนิ่มลงดีแล้ว ให้เทน้ำซุปลงไป
                        แล้วหั่นเนื้อหมูทอดเป็นชิ้น ๆ วางลงไป
                      </p>
                      <p>
                        7.พอน้ำเดือดแล้ว ให้ตอกไข่ไก่ ใบที่ 2 ตีให้เข้ากัน
                        แล้วเทลงไปในกระทะ ปิดฝาหม้อ
                        ตุ๋นไข่ให้ได้ความสุกตามที่ต้องการ ใช้เวลาประมาณ 10
                        วินาที เป็นอันเสร็จ
                      </p>
                    </div>
                  )}
                </p>
                <div className="font3 text-center">
                  <Button onClick={toggleText}>ดูวิธีทำ >></Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4">
              <img src="food2.png" alt="food2" className="rounded-circle"></img>
              <div className="font2">
                <h3 className="font2 text-center">ราเมนหมูชาชู</h3>
                <p className="font3 text-center">
                  ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ
                  ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น
                  แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชู ยิ่งอร่อย
                  ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน ไม่ต้องไปกินที่ร้าน ชามละ 200
                  – 300 บาท แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า อร่อยไม่แพ้กัน
                </p>
                <p className="font3" ref={header2}>
                  {showText2 && (
                    <div>
                      <h3>ส่วนผสมน้ำซุป</h3>
                      <ul>
                        <li>กระดูกเล้ง 1 กิโล</li>
                        <li>ซี่โครงหมูอ่อน 1 กิโล</li>
                        <li>กระดูกไก่ 500 กรัม</li>
                        <li>ต้นหอมญี่ปุ่น 2 ต้น</li>
                        <li>หอมใหญ่ 2 หัว</li>
                        <li>กระเทียมจีน 5 กลีบ</li>
                        <li>ขิงแก่ 6 แว่น</li>
                        <li>น้ำตาลกรวด 2 ช้อนโต๊ะ</li>
                        <li>มิริน 2 ช้อนโต๊ะ</li>
                        <li>ผงดาชิ 15 กรัม</li>
                        <li>ซอสโชยุ 2 ช้อนโต๊ะ</li>
                        <li>ซุปไก่สำเร็จรูป 1 ก้อน</li>
                      </ul>

                      <h3>ส่วนผสมเส้นราเมน</h3>
                      <ul>
                        <li>แป้งสาลี 500 กรัม</li>
                        <li>ไข่ไก่ 2 ฟอง</li>
                        <li>เกลือเล็กน้อย</li>
                        <li>น้ำเปล่า (ใส่รวมกับไข่ ให้ได้ 250 กรัม)</li>
                        <li>แป้งมัน (ใช้สำหรับตอนนวด)</li>
                      </ul>

                      <h3>ส่วนผสมหมูชาชู</h3>
                      <ul>
                        <li>เนื้อหมูส่วนสะโพก 550-600 กรัม</li>
                        <li>โชยุ 150 มิลลิลิตร</li>
                        <li>สาเก หรือเหล้าจีน 5 ช้อนโต๊ะ</li>
                        <li>นํ้ามันงา 4 ช้อนโต๊ะ</li>
                        <li>Chinese five spice powder ½ ช้อนชา (ถ้าชอบ)</li>
                        <li>
                          นํ้าเปล่า 100 มิลลิลิตร และเพิ่มอีกประมาณ 200
                          มิลลิลิตร ระหว่างตุ๋น
                        </li>
                        <li>นํ้าตาล 100 กรัม</li>
                        <li>ขิง1 แว่น</li>
                        <li>ต้นหอมซอย 3 ช้อนโต๊ะ หรือต้นหอมญี่ปุ่น ½ ต้น</li>
                        <li>กระเทียมจีน 2 กลีบ ซอยบาง ๆ</li>
                      </ul>

                      <h3>วิธีทำน้ำซุป</h3>
                      <p>
                        1.นำกระดูกเล้ง ซี่โครงหมูอ่อน กระดูกไก่ คลุกกับแป้งมัน
                        แล้วล้างน้ำให้สะอาด จากนั้น ลวกกับน้ำร้อน ใช้เวลาต้ม 10
                        นาที เสร็จแล้ว นำไปล้างน้ำสะอาดอีก 2 – 3 รอบ
                      </p>
                      <p>
                        2.ตั้งหม้อ ใส่น้ำเปล่าลงไปประมาณ 2 ลิตร
                        เปิดไฟกลางค่อนไฟแรง แล้วใส่กระดูกเล้ง ซี่โครงหมูอ่อน
                        กระดูกไก่ ต้นหอมญีปุ่น หอมใหญ่ กระเทียมจีน ขิงแก่
                      </p>
                      <p>
                        3.ปรุงรสด้วย น้ำตาลกรวด มิริน ผงดาชิ ซอสโชยุ
                        ซุปไก่สำเร็จรูป คนให้ละลายเข้ากัน พอน้ำเดือดแล้ว
                        ให้ลดเป็นไฟกลางค่อนไฟอ่อน ต้มไปเรื่อย ๆ
                        จนกว่าซี่โครงจะอ่อนนุ่ม ใช้เวลาประมาณ 2 ชั่วโมง
                      </p>
                      <p>
                        4.พอครบเวลา ให้ตักซี่โครงหมูอ่อนออก แล้วต้มน้ำซุปต่อไป
                        ใช้เวลาอีก 1 – 2 ชั่วโมง
                        จนกว่าเนื้อตามกระดูกจะเปื่อยจนหลุดออก เสร็จแล้ว
                        เทกรองผ่านกระชอน ให้ได้แต่น้ำซุปออกมา
                        ส่วนเนื้อหมูที่เหลือ ให้นำไปปั่นให้ละเอียด
                        แล้วนำมาเทรวมกับน้ำซุป
                      </p>
                      <p>
                        5.นำน้ำซุปใส่หม้อ แล้วไปต้มด้วยไฟอ่อน ให้น้ำซุปร้อน
                        เตรียมไว้
                      </p>

                      <h3>วิธีทำเส้นราเมน</h3>
                      <p>1.เตรียมชามผสม ใส่แป้งสาลีลงไป</p>
                      <p>
                        2.ตอกไข่ไก่ใส่ชามผสมอีกใบ ใส่เกลือ และ น้ำเปล่า
                        ให้รวมกันได้ 250 มิลลิลิตร
                      </p>
                      <p>
                        3.ค่อย ๆ เทไข่ไก่ใส่ลงไปรวมกับแป้งสาลี คนให้เข้ากัน
                        จากนั้น ใช้มือนวดให้แป้งจับตัวเป็นก้อน และ
                        มีเนื้อเนียนนุ่มเป็นก้อนเดียวกัน เสร็จแล้ว
                        ใช้พลาสติกแรปปิดปากชาม พักแป้งทิ้งไว้ 30 นาที
                      </p>
                      <p>
                        4.โรยแป้งมันลงบนพื้นโต๊ะให้ทั่ว จากนั้น ใช้มือกดแป้ง
                        แผ่ให้เป็นแผ่น แล้วใช้ไม้นวด รีดแป้งให้เป็นแผ่นบาง
                        ประมาณ 2 – 3 เซนติเมตร ตามความชอบ
                      </p>
                      <p>
                        5.พับแผ่นแป้งเข้าหากัน 3 – 4 ทบ แล้วใช้มีดหั่นแป้งออกมา
                        ตามความหนาที่ต้องการ
                      </p>

                      <h3>วิธีทำหมูชาชู</h3>
                      <p>
                        1.มัดหมูด้วยเชือก สำหรับมัดหมู มัดเป็นปล้อง ๆ
                        เวลาทำเสร็จจะได้เป็นชิ้นสวย ถ้าชอบหมูสามชั้น และอยากได้
                        look แบบร้านราเมน ให้ม้วนหมูตามขวางแล้วมัดให้แน่น
                        เหมือนเวลาเราม้วนอกไก่
                      </p>
                      <p>
                        2.หมักหมูกับส่วนผสมทั้งหมด ใส่ถุงซิปล็อค
                        เข้าตู้เย็นทิ้งไว้ประมาณ 2 วัน
                      </p>
                      <p>
                        3.เอาหมูออกจากตู้เย็นใส่หม้อ เทนํ้าลงไปสัก 200 มิลลิลิตร
                        และเปิดไฟอ่อน ตุ๋นไปเรื่อย ๆ จนหมูสุก และนุ่ม ชุ่มฉํ่า
                      </p>
                      <p>
                        4.ผ่านไปประมาณ 2 ชั่วโมง เราจะได้หมูตุ๋นนุ่ม ๆ
                        เป็นเงาวิบวับ รสชาติอร่อย สำหรับใส่ราเม็ง
                        หรือกินกับข้าวสวยร้อน ๆ ระหว่างตุ๋น ระวังนํ้าแห้งกันด้วย
                      </p>
                      <p>
                        5.พอหมูสุกนุ่มแล้ว ทิ้งไว้สัก 30 นาที หมูทีตุ๋นเสร็จใหม่
                        ๆ นอกจากจะร้อนเกิน หั่นยากแล้ว
                        แม้ว่าจะหั่นได้หมูก็จะไม่เป็นชิ้นสวย
                        แถมนํ้าที่อยู่ในหมูจะไหลออกมาทำให้หมูเสียความชื่มชุื่น
                      </p>

                      <h3>วิธีจัดเสิร์ฟ</h3>
                      <ol>
                        <li>
                          1.ต้มน้ำให้เดือด นำเส้นราเมนมาลวกให้สุก แล้วใส่ชาม
                        </li>
                        <li>
                          2.ตักน้ำซุปราดลงไป วางหมูชาชูไว้ด้านบน พร้อมไข่ต้ม
                          โรยหน้าด้วยต้นหอมซอย ตามชอบ เป็นอันเสร็จ
                        </li>
                      </ol>
                    </div>
                  )}
                </p>
                <div className="font3 text-center">
                  <Button onClick={toggleText2}>ดูวิธีทำ >></Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4">
              <img src="food3.png" alt="food3" className="rounded-circle"></img>
              <div className="font2">
                <h3 className="font2 text-center">ปลาซาบะย่างซอสเทริยากิ</h3>
                <p className="font3 text-center">
                  ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม
                  แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ
                  เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
                  รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น
                  ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน
                </p>
                <p className="font3" ref={header3}>
                  {showText3 && (
                    <div>
                      <h3>ส่วนผสม</h3>
                      <ul>
                        <li>ปลาซาบะ 1/2 ตัว</li>
                        <li>แป้งเค้ก</li>
                        <li>ต้นหอมญี่ปุ่น ปริมาณตามชอบ</li>
                        <li>น้ำซุปดาชิ 2 ช้อนโต๊ะ</li>
                        <li>ซอสโชยุ 1 ช้อนโต๊ะ</li>
                        <li>เหล้ามิริน 2 ช้อนโต๊ะ</li>
                        <li>สาเก 2 ช้อนตะ</li>
                        <li>น้ำตาล 15 กรัม</li>
                        <li>ขิงฝน 1 ช้อนชา</li>
                      </ul>

                      <h3>วิธีทำ</h3>
                      <p>
                        1.ใช้กระดาษทิชชู่ ซับเนื้อปลาซาบะให้แห้ง จากนั้น
                        แงะเอาก้างปลาออกให้เรียบร้อย แล้วโรยเกลือทั้ง 2 ด้าน
                        เพื่อดับกลิ่นคาวปลา และ ดึงน้ำออกจากตัวปลา
                        ทำให้เนื้อปลาแห้ง พักทิ้งไว้ 20 นาที
                      </p>
                      <p>
                        2.หั่นรากต้นหอมญี่ปุ่นออก เสร็จแล้ว หั่นแบ่งออกเป็น 4
                        ส่วนเท่า ๆ กัน
                      </p>
                      <p>
                        3.ทำซอสเทริยากิ โดยเตรียมถ้วยผสม ใส่น้ำซุปดาชิ ซอสโชยุ
                        สาเก มิริน น้ำตาล ขิงฝน คนส่วนผสมทั้งหมดให้เข้ากัน
                      </p>
                      <p>
                        4.พอครบ 20 นาที ให้นำเอาปลาซาบะมาซับให้แห้ง
                        ด้วยกระดาษทิชชู่ แล้วใช้มีดหั่นแบ่ง
                        ให้ได้ขนาดตามที่ต้องการ
                        เพื่อให้ซอสเข้าเนื้อปลาได้ง่ายขึ้น
                        ให้ใช้มีดบั้งหนังปลาด้านบนด้วย
                      </p>
                      <p>
                        5.นำเนื้อปลามาชุบแป้งเค้ก แค่พอบาง ๆ ไม่ต้องหนามาก จากนั้น
                        ตั้งกระทะ ใส่น้ำมันเล็กน้อย
                        ใส่ปลาและต้นหอมญี่ปุ่นที่หั่นไว้ลงไป
                        ย่างปลาซาบะให้สุกทั้ง 2 ด้าน โดยใช้ไฟกลางค่อนไฟอ่อน
                        เวลาวางให้วางด้านที่เป็นเนื้อปลาลงไปก่อน
                        พอสุกแล้วให้พลิกกลับอีกด้าน เมื่อย่างปลาซาบะ
                        และต้นหอมญี่ปุ่น จนสุกแล้ว ให้ตักขึ้นพักไว้
                      </p>
                      <p>
                        6.เทซอสเทริยากิ ลงในกระทะ ใช้ไฟกลางค่อนไฟแรง
                        เคี่ยวให้ซอสข้นเหนียวกำลังดี จากนั้น ใส่ปลาซาบะลงไป
                        ราดซอสเทริยากิ ให้โดนเนื้อปลาทั่ว ๆ
                        เพื่อให้ซอสขึ้นเงาสวยงาม
                        ให้ใส่เหล้ามิรินลงไปเล็กน้อยด้วย เสร็จแล้ว ตักใส่จาน
                        เสิร์ฟคู่กับต้นหอมญี่ปุ่น เป็นอันเสร็จ
                      </p>
                    </div>
                  )}
                </p>
                <div className="font3 text-center">
                  <Button onClick={toggleText3}>ดูวิธีทำ >></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
