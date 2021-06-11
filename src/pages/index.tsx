import { useState } from "react";
import {
  FaLocationArrow,
  FaMapMarkerAlt,
  FaRegFileCode,
  FaUsersCog,
  FaUserTie,
} from "react-icons/fa";
import styles from "./index-styles.module.scss";

type Visible = {
  user: boolean;
  location: boolean;
  target: boolean;
  softSkills: boolean;
  hardSkills: boolean;
};

export default function Home() {
  const [visible, setVisible] = useState<Visible>({
    user: false,
    location: true,
    target: true,
    hardSkills: true,
    softSkills: true,
  });

  const handleClickLocation = () => {
    setVisible({
      user: true,
      location: false,
      target: true,
      hardSkills: true,
      softSkills: true,
    });
  };

  const handleClickTarget = () => {
    setVisible({
      user: true,
      location: true,
      target: false,
      hardSkills: true,
      softSkills: true,
    });
  };

  const handleClickUer = () => {
    setVisible({
      user: false,
      location: true,
      target: true,
      hardSkills: true,
      softSkills: true,
    });
  };
  const handleClickSoftSkills = () => {
    setVisible({
      user: true,
      location: true,
      target: true,
      hardSkills: true,
      softSkills: false,
    });
  };
  const handleClickHardSkills = () => {
    setVisible({
      user: true,
      location: true,
      target: true,
      hardSkills: false,
      softSkills: true,
    });
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
              <button onClick={handleClickUer}>
                <FaUserTie strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={handleClickHardSkills}>
                <FaRegFileCode strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={handleClickSoftSkills}>
                <FaUsersCog strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={handleClickLocation}>
                <FaMapMarkerAlt strokeWidth={3} size={32} />
              </button>
            </li>
            <li>
              <button onClick={handleClickTarget}>
                <FaLocationArrow strokeWidth={3} size={32} />
              </button>
            </li>
          </ul>
        </nav>

        <section>
          <div hidden={visible.user}>USER</div>
          <div hidden={visible.hardSkills}>CODE SKILLS</div>
          <div hidden={visible.softSkills}>SOFT SKILLS</div>
          <div hidden={visible.location}>LOCATION</div>
          <div hidden={visible.target}>TARGET</div>
        </section>
      </main>

      <footer>
        <h5>Developed by: César Augusto Costa&copy; Copyright 2021</h5>
      </footer>
    </div>
  );
}
