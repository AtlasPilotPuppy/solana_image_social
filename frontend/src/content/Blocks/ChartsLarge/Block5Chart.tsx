import { FC } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTheme, alpha } from '@mui/material';

interface Block5ChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const Block5Chart: FC<Block5ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Net Loss',
        backgroundColor: alpha(theme.colors.info.main, 0.4),
        data: dataProp.previous,
        barThickness: 32,
        maxBarThickness: 32,
        borderWidth: 2,
        borderColor: 'transparent'
      },
      {
        label: 'Net Profit',
        backgroundColor: theme.colors.warning.main,
        data: dataProp.current,
        barThickness: 32,
        maxBarThickness: 32,
        borderWidth: 2,
        borderColor: 'transparent'
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 4,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: theme.spacing(0),
        right: theme.spacing(0)
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            drawBorder: false
          },
          ticks: {
            padding: 18,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [6],
            borderDashOffset: [0],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [6],
            zeroLineBorderDashOffset: [0],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            display: true,
            beginAtZero: false,
            min: 0,
            padding: 18,
            fontColor: theme.palette.text.secondary,
            maxTicksLimit: 10
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
      mode: 'index',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Bar data={data} options={options} />
    </div>
  );
};

Block5Chart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Block5Chart;
