<template>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-inverse fixed-top bg-inverse ev-appnav">
        <a class="navbar-brand" href="#"><img src="../../assets/logo.png" class="ev-appnav__logo"></a>
        <div class="navbar-nav">
            <div class="nav-item active">
                <router-link to="/" class="nav-link" href="#">Home</router-link>
            </div>
            </div>
                <router-link to="/migration" class="nav-link" href="#">Migration Example</router-link>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>

nav {
    background-color: black;
}

/* 
  You can use BEM style even though you are scoped. Helps to reason about
  your styles.
*/
.ev-appnav__logo {
  width: 40px;
}
.ev-appnav__search {
  margin-right: 10px;
}
.ev-appnav__logout {
  margin-top: 1px;
}
</style>