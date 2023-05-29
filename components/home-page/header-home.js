import styles from "./header-home.module.css";

const tasks = [
  "rozwijanie akustyki z uwzględnieniem jej działów i dziedzin pokrewnych",
  "łączność naukowa z osobami pracującymi twórczo w dziedzinie akustyki i dziedzinach pogranicznych",
  "popularyzowanie akustyki ze szczególnym uwzględnieniem dziedzin ważnych dla nauki, kultury społeczeństwa, gospodarki narodowej i ochrony środowiska",
  "prowadzenie działalności gospodarczej",
];

const HeaderHome = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>
          Polskie Towarzystwo Akustyczne (PTA) jest stowarzyszeniem naukowym
          osób związanych z akustyką. Oddział Gdański PTA jest jednym z siedmiu
          oddziałów działających w naszym kraju. Najwyższą władzą PTA jest Zjazd
          Delegatów. Naczelnym organem realizującym cele statutowe
          stowarzyszenia i reprezentującym PTA na zewnątrz jest Zarząd Główny.
        </p>
        <p>Najważniejsze zadania stawiane PTA to:</p>
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <p>
          Członkiem stowarzyszenia mogą być nie tylko osoby fizyczne czynnie
          interesujące się zagadnieniami akustyki, ale również instytucje i
          zakłady pracy wspierające walkę z hałasem i wibracjami oraz rozwój
          akustyki. Wszystkie osoby zainteresowane przystąpieniem do PTA prosimy
          o wypełnienie deklaracji, przysłanie jej do sekretariatu PTA oraz
          opłacenie składki członkowskiej.
        </p>
      </div>
    </header>
  );
};

export default HeaderHome;
