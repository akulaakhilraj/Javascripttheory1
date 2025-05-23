// Real-World Travel Booking App Promise Examples with Real Fetch API Example

// Simulated API function
function fakeApi(name, delay, fail = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fail) reject(`${name} failed`);
        else resolve(`${name} data`);
      }, delay);
    });
  }
  
  // 1. Promise.all (Fail fast if any API fails)
  async function loadBookingPage() {
    try {
      const [user, flights, hotels, weather] = await Promise.all([
        fakeApi("UserAPI", 1000),
        fakeApi("FlightsAPI", 1500),
        fakeApi("HotelsAPI", 1200),
        fakeApi("WeatherAPI", 800)
      ]);
      console.log("[Booking Page Loaded]", { user, flights, hotels, weather });
    } catch (err) {
      console.error("[Booking Page Error]", err);
    }
  }
  
  // 2. Promise.allSettled (Show partial results)
  async function loadDashboardWidgets() {
    const results = await Promise.allSettled([
      fakeApi("UserAPI", 1000),
      fakeApi("FlightsAPI", 1500),
      fakeApi("HotelsAPI", 1200, true), // simulate failure
      fakeApi("WeatherAPI", 800)
    ]);
  
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`✅ Widget ${index + 1}:`, result.value);
      } else {
        console.warn(`❌ Widget ${index + 1} failed:`, result.reason);
      }
    });
  }
  
  // 3. Promise.race (Use the fastest API response)
  async function fetchWeatherWithRace() {
    try {
      const result = await Promise.race([
        fakeApi("WeatherAPI-A", 800),
        fakeApi("WeatherAPI-B", 600),
        fakeApi("WeatherAPI-C", 1200)
      ]);
      console.log("[Fastest Weather API]", result);
    } catch (err) {
      console.error("[Weather Fetch Error]", err);
    }
  }
  
  // 4. Promise.race with timeout (Prevent long wait)
  async function fetchFlightWithTimeout() {
    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject("Request timed out"), 1000)
    );
  
    try {
      const data = await Promise.race([
        fakeApi("FlightsAPI", 1500), // slow on purpose
        timeout
      ]);
      console.log("[Flight Result]", data);
    } catch (err) {
      console.error("[Timeout/Error]", err);
    }
  }
  
  // 5. Real Fetch API Example (JSONPlaceholder)
  async function fetchRealUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log("[Real API Users]", data.map(user => user.name));
    } catch (err) {
      console.error("[Real API Error]", err);
    }
  }
  
  // Execute all examples sequentially
  startAll();
  
  async function startAll() {
    console.log("Running Promise.all...");
    await loadBookingPage();
    console.log("\nRunning Promise.allSettled...");
    await loadDashboardWidgets();
    console.log("\nRunning Promise.race (Fastest)...");
    await fetchWeatherWithRace();
    console.log("\nRunning Promise.race (Timeout)...");
    await fetchFlightWithTimeout();
    console.log("\nRunning Real API Fetch...");
    await fetchRealUsers();
  }



  console.log(this)
  console.log(global);