import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
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

const Wind = ({ data }) => {
    return (
        <Line
          data={{
                labels: data && data.time,
                datasets: [
                    {
                        label: 'wind',
                        data: data && data.wind,
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
                        beginAtZero: true,
                        ticks: {
                            color: '#AED7D9',
                            font: {
                                size: 10,
                            },
                            stepSize: 10,
                        callback: value => value + 'km/h',
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
 
export default Wind;