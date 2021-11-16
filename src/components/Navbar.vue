<template>
  <div class="navbars">
    <header>
      <router-link to="/">貓咪王國</router-link>
      <input type="checkbox" name="navbar-toggle" id="navbar-toggle" />
    </header>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/explore">explore</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/favorite">favorite</router-link>
        </li>
      </ul>
    </nav>
    <label for="navbar-toggle" class="navabr-toggle-label"
      ><span class="hamburger"></span
    ></label>
  </div>
</template>
