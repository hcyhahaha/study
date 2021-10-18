<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/p1">数组增删</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav a.router-link-exact-active {
  color: #ff5252;
  font-weight: bold;
}
</style>
