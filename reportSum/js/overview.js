let legends = ['小于1月', '1-3月', '3-6月', '6-12月', '1-2年', '2年以上'];
// 饼状图
let pieColors = ['#3CD494', '#BAEE6A', '#48C1F8', '#0075FF', '#FF9E4D', '#FD6B47'];
let legendsData = legends.map(item => {
	return {
		name: item,
		icon: 'circle'
	}
});
let pieData = [{
		value: 435,
		name: "小于1月",
	},
	{
		value: 679,
		name: "1-3月"
	},
	{
		value: 848,
		name: "3-6月"
	},
	{
		value: 348,
		name: "6-12月"
	},
	{
		value: 679,
		name: "1-2年"
	},
	{
		value: 848,
		name: "2年以上"
	},
];
var pie = {
	legend: [{
			bottom: 40,
			left: 40,
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: "#9BB1C8",
				width: 100,
				backgroundColor: '#fff', //指定背景色后width生效
			},
			data: legendsData.slice(0, 3),
		},
		{
			top: 'bottom',
			left: 40,
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: "#9BB1C8",
				width: 100,
				backgroundColor: '#fff', //指定背景色后width生效
			},
			data: legendsData.slice(3, 6),
		}
	],
	series: [{
		type: "pie",
		radius: ["42%", "55%"],
		color: pieColors,
		label: {
			show: false, // 不false会重叠
			position: 'center',
		},
		emphasis: {
			label: {
				show: true,
				color: "#9BB1C8",
				formatter: "{d|{d}}{j|%}\n{b|{b}}",
				rich: {
					d: {
						fontSize: 34,
						lineHeight: 40,
						fontWeight: 'bold',
						color: '#043D75'
					},
					j: {
						fontSize: 16,
						lineHeight: 25,
						fontWeight: 'bold',
						color: '#043D75'
					},
					b: {
						fontSize: 16,
						lineHeight: 25,
					},
				},
			},
			labelLine: {
				show: false
			}
		},
		data: pieData
	}],
};

// 柱状图
let barColors = ['#FDAEE7', '#245FE6'];
let barData = [100, 90, 10, 90, 90, 20, 56, 89];
let bar = {
	color: '#245FE6',
	tooltip: {
		trigger: 'item',
		position: 'top',
		borderWidth: 4,
		borderColor: '#FDAEE766',
		formatter: '{a}{b}： <strong style="color:#043D75;fontSize:18px">{c}</strong>',
		textStyle: {
			color: '#9BB1C8'
		}
	},
	xAxis: [{
		type: "category",
		color: "#9BB1C8",
		data: legends,
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		axisLabel: {
			margin: 30,
			color: "#9BB1C8",
			fontSize: 16,
		},
	}, ],
	yAxis: [{
		type: 'value',
		axisLabel: {
			color: "#9BB1C8",
			fontSize: 16,
		},
		axisLine: {
			show: false,
		},
		splitLine: {
			show: false,
		},
	}],
	series: [{
		name: '全流程审批用时',
		type: "bar",
		data: barData,
		barWidth: 40,
		itemStyle: {
			// color: '#245FE6',
			// borderColor:'#245FE6'
		},
		label: {
			show: false,
		},
	}, ],
};

// 线形图
let lineData = [820, 932, 901, 934, 1290, 1330, 1320];
let line = {
	tooltip: {
		trigger: 'item',
		position: 'top',
		borderWidth: 4,
		borderColor: '#245FE666',
		formatter: '{a}{b}： <strong style="color:#043D75;fontSize:18px">{c}</strong>',
		textStyle: {
			color: '#9BB1C8'
		}
	},
	xAxis: [{
		type: "category",
		color: "#9BB1C8",
		data: legends,
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		axisLabel: {
			margin: 30,
			color: "#9BB1C8",
			fontSize: 16,
		},
	}, ],
	yAxis: [{
		type: 'value',
		axisLabel: {
			color: "#9BB1C8",
			fontSize: 16,
		},
		axisLine: {
			show: false,
		},
		splitLine: {
			show: false,
		},
	}, ],
	series: [{
		type: 'line',
		data: lineData,
		smooth: true,
		symbol: "circle",
		symbolSize: 15,
		areaStyle: {
			color: new echarts.graphic.LinearGradient(
				0,
				0,
				0,
				1,
				[{
						offset: 0,
						color: "rgba(36, 95, 230,0.1)",
					},
					{
						offset: 1,
						color: "rgba(108,80,243,0)",
					},
				],
				false
			),
			shadowColor: "rgba(36, 95, 230, 0.3)",
			shadowBlur: 50,
		},
		itemStyle: {
			color: "#245FE6",
			borderColor: "#fff",
			borderWidth: 3,
		},
	}]
}

// 三个饼状图
let piesColors = ['#5383FF', '#3FD4F4', '#FFBE5E'];


var piesData = {
	value: 24.2,
	text: "-",
	names: ["出库率", "未出库率", "退出率"],
	values: ["76", "78", "22"],
};

var seriesData = [];
var titleData = [];
piesData.values.forEach(function(item, index) {
	titleData.push({
		text: piesData.names[index],
		left: 30 * index +10 + "%",
		top: "80%",
		textAlign: "cnter",
		backgroundColor: piesColors[index] + '44',
		padding: [5, 20],
		borderRadius: 20,
		textStyle: {
			fontSize: "18",
			lineHeight:'18',
			color: piesColors[index],
			fontWeight: "400",
			width:"30%",
		},
	});
	seriesData.push({
		type: "pie",
		radius: ["65", "74"],
		center: [30 * (index + 1) - 10 + "%", "50%"],
		label: {
			position: "center",
		},
		emphasis: {
			scale: false,
			disabled: true,
		},
		data: [{
				value: item,
				name: piesData.names[index],
				itemStyle: {
					borderRadius: 10,
					color: piesColors[index],
				},
				label: {
					show: false,
				},
			},
			{
				value: 100 - item,
				name: "占位",
				tooltip: {
					show: false,
				},
				itemStyle: {
					color: "#edf1f4",
				},
				label: {
					backgroundColor: piesColors[index] + '44',
					borderRadius: 90,
					width: 90,
					height: 90,
					formatter: "{d|" + item + "}{j|%}",
					rich: {
						d: {
							fontSize: 34,
							lineHeight: 90,
							fontWeight: 'bold',
							color: '#043D75'
						},
						j: {
							fontSize: 16,
							lineHeight: 90,
							fontWeight: 'bold',
							color: '#043D75'
						}
					},
				},
			},
		],
	});
});

let value = piesData.value || 0;
let pies = {
	id: 'pies',
	title: titleData,
	series: seriesData,
};
