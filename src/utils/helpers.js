// src/utils/helpers.js

// Processes forecast data into daily format
export const processForecast = (forecastData) => {
  const dailyForecast = {};
  
  forecastData.list.forEach(item => {
    const date = item.dt_txt.split(' ')[0];
    if (!dailyForecast[date]) {
      dailyForecast[date] = {
        minTemp: item.main.temp_min,
        maxTemp: item.main.temp_max,
        conditions: [],
        timestamp: item.dt
      };
    } else {
      dailyForecast[date].minTemp = Math.min(dailyForecast[date].minTemp, item.main.temp_min);
      dailyForecast[date].maxTemp = Math.max(dailyForecast[date].maxTemp, item.main.temp_max);
    }
    dailyForecast[date].conditions.push(item.weather[0]);
  });
  
  const forecastArray = Object.entries(dailyForecast)
    .sort((a, b) => a[1].timestamp - b[1].timestamp)
    .slice(0, 5);
  
  return forecastArray.map(([date, data]) => {
    const conditionCount = {};
    let maxCount = 0;
    let mainCondition = '';
    
    data.conditions.forEach(cond => {
      conditionCount[cond.main] = (conditionCount[cond.main] || 0) + 1;
      if (conditionCount[cond.main] > maxCount) {
        maxCount = conditionCount[cond.main];
        mainCondition = cond.main;
      }
    });
    
    const icon = data.conditions[Math.floor(data.conditions.length/2)].icon;
    
    return {
      date,
      minTemp: data.minTemp,
      maxTemp: data.maxTemp,
      condition: mainCondition,
      icon
    };
  });
};

// Format date to readable string
export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
};

// Format time to HH:MM
export const getTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });
};