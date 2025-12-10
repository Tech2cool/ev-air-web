// Landingpage.tsx - SAME CONTENT, BETTER DESIGN
import { useEffect, useState } from "react";
import Styles from "./Landingpage.module.css";
import tagimage from "/ev-air-logo.png?url";
import IndexDialog from "./IndexDialog";

const OnBoardingScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ok, setOk] = useState(true);
  const [list, setList] = useState([
    {
      id: 1,
      name: "MAHEK TULVE",
      remark: "BOARDING",
    },
  ]);

  useEffect(() => {
    const arr = [
      { id: 1, name: "MAHEK TULVE", remark: "BOARDING" },
      { id: 2, name: "ARUN KUMAR", remark: "ON PROGRESS" },
      { id: 3, name: "SNEHA SHAH", remark: "COMPLETED" },
      { id: 4, name: "RAHUL VERMA", remark: "PENDING" },
      { id: 5, name: "PRIYA SINGH", remark: "CANCELLED" },
      { id: 6, name: "VIKAS PATIL", remark: "BOARDING" },
    ];

    const inter = setInterval(() => {
      setList((prev) => {
        const current = prev[selectedIndex];

        // find its index in arr
        const indexInArr = arr.findIndex((item) => item?.id === current?.id);

        // next index (looping)
        const nextIndex = (indexInArr + 1) % arr.length;

        // copy and update only selectedIndex
        const updated = [...prev];
        updated[selectedIndex] = arr[nextIndex];
        setOk(true);
        setTimeout(() => setOk(false), 2000);
        return updated;
      });
    }, 5000);

    return () => clearInterval(inter);
  }, [selectedIndex]);

  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <div className={Styles.tag}>
          <img
            src={tagimage}
            alt="my logo"
            className={`${Styles.tagImage} ${ok ? Styles.animateBox : ""}`}
          />
        </div>
        <IndexDialog value={selectedIndex} onIndexChange={setSelectedIndex} />
      </div>

      <div className={Styles.collum}>
        <div className={`${Styles.row} ${ok ? Styles.animateBox : ""}`}>
          <div className={Styles.numb}>EV009</div>
          <div className={Styles.possision}>BEFORE THE POSSESSION</div>
        </div>

        <div className={`${Styles.navi} ${ok ? Styles.animateBox : ""}`}>
          NAVI MUMBAI
        </div>
        <div className={`${Styles.navi} ${ok ? Styles.animateBox : ""}`}>
          TIME TO INVEST NOW
        </div>

        <div className={`${Styles.Time} ${ok ? Styles.animateBox : ""}`}>
          <div className={Styles.Timelable}>NAME :</div>
          <div className={Styles.Timeinput}>
            {list[selectedIndex]?.name ?? "--"}
          </div>
        </div>

        {/* Remark field */}
        <div className={`${Styles.remark} ${ok ? Styles.animateBox : ""}`}>
          <div className={Styles.lable}>REMARK :</div>
          <div className={Styles.input}>BOARDING</div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingScreen;
