/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable func-names */
import profile from '../../components/profile/profile.js';
import { changePage } from '../../routes/changePage.js';

const createPage = () => {
  const photoURL = firebase.auth().currentUser.photoURL;
  const nameUser = firebase.auth().currentUser.displayName;

  const rootElement = document.createElement('div');
  const contentnewElement = `
  <header>
    <nav class="feed-navbar">
      <img class="profile-logo" src="./img/Girls-CodeF.gif" alt="">
      <div class="hamburger" id="hamburger">
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      </div>

      <ul class="navbar-links" id="navbar-links">
       <li class="li-items" id="navigate-profile"><a href="#">Perfil</a></li>
       <li class="li-items" id="navigate-feed"><a href="#" id="goFeed">Feed</a></li>
       <li class="li-items feed-logout"></li>
      </ul>
    </nav>
  </header>
  <section class='profile-area'>
      <div class='profile-area-theme'>
        <img class='theme-image' src="../../img/profile/background.png">
      </div>
      <figure class='profile-area-photo-box'>
        <div class="image-upload">
          <label for="file-input">
            <img src='${photoURL}' id='user-photo' class='user-photo'/>
          </label>
          <input id="file-input" type="file" />
        </div>
      </figure>
      <div class='name-profile-area'>
        <p id='name-user'></p>
      </div>
  </section> 
  <section class='profile-area-interests'>
        <img class='img' src="../../img/profile/html.png">
        <img class='img' src="../../img/profile/css.png">
        <img class='img' src="../../img/profile/js.png">
        <img class='img' src="../../img/profile/java.png">
        <img class='img' src="../../img/profile/react.png">
        <img class='img' src="../../img/profile/php.png">
        <img class='img' src="../../img/profile/python.png">
  </section>
  <div class="code">
  <div class="svg">
  <?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 600 293" style="enable-background:new 0 0 600 293;" xml:space="preserve">
  <style type="text/css">
  .st0{fill:#EFEFEF;}
  .st1{fill:#E3E4E5;}
  .st2{fill:#2A333A;}
  .st3{opacity:0.5;fill:#9E9E9E;}
  .st4{fill:#5C5E60;}
  .st5{fill:#404244;}
  .st6{fill:#F46C69;}
  .st7{fill:#F46C69;}
  .st8{fill:#3C2415;}
  .st9{fill:#432818;}
  .st10{fill:#563726;}
  .st11{fill:#F46C69;}
  .st12{opacity:0.5;fill:#FCFCFC;}
  .st13{fill:none;stroke:#5C5E60;stroke-width:5;stroke-miterlimit:10;}
  .st14{fill:#FEFEFE;}
  .st15{fill:#EF7665;}
  .st16{fill:#A4D9E4;}
  .st17{fill:#B8C7CD;}
  .st18{fill:#474A4E;}
  .st19{fill:#65B6C1;}
  .st20{fill:#F46C69;}
  .st21{fill:#7C7F83;}
  .st22{fill:#FFFFFE;}
  .st23{fill:#F96759;}
  </style>
  <g id="macbook">
  <g id="macbook_1_">
    <g>
      <path class="st0" d="M411.4,301.7H212.1c-0.3,0-0.5-0.2-0.5-0.5V163.3c0-0.3,0.2-0.5,0.5-0.5h199.3c0.3,0,0.5,0.2,0.5,0.5v137.9
        C411.9,301.5,411.7,301.7,411.4,301.7z"/>
      <path class="st1" d="M394.8,257.4h-166c-0.2,0-0.4-0.2-0.4-0.4v-81.2c0-0.2,0.2-0.4,0.4-0.4h166c0.2,0,0.4,0.2,0.4,0.4V257
        C395.2,257.2,395,257.4,394.8,257.4z"/>
      <g>
        <g>
          <g>
            <path class="st2" d="M242.8,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4H233c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H242.8z"/>
          </g>
          <g>
            <path class="st2" d="M256.2,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H256.2z"/>
          </g>
          <g>
            <path class="st2" d="M269.6,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H269.6z"/>
          </g>
          <g>
            <path class="st2" d="M283,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H283z"/>
          </g>
          <g>
            <path class="st2" d="M296.5,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H296.5z"/>
          </g>
          <g>
            <path class="st2" d="M309.9,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H309.9z"/>
          </g>
          <g>
            <path class="st2" d="M323.3,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H323.3z"/>
          </g>
          <g>
            <path class="st2" d="M336.7,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H336.7z"/>
          </g>
          <g>
            <path class="st2" d="M350.2,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H350.2z"/>
          </g>
          <g>
            <path class="st2" d="M363.6,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H363.6z"/>
          </g>
          <g>
            <path class="st2" d="M377.1,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H377.1z"/>
          </g>
          <g>
            <path class="st2" d="M390.5,184.2c0.2,0,0.4-0.2,0.4-0.4v-3.9c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v3.9
              c0,0.2,0.2,0.4,0.4,0.4H390.5z"/>
          </g>
          <g>
            <path class="st2" d="M242.7,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H242.7z"/>
          </g>
          <g>
            <path class="st2" d="M256.1,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H256.1z"/>
          </g>
          <g>
            <path class="st2" d="M269.6,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H269.6z"/>
          </g>
          <g>
            <path class="st2" d="M283,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H283z"/>
          </g>
          <g>
            <path class="st2" d="M296.5,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H296.5z"/>
          </g>
          <g>
            <path class="st2" d="M309.9,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H300c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H309.9z"/>
          </g>
          <g>
            <path class="st2" d="M323.3,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H323.3z"/>
          </g>
          <g>
            <path class="st2" d="M336.7,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H336.7z"/>
          </g>
          <g>
            <path class="st2" d="M350.2,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H350.2z"/>
          </g>
          <g>
            <path class="st2" d="M363.6,195.3c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H363.6z"/>
          </g>
          <g>
            <path class="st2" d="M380.6,195.3h1.8h8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8h-1.8h-13.4
              c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4H380.6z"/>
          </g>
          <g>
            <path class="st2" d="M249.6,206.8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-16.5c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H249.6z"/>
          </g>
          <g>
            <path class="st2" d="M253.2,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H253.2z"/>
          </g>
          <g>
            <path class="st2" d="M276.8,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C276.7,206.8,276.8,206.7,276.8,206.5z"/>
          </g>
          <g>
            <path class="st2" d="M280,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H280z"/>
          </g>
          <g>
            <path class="st2" d="M293.5,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H293.5z"/>
          </g>
          <g>
            <path class="st2" d="M306.9,198.3c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H306.9z"/>
          </g>
          <g>
            <path class="st2" d="M330.5,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C330.4,206.8,330.5,206.7,330.5,206.5z"/>
          </g>
          <g>
            <path class="st2" d="M343.9,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C343.8,206.8,343.9,206.7,343.9,206.5z"/>
          </g>
          <g>
            <path class="st2" d="M357.4,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C357.3,206.8,357.4,206.7,357.4,206.5z"/>
          </g>
          <g>
            <path class="st2" d="M370.8,206.5v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C370.7,206.8,370.8,206.7,370.8,206.5z"/>
          </g>
          <g>
            <path class="st2" d="M383.9,206.8h6.5c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-6.5h-3.3h-6.5
              c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h6.5H383.9z"/>
          </g>
          <g>
            <path class="st2" d="M232.7,217.7c0,0.2,0.2,0.4,0.4,0.4h8.6h1.2h13.4c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-13.4
              h-1.2h-8.6c-0.2,0-0.4,0.2-0.4,0.4V217.7z"/>
          </g>
          <g>
            <path class="st2" d="M259.6,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8
              C259.7,209.6,259.6,209.8,259.6,210z"/>
          </g>
          <g>
            <path class="st2" d="M283.5,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C283.3,218.1,283.5,217.9,283.5,217.7z"/>
          </g>
          <g>
            <path class="st2" d="M286.4,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8
              C286.6,209.6,286.4,209.8,286.4,210z"/>
          </g>
          <g>
            <path class="st2" d="M299.8,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8
              C300,209.6,299.8,209.8,299.8,210z"/>
          </g>
          <g>
            <path class="st2" d="M313.3,210v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210c0-0.2-0.2-0.4-0.4-0.4h-9.8
              C313.4,209.6,313.3,209.8,313.3,210z"/>
          </g>
          <g>
            <path class="st2" d="M337.2,217.7V210c0-0.2-0.2-0.4-0.4-0.4H327c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C337.1,218.1,337.2,217.9,337.2,217.7z"/>
          </g>
          <g>
            <path class="st2" d="M350.7,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C350.5,218.1,350.7,217.9,350.7,217.7z"/>
          </g>
          <g>
            <path class="st2" d="M364.1,217.7V210c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C363.9,218.1,364.1,217.9,364.1,217.7z"/>
          </g>
          <g>
            <path class="st2" d="M367.4,209.6c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210
              c0-0.2-0.2-0.4-0.4-0.4H367.4z"/>
          </g>
          <g>
            <path class="st2" d="M390.6,209.6h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4V210
              C391,209.8,390.8,209.6,390.6,209.6z"/>
          </g>
          <g>
            <path class="st2" d="M232.7,229c0,0.2,0.2,0.4,0.4,0.4h13.4h1.7h8.1c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8.1
              h-1.7h-13.4c-0.2,0-0.4,0.2-0.4,0.4V229z"/>
          </g>
          <g>
            <path class="st2" d="M275.4,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C275.2,229.4,275.4,229.2,275.4,229z"/>
          </g>
          <g>
            <path class="st2" d="M288.4,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H288.4z"/>
          </g>
          <g>
            <path class="st2" d="M302.2,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C302.1,229.4,302.2,229.2,302.2,229z"/>
          </g>
          <g>
            <path class="st2" d="M315.6,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C315.5,229.4,315.6,229.2,315.6,229z"/>
          </g>
          <g>
            <path class="st2" d="M329.1,229v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8
              C328.9,229.4,329.1,229.2,329.1,229z"/>
          </g>
          <g>
            <path class="st2" d="M342.1,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H342.1z"/>
          </g>
          <g>
            <path class="st2" d="M355.6,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H355.6z"/>
          </g>
          <g>
            <path class="st2" d="M369,229.4c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H369z"/>
          </g>
          <g>
            <path class="st2" d="M372.2,221.3v7.8c0,0.2,0.2,0.4,0.4,0.4h8h1.8h8c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-8
              h-1.8h-8C372.4,220.9,372.2,221,372.2,221.3z"/>
          </g>
          <g>
            <path class="st2" d="M232.7,240.6c0,0.2,0.2,0.4,0.4,0.4h8.7h1.1h26c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-26
              h-1.1h-8.7c-0.2,0-0.4,0.2-0.4,0.4V240.6z"/>
          </g>
          <g>
            <path class="st2" d="M273.3,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H273.3z"/>
          </g>
          <g>
            <path class="st2" d="M296.6,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H296.6z"/>
          </g>
          <g>
            <path class="st2" d="M310,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H310z"/>
          </g>
          <g>
            <path class="st2" d="M323.4,241c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4h-9.8c-0.2,0-0.4,0.2-0.4,0.4v7.8
              c0,0.2,0.2,0.4,0.4,0.4H323.4z"/>
          </g>
          <g>
            <path class="st2" d="M327,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H327z"/>
          </g>
          <g>
            <path class="st2" d="M340.5,232.5c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H340.5z"/>
          </g>
          <g>
            <path class="st2" d="M382.4,232.5h-1.7h-26.8c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h26.8h1.7h8.1
              c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H382.4z"/>
          </g>
          <g>
            <path class="st2" d="M233.1,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H233.1z"/>
          </g>
          <g>
            <path class="st2" d="M246.5,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H246.5z"/>
          </g>
          <g>
            <path class="st2" d="M259.9,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H259.9z"/>
          </g>
          <g>
            <path class="st2" d="M273.3,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H273.3z"/>
          </g>
          <g>
            <path class="st2" d="M328.7,244H327h-40.2c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4H327h1.7h8.1
              c0.2,0,0.4-0.2,0.4-0.4v-7.8c0-0.2-0.2-0.4-0.4-0.4H328.7z"/>
          </g>
          <g>
            <path class="st2" d="M340.5,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H340.5z"/>
          </g>
          <g>
            <path class="st2" d="M353.9,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H353.9z"/>
          </g>
          <g>
            <path class="st2" d="M367.3,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H367.3z"/>
          </g>
          <g>
            <path class="st2" d="M380.7,244c-0.2,0-0.4,0.2-0.4,0.4v7.8c0,0.2,0.2,0.4,0.4,0.4h9.8c0.2,0,0.4-0.2,0.4-0.4v-7.8
              c0-0.2-0.2-0.4-0.4-0.4H380.7z"/>
          </g>
        </g>
      </g>
      <rect x="280.7" y="261.6" class="st1" width="63.2" height="35.1"/>
    </g>
    <g>
      <rect x="240" y="161.8" class="st2" width="143.5" height="8.7"/>
      <g>
        <path class="st2" d="M411.9,162.6c0,2.6-2,4.7-4.4,4.7H216c-2.4,0-4.4-2.1-4.4-4.7V56.7c0-2.6,2-4.7,4.4-4.7h191.5
          c2.4,0,4.4,2.1,4.4,4.7V162.6z"/>
        <rect x="216.9" y="60.1" class="st4" width="189.7" height="99.9"/>
        <polygon class="st5" points="258.1,159.3 240,59.7 258.1,59.7 				"/>
      </g>
    </g>
  </g>
  </g>
  <g id="coffee">
  <g id="coffee_1_">
    <g>
      <path class="st6" d="M534.1,218.8l5.1-5.1c-2.6-3.5-5.7-6.5-9.3-8.9l-4.8,4.8L534.1,218.8z"/>
      <circle class="st7" cx="508.5" cy="236.5" r="33.6"/>
      <circle class="st6" cx="508.5" cy="236.5" r="31.2"/>
      <circle class="st8" cx="508.5" cy="236.5" r="28.1"/>
      <circle class="st9" cx="508.5" cy="236.5" r="24.9"/>
      <circle class="st10" cx="508.5" cy="236.5" r="21"/>
      <circle class="st9" cx="508.5" cy="236.5" r="19.9"/>
      <path class="st11" d="M539.2,213.7l6.6-6.6l-9.1-9.1l-6.8,6.8C533.5,207.2,536.6,210.2,539.2,213.7z"/>
    </g>
    <circle class="st10" cx="508.5" cy="236.5" r="5"/>
    <circle class="st8" cx="508.5" cy="236.5" r="4.5"/>
    <path class="st12" d="M508.5,260.4L508.5,260.4c-13,0-23.6-10.5-23.9-23.4c0-0.3-0.2-0.5-0.5-0.5h-0.1c-0.1,0-0.2,0.1-0.3,0.1
      s-0.1,0.2-0.1,0.3c0.3,13.5,11.3,24.4,24.9,24.4l0,0V260.4z"/>
  </g>
  </g>
  <g id="smoke_1_">
  <g id="smoke">
    <path class="st13" d="M496.3,167.7c0,0,5.6,5.1,0,12.1c-5.6,7-0.5,11.3,0,12.4"/>
    <path class="st13" d="M508.9,160.9c0,0,8,7.3,0,17.2s-0.7,16.2,0,17.6"/>
    <path class="st13" d="M520.9,167.7c0,0,5.6,5.1,0,12.1c-5.6,7-0.5,11.3,0,12.4"/>
  </g>
  </g>
  <g id="ipad">
  <g id="ipad_1_">
    <path class="st2" d="M177.8,294.9c0.2,0.4,0,1-0.4,1.2l-92.2,44.7c-0.4,0.2-1,0-1.2-0.4L27.9,224.7c-1.3-2.8-0.2-6.1,2.6-7.4
      l83.7-40.6c2.8-1.3,6.1-0.2,7.4,2.6L177.8,294.9z"/>
    
      <rect x="54.4" y="200.3" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -102.2956 70.3137)" class="st14" width="94.8" height="114.7"/>
    
      <rect x="41.8" y="212.1" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -85.5084 56.8004)" class="st15" width="78.1" height="4.7"/>
    
      <rect x="53.4" y="231.3" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -99.0117 55.6345)" class="st16" width="36.2" height="23.8"/>
    
      <rect x="91.1" y="213" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -87.2538 70.2411)" class="st16" width="36.2" height="23.8"/>
    
      <rect x="59.3" y="250.2" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -99.5508 68.1041)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="61.3" y="254.2" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -101.1277 69.3735)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="63.3" y="258.3" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -102.7046 70.6429)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="65.3" y="262.4" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -104.2816 71.9123)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="67.2" y="266.4" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -105.8585 73.1817)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="69.2" y="270.5" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -107.4355 74.4511)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="71.2" y="274.5" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -109.0124 75.7205)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="73.2" y="278.6" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -110.5893 76.9898)" class="st17" width="78.1" height="0.9"/>
    
      <rect x="80.1" y="281.5" transform="matrix(0.8996 -0.4366 0.4366 0.8996 -116.1659 81.4789)" class="st16" width="78.1" height="23.8"/>
  </g>
  </g>
  <g id="coder">
  <g id="coder_1_">
    <rect x="258.1" y="31.3" class="st18" width="106.5" height="127.9"/>
    <rect x="258.1" y="23.6" class="st2" width="106.5" height="7.7"/>
    <g>
      <rect x="267.5" y="39.8" class="st19" width="8.8" height="2"/>
      <rect x="267.5" y="43.9" class="st20" width="13.8" height="2"/>
      <rect x="272.5" y="51.3" class="st21" width="26.1" height="2"/>
      <rect x="303.3" y="51.3" class="st22" width="26.6" height="2"/>
      <rect x="276.3" y="56" class="st20" width="9.3" height="2"/>
      <rect x="290" y="56" class="st22" width="17.5" height="2"/>
      <rect x="281.3" y="59.7" class="st21" width="22" height="2"/>
      <rect x="307.5" y="59.7" class="st21" width="9.1" height="2"/>
      <rect x="321.1" y="59.7" class="st19" width="17.3" height="2"/>
      <rect x="285.5" y="63.8" class="st21" width="26.5" height="2"/>
      <rect x="316.6" y="63.8" class="st22" width="39.3" height="2"/>
      <rect x="272.5" y="75.8" class="st22" width="17.5" height="2"/>
      <rect x="267.6" y="71.6" class="st21" width="17.9" height="2"/>
      <rect x="267.6" y="83.6" class="st19" width="13.3" height="2"/>
      <rect x="285.4" y="83.6" class="st21" width="31.2" height="2"/>
      <rect x="272.5" y="87.3" class="st21" width="31.2" height="2"/>
      <rect x="276.7" y="91.4" class="st22" width="13.3" height="2"/>
      <rect x="294.2" y="91.4" class="st23" width="18.1" height="2"/>
      <rect x="316.6" y="91.4" class="st21" width="13.3" height="2"/>
      <rect x="280.9" y="95.5" class="st19" width="4.5" height="2"/>
      <rect x="290" y="95.5" class="st21" width="17.6" height="2"/>
      <rect x="312.3" y="95.5" class="st21" width="26.4" height="2"/>
      <rect x="285.1" y="99.2" class="st22" width="31.2" height="2"/>
      <rect x="267.6" y="107" class="st23" width="9" height="2"/>
      <rect x="272.5" y="111.1" class="st19" width="17.6" height="2"/>
      <rect x="294.2" y="111.1" class="st22" width="53.2" height="2"/>
      <rect x="276.9" y="115.2" class="st21" width="26.4" height="2"/>
      <rect x="307.6" y="115.2" class="st21" width="22.3" height="2"/>
      <rect x="281" y="119.3" class="st21" width="35.6" height="2"/>
      <rect x="276.9" y="127.2" class="st21" width="44.6" height="2"/>
      <rect x="281.3" y="130.8" class="st19" width="22.4" height="2"/>
      <rect x="307.5" y="130.8" class="st22" width="9.6" height="2"/>
      <rect x="321.5" y="130.8" class="st23" width="35" height="2"/>
      <rect x="285.3" y="135.4" class="st21" width="22.9" height="2"/>
      <rect x="312.3" y="135.4" class="st21" width="13.7" height="2"/>
      <rect x="330.4" y="135.4" class="st21" width="8.6" height="2"/>
      <rect x="268.2" y="143.1" class="st19" width="26.9" height="2"/>
      <rect x="273.1" y="147.2" class="st21" width="17.7" height="2"/>
      <rect x="295" y="147.2" class="st22" width="17.7" height="2"/>
    </g>
  </g>
  </g>
  </svg>
  </div>
</div>
  `;
  // registerListener
  rootElement.innerHTML = contentnewElement;

  const section = rootElement.querySelector('.feed-logout');
  const navigateFeed = rootElement.querySelector('#goFeed');
  const hamburger = rootElement.querySelector('#hamburger');
  const navLinks = rootElement.querySelector('.navbar-links');
  const links = rootElement.querySelectorAll('.navbar-links li');

  // NAV LINKS
  navigateFeed.addEventListener('click', () => {
    changePage('/');
  });

  // LOGOUT COMPONENT
  section.appendChild(profile());

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach((link) => {
      link.classList.toggle('fade');
    });
  });

  const inputImg = rootElement.querySelector('#file-input');
  const userPhoto = rootElement.querySelector('#user-photo');
  const userName = rootElement.querySelector('#name-user');

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      userPhoto.src = user.photoURL
        || '../../img/avatar.jpg';
      userName.innerHTML = user.displayName;
    }
  });

  const sendImg = () => {
    const ref = firebase.storage().ref('User-images');
    inputImg.onchange = (event) => {
      const photo = event.target.files[0];
      const reader = new FileReader();
      const uid = firebase.database().ref().push().key;

      reader.readAsDataURL(photo);
      reader.onload = function () {
        const base64 = reader.result.split('base64,')[1];

        ref
          .child(uid)
          .putString(base64, 'base64', { contentType: 'image/png' })
          .then((snapshot) => {
            console.log('snapshot', snapshot);
            ref
              .child(uid)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                userPhoto.src = url;
                firebase.auth().currentUser.updateProfile({
                  photoURL: url,
                });
              });
          });
      };
    };
  };

  sendImg();

  return rootElement;
};

export default createPage;
