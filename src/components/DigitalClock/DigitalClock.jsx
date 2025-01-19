import { useEffect, useRef, useState } from "react";
import styles from "./DigitalClock.module.css";

function DigitalClock({ title, timeZone }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: false,
    timeZone,
  }).format(time);

  const [hours, minutes] = formattedTime.split(":");

  const currentDay = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone,
  })
    .format(time)
    .toLowerCase();

  return (
    <div className={styles.digitalClock}>
      <div className={styles.title}>{title}</div>
      <div className={styles.clockContent}>
        <div className={styles.days}>
          {["sun", "mon", "tue", "wed", "thu", "fri", "sat"].map((day) => (
            <div key={day} className={currentDay === day ? styles.active : ""}>
              {day.toUpperCase()}
            </div>
          ))}
        </div>
        <div className={styles.time}>
          <span>{hours}</span>
          <span className="sep">:</span>
          <span>{minutes}</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
