// src/App.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';
import './styles/base.css';

const Home = lazy(() => import('./views/Home'));
const CityWeather = lazy(() => import('./views/CityWeather'));

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <Router>
          <Layout>
            <Suspense 
              fallback={
                <div className="loading-container">
                  <LoadingSpinner />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/city/:cityName" element={<CityWeather />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;