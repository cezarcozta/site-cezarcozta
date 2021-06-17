import { useState } from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaRegFileCode,
  FaUsersCog,
  FaUserTie,
} from "react-icons/fa";
import styles from "./index-styles.module.scss";

export default function Home() {
  const [isVisible, setIsVisible] = useState([false, true, true, true, true]);

  const handleNav = (id: number) => {
    setIsVisible(
      isVisible.map((item, index) =>
        item ? (index === id ? (item = false) : item) : (item = true)
      )
    );
  };

  return (
    <div className={styles.container}>
      <header>
        <h1>cezarcozta_ofc</h1>
      </header>

      <main>
        <nav>
          <ul>
            <li>
              <button onClick={() => handleNav(0)}>
                <FaUserTie strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={() => handleNav(1)}>
                <FaRegFileCode strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={() => handleNav(2)}>
                <FaUsersCog strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={() => handleNav(3)}>
                <FaMapMarkerAlt strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={() => handleNav(4)}>
                <FaLocationArrow strokeWidth={3} size={32} />
              </button>
            </li>
          </ul>
        </nav>

        <section>
          <div hidden={isVisible[0]}>
            <FaLinkedin size={32} />
            <FaGithubSquare size={32} />
          </div>
          <div hidden={isVisible[1]}>CODE SKILLS</div>
          <div hidden={isVisible[2]}>SOFT SKILLS</div>
          <div hidden={isVisible[3]}>LOCATION</div>
          <div hidden={isVisible[4]}>TARGET</div>
        </section>
      </main>

      <footer>
        <h5>Developed by: César Augusto Costa&copy; Copyright 2021</h5>
      </footer>
    </div>
  );
}
