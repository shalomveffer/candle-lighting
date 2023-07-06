<template>
  <button class="button"  @click="getTimesBs">Bet Shemesh</button>
  <button class="button" @click="getTimesJlm">Jerusalem</button>
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
      shabbosTimes: null,
      urlLocation: 295432
    }
  },
  mounted () {
    const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=${this.urlLocation}&M=on`
      fetch(url)
  .then(response => response.json())
  .then(data => this.shabbosTimes = data)
  
  },
  methods: {
    formatDate(dateString) {
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', options);
  },
   getTimesBs () {
    this.urlLocation = 295432
    const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=${this.urlLocation}&M=on`
    fetch(url)
  .then(response => response.json())
  .then(data => this.shabbosTimes = data)
   },
   getTimesJlm () {
    this.urlLocation = 281184
    const url = `https://www.hebcal.com/shabbat?cfg=json&geonameid=${this.urlLocation}&M=on`
    fetch(url)
  .then(response => response.json())
  .then(data => this.shabbosTimes = data)
   }
},
  
  
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
.button {
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background-color: rgb(246, 196, 71);
  font-family: 'Poppins', sans-serif;
}
</style>
