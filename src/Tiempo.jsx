import React, { useEffect } from 'react';
import './stilos/tiempo.css';
import Chart from 'chart.js/auto';

const WeatherForecast = () => {
    // useEffect(() => {
    //     const ctx = document.getElementById('weatherChart').getContext('2d');

    //     // Destruir el gráfico existente si ya existe
    //     if (window.weatherChart) {
    //         window.weatherChart.destroy();
    //     }

    //     // Crear un nuevo gráfico y guardar la referencia en window.weatherChart
    //     window.weatherChart = new Chart(ctx, {
    //         type: 'line',
    //         data: {
    //             labels: ['Ahora', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM', '2 AM', '4 AM', '6 AM', '8 AM'],
    //             datasets: [{
    //                 label: 'Temperatura (°C)',
    //                 data: [9, 11, 12, 13, 12, 10, 8, 7, 6, 5, 5, 4],
    //                 borderColor: 'rgba(255, 255, 255, 0.8)',
    //                 backgroundColor: 'rgba(255, 255, 255, 0.1)',
    //                 fill: true,
    //                 tension: 0.4,
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 x: {
    //                     display: false
    //                 },
    //                 y: {
    //                     display: false
    //                 }
    //             },
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                 }
    //             },
    //             elements: {
    //                 point: {
    //                     radius: 0
    //                 }
    //             }
    //         }
    //     });
    // }, []);

    return (
        <div className="App">
            <div className="weather-container">
                <div className="weather-header">
                    <span>Resumen</span>
                    <span>Por horas</span>
                    <span>Más detalles</span>
                </div>
                <div className="weather-content">
                    <div className="weather-now">
                        <span>Ahora</span>
                    </div>
                    <div className="weather-forecast">
                    <div className="weather-hour">
                            <span>10°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="cloudy"/>
                            <span className='lluvia'>3%</span>
                            <span>Ahora</span>
                        </div>
                        <div className="weather-hour">
                            <span>11°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="cloudy"/>
                            <span className='lluvia'>3%</span>
                            <span>12 PM</span>
                        </div>
                        <div className="weather-hour">
                            <span>12°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="cloudy"/>
                            <span className='lluvia'>3%</span>
                            <span>2 PM</span>
                        </div>
                        <div className="weather-hour">
                            <span>13°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="partly cloudy"/>
                            <span className='lluvia'>4%</span>
                            <span>4 PM</span>
                        </div>
                        <div className="weather-hour">
                            <span>12°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="partly cloudy"/>
                            <span className='lluvia'>5%</span>
                            <span>6 PM</span>
                        </div>
                        <div className="weather-hour">
                            <span>10°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="clear night"/>
                            <span className='lluvia'>2%</span>
                            <span>8 PM</span>
                        </div>
                        <div className="weather-hour">
                            <span>8°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="clear night"/>
                            <span className='lluvia'>1%</span>
                            <span>10 PM</span>
                        </div>
                        <div className="weather-hour">
                            <span>7°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="clear night"/>
                            <span className='lluvia'>1%</span>
                            <span>12 AM</span>
                        </div>
                        <div className="weather-hour">
                            <span>6°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="clear night"/>
                            <span className='lluvia'>1%</span>
                            <span>2 AM</span>
                        </div>
                        <div className="weather-hour">
                            <span>5°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="clear night"/>
                            <span className='lluvia'>1%</span>
                            <span>4 AM</span>
                        </div>
                        <div className="weather-hour">
                            <span>5°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="clear night"/>
                            <span className='lluvia'>1%</span>
                            <span>6 AM</span>
                        </div>
                        <div className="weather-hour">
                            <span>4°</span>
                            <img src="../src/assets/estaciones_tiempo/clear.png" alt="sunny"/>
                            <span className='lluvia'>0%</span>
                            <span>8 AM</span>
                        </div>
                    </div>
                    <div className="weather-graph">
                        <canvas id="weatherChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherForecast;