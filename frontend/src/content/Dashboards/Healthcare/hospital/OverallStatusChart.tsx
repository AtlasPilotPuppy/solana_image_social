import { FC } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

interface OverallStatusChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const OverallStatusChart: FC<OverallStatusChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Patients',
        backgroundColor: 'transparent',
        data: dataProp.previous,
        borderColor: theme.palette.primary.main,
        pointBorderColor: theme.palette.common.white,
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: theme.palette.primary.main,
        pointHoverBorderColor: theme.palette.common.white,
        pointHoverColor: theme.palette.primary.main,
        pointHoverBorderWidth: 4,
        pointBackgroundColor: theme.palette.primary.main,
        type: 'line',
        lineTension: 0.01
      },
      {
        label: 'Consultations',
        backgroundColor: 'transparent',
        data: dataProp.current,
        borderColor: theme.colors.success.main,
        pointBorderColor: theme.palette.common.white,
        pointBorderWidth: 3,
        lineTension: 0.01,

        pointRadius: 6,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: theme.colors.success.main,
        pointHoverBorderColor: theme.palette.common.white,
        pointHoverColor: theme.colors.success.main,
        pointHoverBorderWidth: 4,
        pointBackgroundColor: theme.colors.success.main
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 6,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 10,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
            beginAtZero: false,
            min: 3,
            maxTicksLimit: 7
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [6],
            borderDashOffset: [0],
            color: theme.colors.alpha.black[10],
            drawBorder: false,
            zeroLineBorderDash: [6],
            zeroLineBorderDashOffset: [0],
            zeroLineColor: theme.colors.alpha.black[10]
          },
          ticks: {
            display: false,
            beginAtZero: false,
            min: 3,
            maxTicksLimit: 7
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 6,
      displayColors: true,
      yPadding: 8,
      xPadding: 16,
      borderWidth: 4,
      bodySpacing: 10,
      titleFontSize: 16,
      borderColor: theme.palette.common.black,
      backgroundColor: theme.palette.common.black,
      titleFontColor: theme.palette.common.white,
      bodyFontColor: theme.palette.common.white,
      footerFontColor: theme.palette.common.white
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

OverallStatusChart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default OverallStatusChart;
