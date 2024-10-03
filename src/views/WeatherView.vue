<template>
    <div class="container">
      <div class="header">
        <h1>WEATHER APP</h1>
        <div class="search-bar">
          <input
            type="text"
            v-model="city"
            placeholder="Enter city name"
            class="search-input"
          />
          <button @click="searchByCity" class="search-button">Search</button>
        </div>
      </div>
  
      <main>
        <!-- If there are no data returned, then skip rendering the information -->
        <div v-if="weatherData">
          <!-- Display the weather data attribute returned from API -->
          <h2>
            {{ weatherData.name }}, {{ weatherData.sys.country }}
          </h2>
          <div>
            <!-- The image source of the weather icon will be coming from the computed property iconUrl -->
            <img :src="iconUrl" alt="Weather Icon" />
            <p>{{ temperature }} °C</p>
          </div>
          <!-- weather[0] means the current weather, the way we need to obtain data depends on how the API JSON data looks -->
          <span>{{ weatherData.weather[0].description }}</span>
        </div>
      </main>
    </div>
  </template>
  

<script>
  import axios from "axios";

  const apikey = "ddcba068b5a470e7389d218c42446d33";

  export default {
    name: "App",
    data() {
      return {
        city: "",
        weatherData: null,
        hourlyForecast: [],
        dailyForecast: [],
      };
    },
    computed: {
      temperature() {
        return this.weatherData
          ? Math.floor(this.weatherData.main.temp - 273)
          : null;
      },
      iconUrl() {
        return this.weatherData
          ? `http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
          : null;
      },
    },
    mounted() {
      this.fetchCurrentLocationWeather();
    },
    methods: {
      async fetchCurrentLocationWeather() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
            await this.fetchWeatherData(url);
          });
        }
      },
      async fetchWeatherData(url) {
        try {
          const response = await axios.get(url);
          this.weatherData = response.data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      async searchByCity() {
        if (this.city) {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
          await this.fetchWeatherData(url);
        }
      },
      // Fetch hourly forecast based on the current city's latitude and longitude
      async fetchHourlyForecast() {
        if (this.weatherData) {
          const { lat, lon } = this.weatherData.coord;
          const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
          try {
            const response = await axios.get(url);
            this.hourlyForecast = response.data.list;
          } catch (error) {
            console.error("Error fetching hourly forecast:", error);
          }
        }
      },
      // Fetch daily forecast based on the current city's latitude and longitude
      async fetchDailyForecast() {
        if (this.weatherData) {
          const { lat, lon } = this.weatherData.coord;
          const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&appid=${apikey}&cnt=7&units=metric`;
          try {
            const response = await axios.get(url);
            this.dailyForecast = response.data.list;
          } catch (error) {
            console.error("Error fetching daily forecast:", error);
          }
        }
      }
    },
    watch: {
      // Watch for changes in weather data and trigger forecast fetches
      weatherData(newVal) {
        if (newVal) {
          this.fetchHourlyForecast();
          this.fetchDailyForecast();
        }
      }
    }
  };
</script>
