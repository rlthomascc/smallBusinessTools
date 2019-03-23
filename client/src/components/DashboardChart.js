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
    const sampleData = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [
        {
          label: 'Test',
          data: [
            2, 4, 5, 6, 7, 8,
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 90, 100, 0)',
          ],
        },
      ],
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
