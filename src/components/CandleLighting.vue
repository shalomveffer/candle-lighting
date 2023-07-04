<template>
  <div class="shabbos-times" v-if="shabbosTimes">
    <div class="info">
      <h1 class="title">{{ shabbosTimes.items[3].hebrew}}</h1>
      <h2 class="location">{{ shabbosTimes.location.title }}</h2>
      <h3 class="date">{{ formatDate(shabbosTimes.items[3].date) }}</h3>
      <p class="item-title">{{ shabbosTimes.items[3].title }}</p>
    </div>  
    <img class="image" src="../assets/candles.gif" alt="candles">
  </div>
</template>

<script>
export default {
  data() {
    return {
      shabbosTimes: null
    }
  },
  mounted () {
   fetch('https://www.hebcal.com/shabbat?cfg=json&geonameid=281184&M=on')
  .then(response => response.json())
  .then(data => this.shabbosTimes = data)
  
  },
  methods: {
    formatDate(dateString) {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options);
  }},
  name: 'HelloWorld',
  props: {
    msg: String
  }
  
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.shabbos-times {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin: 0 auto;
  max-width: 320px;
  height: 480px;
  color: rgb(235, 217, 12);
  background-color: rgb(68, 50, 19);
  border-radius: 20px;
  background: linear-gradient(rgba(118, 75, 35, 0.8), rgba(145, 152, 229, 0.8)), url(../assets/western-wall.jpg);
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);


}

.date {
  background: white;
  color: black;
}

.title {
  font-size: 34px;
  font-weight: bold;
  padding-top: 40px;
}

.location {
  font-size: 16px;
  color: rgb(255, 255, 255);
  
}

.item-title {
  font-size: 24px;
  font-family:Arial, Helvetica, sans-serif
  
}

.image {
  width: 320px;
  margin-top: 20px;
}
</style>
