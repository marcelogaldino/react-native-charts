import React from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, View } from 'react-native';

import { LineChart, XAxis, YAxis } from 'react-native-svg-charts';

function SalesReportLineChart({ chartDimensions, chartData }) {
  return chartDimensions ? (
    <View
      style={{
        width: chartDimensions.width,
        height: chartDimensions.height,
        flexDirection: 'row',
      }}
    >
      <YAxis
        data={chartData.data}
        svg={{ fontSize: 12, fill: '#9094AD' }}
        contentInset={{ top: 12, right: 12, bottom: 24, left: 12 }}
        formatLabel={item => `R$ ${item}`}
      />
      <View style={{ flex: 1 }}>
        <LineChart
          data={chartData.data}
          svg={{
            strokeWidth: 4,
            stroke: 'rgba(175, 220, 139, 0.7)',
          }}
          contentInset={{
            top: 12,
            right: 50,
            bottom: 12,
            left: 12,
          }}
          style={{
            borderRadius: 8,
            width: chartDimensions.width,
            height: chartDimensions.height - 12,
          }}
        />
        <XAxis
          data={chartData.data}
          svg={{ fontSize: 12, fill: '#9094AD' }}
          contentInset={{ right: 12, left: 12, top: 12 }}
          formatLabel={(_, index) => chartData.labels[index]}
        />
      </View>
    </View>
  ) : (
    <ActivityIndicator size="small" color="#2B2B73" />
  );
}

SalesReportLineChart.propTypes = {
  chartDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  chartData: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

SalesReportLineChart.defaultProps = {
  chartDimensions: null,
};

export default SalesReportLineChart;
