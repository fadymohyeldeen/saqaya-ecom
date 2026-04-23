<!-- Purpose: Renders the site-wide footer.
  Used In: src/layouts/DefaultLayout.vue -->
<template>
  <footer class="footer">
    <div class="footer__container">
      <!--------------- Subscribe ------------------->
      <div class="footer__col">
        <div class="footer__logo">Exclusive</div>
        <h3 class="footer__heading">Subscribe</h3>
        <p class="footer__text">Get 10% off your first order</p>
        <div class="footer__input-wrap">
          <input type="email" placeholder="Enter your email" />
          <img src="@/assets/icons/footer/icon-arrow.svg" alt="Arrow Icon" />
        </div>
      </div>

      <!--------------- Support ------------------->
      <div class="footer__col">
        <h3 class="footer__heading">Support</h3>
        <ul class="footer__list">
          <li v-for="item in supportInfo" :key="item">{{ item }}</li>
        </ul>
      </div>

      <!--------------- Account ------------------->
      <div class="footer__col">
        <h3 class="footer__heading">Account</h3>
        <ul class="footer__list">
          <li v-for="link in accountLinks" :key="link.label">
            <a :href="link.path" :aria-label="link.label" @click.prevent>
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <!--------------- Quick Link ------------------->
      <div class="footer__col">
        <h3 class="footer__heading">Quick Link</h3>
        <ul class="footer__list">
          <li v-for="link in quickLinks" :key="link.label">
            <router-link :to="link.path">{{ link.label }}</router-link>
          </li>
        </ul>
      </div>

      <!--------------- Download App ------------------->
      <div class="footer__col">
        <h3 class="footer__heading">Download App</h3>
        <p class="footer__text footer__text--small">Save $3 with App New User Only</p>
        <div class="footer__app">
          <div class="footer__qr">
            <img :src="qrCode" alt="QR Code" />
          </div>
          <div class="footer__stores">
            <div class="footer__store">
              <img :src="googlePlay" alt="Google Play" />
            </div>
            <div class="footer__store">
              <img :src="appStore" alt="App Store" />
            </div>
          </div>
        </div>

        <!--------------- Socials ------------------->
        <div class="footer__socials">
          <a
            v-for="social in socialIcons"
            :key="social.alt"
            :href="social.path"
            :aria-label="social.alt"
            @click.prevent
          >
            <img :src="social.src" :alt="social.alt" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© Copyright Exclusive 2022. All right reserved</p>
    </div>
  </footer>
</template>

<script setup>
  import appStore from '@/assets/icons/footer/icon-app-store.svg'
  import facebook from '@/assets/icons/footer/icon-facebook.svg'
  import googlePlay from '@/assets/icons/footer/icon-google-play.svg'
  import instagram from '@/assets/icons/footer/icon-instagram.svg'
  import linkedin from '@/assets/icons/footer/icon-linkedin.svg'
  import qrCode from '@/assets/icons/footer/icon-qr.svg'
  import twitter from '@/assets/icons/footer/icon-twitter.svg'

  const supportInfo = [
    '111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.',
    'exclusive@gmail.com',
    '+88015-88888-9999',
  ]
  const accountLinks = [
    { label: 'My Account', path: '#' },
    { label: 'Login / Register', path: '#' },
    { label: 'Cart', path: '#' },
    { label: 'Wishlist', path: '#' },
  ]
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
    { label: 'About', path: '/about-us' },
  ]
  const socialIcons = [
    { src: facebook, alt: 'Facebook', path: '#' },
    { src: twitter, alt: 'Twitter', path: '#' },
    { src: instagram, alt: 'Instagram', path: '#' },
    { src: linkedin, alt: 'LinkedIn', path: '#' },
  ]
</script>

<style scoped>
  .footer {
    background: var(--color-bg-footer);
    color: var(--color-text-light);
    padding: 40px 0 0;
  }

  .footer__container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding-mobile);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  .footer__col {
    flex-shrink: 0;
    width: 100%;
  }

  .footer__logo {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.03em;
    color: var(--color-text-light);
    margin-bottom: 24px;
  }

  .footer__heading {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: var(--color-text-light);
    margin-bottom: 24px;
  }

  .footer__text {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-text-light);
    margin-bottom: 16px;
  }

  .footer__text--small {
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 8px;
  }

  .footer__input-wrap {
    display: flex;
    align-items: center;
    border: 1.5px solid var(--color-text-light);
    border-radius: var(--radius-sm);
    padding: 12px 16px;
    gap: 30px;
    width: 100%;
    height: 48px;
  }

  .footer__input-wrap input {
    flex: 1;
    min-width: 0;
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--font-body);
    font-size: 16px;
    color: var(--color-text-light);
  }

  .footer__input-wrap input::placeholder {
    color: var(--color-text-light);
    opacity: 0.4;
  }

  .footer__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footer__list li,
  .footer__list a {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-text-light);
    text-decoration: none;
  }

  .footer__list a:hover {
    text-decoration: underline;
  }

  .footer__app {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  .footer__qr {
    width: 80px;
    height: 80px;
    background: var(--color-bg);
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: var(--font-body);
    border-radius: var(--radius-sm);
  }

  .footer__stores {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .footer__store {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .footer__socials {
    display: flex;
    gap: 30px;
  }

  .footer__socials a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer__bottom {
    padding-top: 32px;
    margin-top: 60px;
    text-align: center;
  }

  .footer__bottom p {
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 400;
    color: var(--color-text-light);
    opacity: 0.3;
    padding-bottom: 24px;
  }

  @media (min-width: 768px) {
    .footer {
      padding: 80px 0 0;
    }

    .footer__container {
      padding: 0 var(--container-padding-tablet);
      flex-direction: row;
      flex-wrap: wrap;
      gap: 40px;
    }

    .footer__col {
      width: auto;
    }

    .footer__input-wrap {
      width: 217px;
    }
  }

  @media (min-width: 1024px) {
    .footer__container {
      padding: 0 var(--container-padding);
      gap: 87px;
      flex-wrap: nowrap;
    }

    .footer__col:nth-child(1) {
      width: 217px;
    }

    .footer__col:nth-child(2) {
      width: 175px;
    }

    .footer__col:nth-child(3) {
      width: 123px;
    }

    .footer__col:nth-child(4) {
      width: 109px;
    }

    .footer__col:nth-child(5) {
      width: 198px;
    }
  }
</style>
