<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/" class="header__logo">Exclusive</router-link>
      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <router-link to="/" @click.native="menuOpen = false">Home</router-link>
        <router-link to="/contact" @click.native="menuOpen = false"
          >Contact</router-link
        >
        <router-link to="/about-us" @click.native="menuOpen = false"
          >About</router-link
        >
      </nav>

      <div class="header__actions">
        <div
          class="header__search"
          :class="{ 'header__search--open': searchOpen }"
        >
          <input type="text" placeholder="What are you looking for?" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            @click="searchOpen = !searchOpen"
          >
            <circle cx="11" cy="11" r="7" stroke="#000" stroke-width="1.5" />
            <path
              d="M16.5 16.5L21 21"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div class="header__cart">
          <img src="../assets/cart.svg" alt="Cart" />
        </div>

        <button class="header__hamburger" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header__container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 135px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.03em;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
}

.header__nav {
  display: flex;
  gap: 48px;
}

.header__nav a {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-decoration: none;
}

.header__nav a:hover,
.header__nav a.router-link-exact-active {
  text-decoration: underline;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header__search {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 7px 12px 7px 20px;
  width: 243px;
  height: 38px;
}

.header__search input {
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: #000000;
  outline: none;
}

.header__search input::placeholder {
  opacity: 0.5;
}

.header__search svg {
  cursor: pointer;
  flex-shrink: 0;
}

.header__cart {
  position: relative;
  cursor: pointer;
}

.header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.header__hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #000000;
  border-radius: 2px;
}

/* Tablet: 768px - 1024px */
@media (max-width: 1024px) {
  .header__container {
    padding: 0 40px;
  }

  .header__search {
    width: 180px;
  }

  .header__nav {
    gap: 24px;
  }
}

/* Mobile: < 768px */
@media (max-width: 768px) {
  .header__container {
    padding: 0 16px;
    height: 60px;
    position: relative;
  }

  .header__logo {
    font-size: 20px;
  }

  .header__nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #ffffff;
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 99;
  }

  .header__nav--open {
    display: flex;
  }

  .header__nav a {
    padding: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    font-size: 14px;
  }

  .header__hamburger {
    display: flex;
  }

  .header__cart svg {
    width: 26px;
    height: 26px;
  }
}
</style>

<!--------------------------------->

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuOpen: false,
      searchOpen: false,
    };
  },
};
</script>
