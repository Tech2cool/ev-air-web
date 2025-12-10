// Landingpage.tsx - SAME CONTENT, BETTER DESIGN
import { useEffect, useState } from "react";
import Styles from "./Landingpage.module.css";
import tagimage from "/ev-air-logo.png?url";
import IndexDialog from "./IndexDialog";
import axios from "axios";

interface MyData {
  id?: number;
  name?: string;
  phoneNumber?: string;
  email?: string;
}
const pad3 = (num: number) => String(num).padStart(3, "0");

const OnBoardingScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ok, setOk] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<MyData[]>([
    {
      id: 1,
      name: "---",
    },
  ]);
  const currentList =list[selectedIndex];
  const fetchServers = async () => {
    try {
      const response = await axios.get<{ data: MyData[] }>(
        "http://localhost:8082/onboard-slots",
        // "https://api.evhomes.tech/onboard-last-6",
        {
          headers: {
            "x-platform": "web",
          },
        }
      );
      setList(response.data?.data || []);
      setOk(true);
      setTimeout(() => setOk(false), 2000);
    } catch (err) {
      setError("Failed to fetch servers. Please try again later.");
      console.error("Error fetching servers:", err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchServers();
  // }, []);

  useEffect(() => {
    // const arr = [
    //   { id: 1, name: "MAHEK TULVE", remark: "BOARDING" },
    //   { id: 2, name: "ARUN KUMAR", remark: "ON PROGRESS" },
    //   { id: 3, name: "SNEHA SHAH", remark: "COMPLETED" },
    //   { id: 4, name: "RAHUL VERMA", remark: "PENDING" },
    //   { id: 5, name: "PRIYA SINGH", remark: "CANCELLED" },
    //   { id: 6, name: "VIKAS PATIL", remark: "BOARDING" },
    // ];

    const inter = setInterval(() => {
      fetchServers();
      // setList((prev) => {
      //   const current = prev[selectedIndex];

      //   // find its index in arr
      //   const indexInArr = arr.findIndex((item) => item?.id === current?.id);

      //   // next index (looping)
      //   const nextIndex = (indexInArr + 1) % arr.length;

      //   // copy and update only selectedIndex
      //   const updated = [...prev];
      //   updated[selectedIndex] = arr[nextIndex];
      //   return updated;
      // });
    }, 5000);

    return () => clearInterval(inter);
  }, [selectedIndex]);

  if (loading)
    return (
      <>
        <h1>Loading.....</h1>
      </>
    );

  if (error != null && error != "")
    return (
      <>
        <h3>{error}</h3>
      </>
    );

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
          <div className={Styles.numb}>
            {currentList?.id ? `EV${pad3(currentList?.id ?? 0)}` : "----"}
          </div>
          <div className={Styles.possision}>BEFORE TIME POSSESSION</div>
        </div>

        <div className={`${Styles.navi} ${ok ? Styles.animateBox : ""}`}>
          NAVI MUMBAI
        </div>
        <div className={`${Styles.navi} ${ok ? Styles.animateBox : ""}`}>
          TIME TO INVEST <span className={Styles.now}>NOW</span>
        </div>

        <div className={`${Styles.Time} ${ok ? Styles.animateBox : ""}`}>
          <div className={Styles.Timelable}>NAME :</div>
          <div className={Styles.Timeinput}>
            <span className={Styles.nameShine}>
              {currentList?.name ?? "----"}
            </span>
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
