// vite -react-tsx Landing Page
import Styles from "./Landingpage.module.css";
import tagimage from "../public/ev-air-logo.png";

const OnBoardingScreen = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <div className={Styles.tag}>
          <img src={tagimage} alt="my logo" className={Styles.tagImage} />
        </div>
      </div>

      <div
        className={`${Styles.collum} ${Styles.animateBox}`}
        style={{ animationDelay: "0.4s" }}
      >
        <div className={Styles.row}>
          <div className={Styles.numb}>EV009</div>
          <div className={Styles.possision}>BEFORE THE POSSESSION</div>
        </div>

        <div className={Styles.navi}>NAVI MUMBAI</div>
        <div className={Styles.Time}>TIME TO INVEST NOW</div>

        <div className={Styles.filled} style={{ paddingTop: "50px" }}>
          <div className={Styles.lable}>NAME :</div>
          <div className={Styles.input}>MAHEK TULVE</div>
        </div>

        <div className={Styles.remark}>
          <div className={Styles.lable}>REMARK :</div>
          <div className={Styles.input}>BOARDING</div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingScreen;
