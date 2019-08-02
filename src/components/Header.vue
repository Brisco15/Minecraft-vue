<template>

    <div class="header">
      <div class="header__top">
        <div class="wrapper">
          <div>Подключайся и играй на наших серверах</div>
          <div class="icon-menu"><a href="#">
              <div class="sprite sprite-icon-fb"></div></a><a href="#">
              <div class="sprite sprite-icon-vk"></div></a><a href="#">
              <div class="sprite sprite-icon-en-lang"></div></a></div>
        </div>
      </div>
      <div class="wrapper">
        <div class="row">
          <div class="header__column header__column_logo"><a class="logo" href="#"><img src="img/minecraft-logo.png" alt=""></a></div>
          <div class="header__column header__column_contacts">
            <div class="contacts">
              <div class="phone-list">
                <div class="phone-note">
                  <div class="phone-note__title">admin</div>
                  <div class="phone-note__numbers">
                    <div><a href="tel:undefined">+38(068)333-22-10</a>
                    </div>
                    <div><a href="tel:undefined">+38(099)750-22-10</a>
                    </div>
                  </div>
                </div>
                <div class="phone-note">
                  <div class="phone-note__title">donat</div>
                  <div class="phone-note__numbers">
                    <div><a href="tel:undefined">+38(068)333-22-10</a>
                    </div>
                  </div>
                </div>
              </div>Skype: <a href="skype:minecraft-km7">minecraft-km7</a>
            </div>
          </div>
          <div class="header__column header__column_bts"><a class="button" href="#">some text</a><a class="button" href="#">another text</a></div>
          <div class="header__column header__column_img"><img src="img/minecraft-logo2.png" alt=""></div>
        </div>
      </div>
      <div class="header__menu">
        <div class="wrapper">
          <ul>
            <li class="active"><router-link to="menu">menu</router-link></li>
            <li><router-link to="/about_games">об игри</router-link></li>
            <li><router-link to="/our_team">наша команда</router-link></li>
            <li><router-link to="/servers" >список серверов</router-link></li>
            <li><router-link to="/donations">донат</router-link></li>
          </ul>
        </div>
      </div>
    </div>

</template>
<script>
  export default {

  }
</script>