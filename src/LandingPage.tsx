// Landingpage.tsx - SAME CONTENT, BETTER DESIGN
import Styles from "./Landingpage.module.css";
import tagimage from "../public/ev-air-logo.png";

const OnBoardingScreen = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <div className={Styles.tag}>
          <img src={tagimage} alt="my logo" className= {`${Styles.tagImage} ${Styles.animateBox}`} />
        </div>
      </div>

      <div className={Styles.collum}>
        <div className={`${Styles.row} ${Styles.animateBox}`}>
          <div className={Styles.numb}>EV009</div>
          <div className={Styles.possision}>BEFORE THE POSSESSION</div>
        </div>

        <div className={`${Styles.navi} ${Styles.animateBox}`}>NAVI MUMBAI</div>
        <div className={`${Styles.navi} ${Styles.animateBox}`}>TIME TO INVEST NOW</div>
        
        <div className= {`${Styles.Time} ${Styles.animateBox}`}>
          <div className={Styles.Timelable}>NAME :</div>
          <div className={Styles.Timeinput}>MAHEK TULVE</div>
        </div>

        {/* Remark field */}
        <div className={`${Styles.remark} ${Styles.animateBox}`}>
          <div className={Styles.lable}>REMARK :</div>
          <div className={Styles.input}>BOARDING</div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingScreen;