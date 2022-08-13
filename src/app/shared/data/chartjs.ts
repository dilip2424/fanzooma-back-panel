function number_format(
  number,
  decimals = undefined,
  dec_point = undefined,
  thousands_sep = undefined
) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  let n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s: any = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

//line chart
const commonProperties = {
  animation: {
    duration: 1000, // general animation time
    easing: "easeOutBack",
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: "label",
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: "bottom",
  },
  elements: {
    point: {
      radius: 1,
    },
    line: {
      borderWidth: 2,
      tension: 0,
    },
  },
};

export var lineChartOptionsForRoyalties: any = {
  ...commonProperties,
  scales: {
    xAxes: [
      {
        display: true,
        type: "time",
        ticks: {
          padding: 10,
          maxTicksLimit: 6,
          maxRotation: 0,
          minRotation: 0,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          padding: 10,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Estimated Royalties",
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Estimated Royalty",
  },
};

export var lineChartOptionsForPaymentHistory: any = {
  ...commonProperties,
  scales: {
    xAxes: [
      {
        display: true,
        ticks: {
          padding: 10,
          maxTicksLimit: 6,
          maxRotation: 0,
          minRotation: 0,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          padding: 10,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "",
        },
      },
    ],
  },
  title: {
    display: true,
    text: "",
  },
};

export var lineChartOptionsForAccChannel: any = {
  ...commonProperties,
  scales: {
    xAxes: [
      {
        display: true,
        type: "time",

        ticks: {
          padding: 10,
          maxTicksLimit: 6,
          maxRotation: 0,
          minRotation: 0,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          padding: 10,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "",
        },
      },
    ],
  },
  title: {
    display: true,
    text: "",
  },
};

export var lineChartOptionsForAnalyticsChart: any = {
  ...commonProperties,
  tooltips: {
    callbacks: {
      label: function (tooltipItem, chart) {
        var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || "";
        return datasetLabel + ": $ " + number_format(tooltipItem.yLabel, 2);
      },
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        type: "time",

        ticks: {
          padding: 10,
          maxTicksLimit: 6,
          maxRotation: 0,
          minRotation: 0,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          padding: 10,
          beginAtZero: true,
          callback: function (value, index, values) {
            return "$ " + number_format(value);
          },
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "",
        },
      },
    ],
  },
  title: {
    display: true,
    text: "",
  },
};

export var lineChartColorsForRoyalties: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderWidth: 1,
    borderDash: [5],
    borderColor: "#975AFF",
    pointBorderColor: "#975AFF",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAccChannel: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F55252",
    pointBorderColor: "#F55252",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAccCreator: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAccRightsHolder: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAccArtist: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#2F8BE6",
    pointBorderColor: "#2F8BE6",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForContent: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F55252",
    pointBorderColor: "#F55252",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAll: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F55252",
    pointBorderColor: "#F55252",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAnalysis: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F55252",
    pointBorderColor: "#F55252",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForAudioAvailable: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForCreatorAgreement: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartColorsForContractAssigned: Array<any> = [
  {
    lineTension: 0,
    fill: false,
    borderColor: "#2F8BE6",
    pointBorderColor: "#2F8BE6",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#F77E17",
    pointBorderColor: "#F77E17",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#40C057",
    pointBorderColor: "#40C057",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 1,
    pointHoverBorderWidth: 2,
    pointRadius: 1,
  },
];

export var lineChartLegend = true;
export var lineChartType = "line";

//area chart
export var areaChartOptions: any = {
  ...commonProperties,
  scales: {
    xAxes: [
      {
        display: true,
        type: "time",
        ticks: {
          padding: 10,
          maxTicksLimit: 6,
          maxRotation: 0,
          minRotation: 0,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Date",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        ticks: {
          padding: 10,
        },
        gridLines: {
          color: "#F5F5F5",
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: "",
        },
      },
    ],
  },
  title: {
    display: true,
    text: "",
  },
};

export var areaChartColors: Array<any> = [
  {
    backgroundColor: "rgba(189, 189, 189, 0.3)",
    borderColor: "transparent",
    pointBackgroundColor: "#FFF",
    pointBorderColor: "#BDBDBD",
    pointHoverBackgroundColor: "rgba(255, 141, 96,1)",
    pointRadius: 1,
    pointHoverBorderColor: "#FFF",
    pointHoverRadius: "5",
    pointBorderWidth: "1",
  },
  {
    backgroundColor: "rgba(47, 139, 230, 0.7)",
    borderColor: "transparent",
    pointBackgroundColor: "#FFF",
    pointBorderColor: "#2F8BE6",
    pointHoverBackgroundColor: "#2F8BE6",
    pointRadius: 1,
    pointHoverBorderColor: "#FFF",
    pointHoverRadius: "5",
    pointBorderWidth: "1",
  },
];
export var areaChartLegend = true;
export var areaChartType = "line";
