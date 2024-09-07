import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const Humidity = ({ data }) => {
    return (
        <Line
          data={{
                labels: data && data.time,
                datasets: [
                {
                    label: 'Humidity',
                    data: data && data.humidity,
                    borderWidth: 2,
                    borderColor: '#CAE8EA',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                },
                ],
            }}
            options={{
                // responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        max: 100,
                        ticks: {
                            color: '#AED7D9',
                            font: {
                                size: 10,
                            },
                            stepSize: 20,
                        callback: value => value + '%',
                        },
                    },
                    x: {
                        ticks: {
                            color: '#AED7D9',
                            font: {
                                size: 10,
                            },
                            maxTicksLimit: 6
                        },
                    },
                },
            }}
        />
    );
}
 
export default Humidity;