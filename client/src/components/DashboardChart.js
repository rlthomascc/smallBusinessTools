/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';


class DashboardChart extends Component {
  constructor(props) {
    super(props);
  }

  chart() {
    const { chartData } = this.props;
    const sampleData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Total Transactions',
          data: chartData,
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 36, 245)',
          pointBackgroundColor: 'rgba(0, 36, 245)',
          lineTension: 0,
        },
      ],
      options: {
        legend: {
          hidden: true,
        },
      },
    };

    return (
      <div>
        <Line
          data={sampleData}
          height={400}
          options={{
	          maintainAspectRatio: false,
          }}
        />
      </div>

    );
  }

  render() {
    return (
      this.chart()
    );
  }
}

export default DashboardChart;
