import React from "react";
import styles from "./rateCard.module.css";
import cards from '../../data/json/pages/rates-data'


export default function RateCards({cards}) {


     
     

  return (
    <>
{cards.map((CardData,index) => (
    <div key={index} className={styles.ratecardSection}>
      <div className={styles.container} >
        <div className={styles.rateTitleRow}>
          <h2 className={styles.rateMainTitle}>
            {CardData.title}
          </h2>
          <p className={styles.rateDescription}>
           {CardData.desc}
          </p>
        </div>

        <div className={styles.mainContent}>

          <div className={styles.leftCol}>
            <div className={styles.iconList}>
              <span className={styles.sectionTitle}>Inclusions</span>

              {CardData?.inclusion.map((inclusion,index)=>{
               const Icon = inclusion.icon; 
             return (
              <span className={styles.iconRow} key={index}>
                <Icon   className={styles.icon} />
               {inclusion.content}
              </span>
                )})}

              {/* <span className={styles.iconRow}>
                <University   className={styles.icon} />
                Daily breakfast served with your stay
              </span>

              <span className={styles.iconRow}>
                <Sandwich  className={styles.icon} />
               One floating breakfast experience for two, set amidst serene waters
              </span>

              <span className={styles.iconRow}>
                <SunMoon  className={styles.icon} />
                One-time romantic candlelight dinner for two featuring a five-course gourmet menu
              </span>

              <span className={styles.iconRow}>
                <Clock3  className={styles.icon} />
                Early check-in and late check-out privileges (subject to availability)
              </span>

              <span className={styles.iconRow}>
                <Award  className={styles.icon} />
                Exclusive offer available only for bookings made through our official website
              </span> */}
            </div>
            <div className={styles.notesSection}>
              <span className={styles.sectionTitle}>Notes</span>
             {CardData?.Notes.map((notes,index)=>{
              const Icon = notes.icon; 
              return (
              <span className={styles.iconRow} key={index}>
                <Icon  className={styles.dotIcon} />
                {notes.content}
              </span>
              )})}

              {/* 
              <span className={styles.iconRow}>
                <Dot  className={styles.dotIcon} />
               Floating breakfast and candlelight dinner are subject to weather conditions.
              </span>

              <span className={styles.iconRow}>
                <Dot  className={styles.dotIcon} />
               The romantic dinner experience is not available on December 24th and December 31st.
              </span> */}
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.price}>
              {CardData?.pricingConfig?.price} <span>{CardData?.pricingConfig?.timing}</span>
            </div>
            <div className={styles.taxText}>
              {CardData?.pricingConfig?.priceContent1}
            </div>
            <button className={styles.bookBtn}>{CardData?.pricingConfig?.btn?.btncontent}</button>
            <div className={styles.totalPrice}>
            {CardData?.pricingConfig?.priceContent2}
            </div>
          </div>
        </div>
      </div>
    </div>
    ))}
    </>
  );
}
