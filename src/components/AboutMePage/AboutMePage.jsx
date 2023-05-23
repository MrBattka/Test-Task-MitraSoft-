import React from "react";
import styles from "./AboutMePage.module.css";
import myAva from "../../assets/ava.jpg";

const AboutMePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperAddInf}>
        <div className={styles.ava}>
          <img className={styles.img} src={myAva} alt="Not Found" />
        </div>
        <div className={styles.addInf}>
          <p>Дьяков Илья Вячеславович</p>
          <p>Дата рождения: 10.02.1997г</p>
          <p>Место рождения: г. Севастополь</p>
          <p>Номер Тел: +7 (978) 704 06 38</p>
          <p>Email: ilyha_96@inbox.ru</p>
        </div>
      </div>
      <div className={styles.wrapperAboutMe}>
        <div className={styles.aboutMe}>
          <p>
            <b>Цель:</b> поиск стажировки на должность Frontend Developer.
          </p>
          <p>
            <b>Образование:</b>
          </p>
          <p>
            2012-2016гг "Севастопольский Архитектурно-Строительный колледж",
            профессия "Инженер-строитель". Дополнительная информация: С
            2016-н.в. самозанятый в сфере предоставления услуг монтажа электрики
            и сантехники. О себе: С 2021г заинтересовался разработкой сайтов и в
            свободное время начал активно изучать направление frontend
            разработчика. Все изучал самостоятельно при помощи книг и курсов в
            открытом доступе. Сейчас пишу веб-приложение социальная сеть с
            помощью связки react-redux. Поверхностно знаком с typescript. Есть
            желание развиваться в этом направлении и для этого ищу
            профессиональную команду с хорошим лидером.
          </p>
          <p>
            <p>
              <b>Тестовое задание:</b>
            </p>
            <div>
              <p>
                Git Pages:{" "}
                <a href="https://MrBattka.github.io/test-task">
                  https://MrBattka.github.io/test-task
                </a>
              </p>
              <p>
                Git Repositories:{" "}
                <a href="https://github.com/MrBattka/Test-Task-MitraSoft-">
                  https://github.com/MrBattka/Test-Task-MitraSoft-
                </a>
              </p>
            </div>
            <p>
              <b>Мои проекты:</b>
            </p>
            <p>
              <p>
                Todos:{" "}
                <a href="https://mrbattka.github.io/Todos">
                  https://mrbattka.github.io/Todos
                </a>
              </p>
              <p>
                Сайт-визитка:{" "}
                <a href="https://mrbattka.github.io/cosmos">
                  https://mrbattka.github.io/cosmos
                </a>
              </p>
              <p>
                Соц сеть (незаконченная):{" "}
                <a href="https://mrbattka.github.io/SocialNet">
                  https://mrbattka.github.io/SocialNet
                </a>
              </p>
              <p>
                P.S. чтоб зайти в соц сеть, регестрация тут:{" "}
                <a href="https://social-network.samuraijs.com">
                  https://social-network.samuraijs.com
                </a>
              </p>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
