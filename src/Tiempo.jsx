import React, { useEffect, useRef } from 'react';
import './stilos/tiempo.css';
import Chart from 'chart.js/auto';

const WeatherForecast = () => {
    const chartContainerRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartContainerRef.current.getContext('2d');

        // Destruir el gráfico existente si ya existe
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Crear un nuevo gráfico
        const newChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Ahora', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM', '12 AM', '2 AM', '4 AM', '6 AM', '8 AM'],
                datasets: [{
                    label: 'Temperatura (°C)',
                    data: [10, 11, 12, 13, 12, 10, 8, 7, 6, 5, 5, 4],
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 2, // Tamaño de los puntos
                    pointBackgroundColor: 'rgba(255, 255, 255, 0.8)', // Color de fondo de los puntos
                    pointBorderColor: 'rgba(255, 255, 255, 0.8)', // Color del borde de los puntos
                    pointHoverRadius: 1, // Tamaño de los puntos al pasar el mouse
                    pointHoverBackgroundColor: 'rgba(255, 255, 255, 1)', // Color de fondo de los puntos al pasar el mouse
                    pointHoverBorderColor: 'rgba(255, 255, 255, 1)', // Color del borde de los puntos al pasar el mouse
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        display: false
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });

        // Guardar la instancia del gráfico en useRef para futuras referencias
        chartInstanceRef.current = newChartInstance;

        // Limpiar el gráfico al desmontar el componente
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, []);

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
                        <canvas ref={chartContainerRef}></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherForecast;
