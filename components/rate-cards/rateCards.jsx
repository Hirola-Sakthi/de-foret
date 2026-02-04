import React from "react";
import styles from "./rateCard.module.css";
import cards from "../../data/json/pages/rates-data";

export default function RateCards({ cards }) {
  return (
    <>
      {cards.map((CardData, index) => (
        <div key={index} className={styles.ratecardSection}>
          <div className={styles.container}>
            <div className={styles.rateTitleRow}>
              <h2 className={styles.rateMainTitle}>{CardData.title}</h2>
              <p className={styles.rateDescription}>{CardData.desc}</p>
            </div>

            <div className={styles.mainContent}>
              <div className={styles.leftCol}>
                <div className={styles.iconList}>
                  <span className={styles.sectionTitle}>Inclusions</span>

                  {CardData?.inclusion.map((inclusion, index) => {
                    const Icon = inclusion.icon;
                    return (
                      <span className={styles.iconRow} key={index}>
                        <Icon className={styles.icon} />
                        {inclusion.content}
                      </span>
                    );
                  })}
                </div>
                <div className={styles.notesSection}>
                  <span className={styles.sectionTitle}>Notes</span>
                  {CardData?.Notes.map((notes, index) => {
                    const Icon = notes.icon;
                    return (
                      <span className={styles.iconRow} key={index}>
                        <Icon className={styles.dotIcon} />
                        {notes.content}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className={styles.rightCol}>
                <div className={styles.price}>
                  {CardData?.pricingConfig?.price}{" "}
                  <span>{CardData?.pricingConfig?.timing}</span>
                </div>
                <div className={styles.taxText}>
                  <span className={styles.taxInline}>
                    {CardData?.pricingConfig?.icon && (
                      <CardData.pricingConfig.icon size={16} />
                    )}
                    {CardData?.pricingConfig?.priceContent1}
                  </span>
                </div>

                <button className={styles.bookBtn}>
                  {CardData?.pricingConfig?.btn?.btncontent}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
