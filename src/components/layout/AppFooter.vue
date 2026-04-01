<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Column 1: Subscribe -->
      <div class="footer__col">
        <div class="footer__logo">Exclusive</div>
        <h3 class="footer__heading">Subscribe</h3>
        <p class="footer__text">Get 10% off your first order</p>
        <div class="footer__input-wrap">
          <input type="email" placeholder="Enter your email" />
          <img src="@/assets/icons/arrow.svg" alt="Arrow Icon" />
        </div>
      </div>

      <!-- Column 2: Support -->
      <div class="footer__col">
        <h3 class="footer__heading">Support</h3>
        <ul class="footer__list">
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>

      <!-- Column 3: Account -->
      <div class="footer__col">
        <h3 class="footer__heading">Account</h3>
        <ul class="footer__list">
          <li><a href="#">My Account</a></li>
          <li><a href="#">Login / Register</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </div>

      <!-- Column 4: Quick Link -->
      <div class="footer__col">
        <h3 class="footer__heading">Quick Link</h3>
        <ul class="footer__list">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Column 5: Download App -->
      <div class="footer__col">
        <h3 class="footer__heading">Download App</h3>
        <p class="footer__text footer__text--small">
          Save $3 with App New User Only
        </p>
        <div class="footer__app">
          <div class="footer__qr">
            <img src="@/assets/icons/qr.svg" alt="QR Code" />
          </div>
          <div class="footer__stores">
            <div class="footer__store">
              <img src="@/assets/icons/google-play.svg" alt="Google Play" />
            </div>
            <div class="footer__store">
              <img src="@/assets/icons/app-store.svg" alt="App Store" />
            </div>
          </div>
        </div>
        <div class="footer__socials">
          <a href="#" aria-label="Facebook">
            <img src="@/assets/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="@/assets/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="@/assets/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="@/assets/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© Copyright Rimel 2022. All right reserved</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000000;
  color: #fafafa;
  padding: 80px 0 0;
}

.footer__container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 135px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 87px;
}

.footer__col {
  flex-shrink: 0;
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

.footer__logo {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.03em;
  color: #fafafa;
  margin-bottom: 24px;
}

.footer__heading {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #fafafa;
  margin-bottom: 24px;
}

.footer__text {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
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
  border: 1.5px solid #fafafa;
  border-radius: 4px;
  padding: 12px 16px;
  gap: 30px;
  width: 217px;
  height: 48px;
}

.footer__input-wrap input {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #fafafa;
}

.footer__input-wrap input::placeholder {
  color: #fafafa;
  opacity: 0.4;
}

.footer__input-wrap svg {
  cursor: pointer;
  flex-shrink: 0;
}

.footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__list li,
.footer__list a {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fafafa;
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
  background: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  border-radius: 4px;
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
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #fafafa;
  opacity: 0.3;
  padding-bottom: 24px;
}

/* Tablet */
@media (max-width: 1024px) {
  .footer__container {
    padding: 0 40px;
    gap: 40px;
    flex-wrap: wrap;
  }

  .footer__col:nth-child(1),
  .footer__col:nth-child(2),
  .footer__col:nth-child(3),
  .footer__col:nth-child(4),
  .footer__col:nth-child(5) {
    width: auto;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 0;
  }

  .footer__container {
    padding: 0 16px;
    gap: 32px;
    flex-direction: column;
  }

  .footer__col:nth-child(1),
  .footer__col:nth-child(2),
  .footer__col:nth-child(3),
  .footer__col:nth-child(4),
  .footer__col:nth-child(5) {
    width: 100%;
  }

  .footer__input-wrap {
    width: 100%;
  }
}
</style>

<script>
export default {
  name: "AppFooter",
};
</script>
