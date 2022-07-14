// 柱状图
var legends = ['经发委', '住建局', '城管局', '城乡发展局', '商务局', '文体旅局', '应急管理局'];
var barColors = ['#FDAEE7', '#245FE6'];
var barData = [101, 90, 10, 90, 90, 20, 56, 89];
var barData1 = [41, 30, 40, 50, 20, 80, 76, 69];

var bar = {
	grid: {
		left: 140,
		bottom: 40,
		top: 20,
		right:40
	},
	legend:{
		show:true,
		right:40,
		top:0,
		itemWidth:14,
		itemHeight:14,
		data:[{
			name:'咨询总数',
			icon:'rect'
		},{
			name:'及时回复数',
			icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABTUlEQVQ4T32SbStDYRjH/9d9FsNQHhZvzBQiMmoUeUte4AtKvgJSHlp5oVa2Wi1ay0MTIlpinW2nnXNdOucWM3aul7+7X//7eqCqZQvqynaA/ZSCaREWxhyMDurHRk6NYvaOkC0o9IQEa3MMIi3+4fWiaQF75woOAysxRrhbS2UL2G3gvxLPcoTCi0Kkn7E8+dPBf/xbfP0AjjIKhgI24oyOoE5rxj1RBDjMKBRLhOkIY2ZYp/lxT7x5BpJ5A+2t4qUFDJ3mx6lk2uI2Xq0RliYcRMNaqtl6IM04JXOOXN4r9HUJVmcZX9NH5pbgx2n7hIUF3s56O3VaqaKPwI/T1rHIyABjcfxn/KcXhIeigh+nnQTL5jyjrUWnPb0BiayBgCHw45S+cmRqSKe5XztIK7yXCbEow4+TWbHFXbpb+UcgdW0gFBSsx9k7hmb8E2tO904d0HwHAAAAAElFTkSuQmCC',
		}],
		textStyle:{
			color:'#9BB1C8'
		}
	},
	xAxis: [{
		type: 'value',
		axisLabel: {
			color: "#9BB1C8",
			fontSize: 16,
			margin:15,
		},
		axisLine: {
			show: true,
				lineStyle:{
					color: '#DFDFDF',
				}
		},
		splitLine: {
			show: true,
			lineStyle: {
				color: '#DDDDDD',
				type: 'dashed',
				opacity: 0.5,
			}
		},
	}],
	yAxis: [{
		type: "category",
		color: "#9BB1C8",
		data: legends,
		axisLine: {
			show: true,
			lineStyle: {
				color: '#DFDFDF',
				
			}
		},
		axisTick: {
			show: false,
		},
		axisLabel: {
			color: "#333333",
			fontSize: 16,
		},
	}],
	series: [{
			name: '咨询总数',
			type: "bar",
			data: barData,
			itemStyle: {
				color: '#245FE6',
			},
			label: {
				show: true,
				position: 'right',
				color: '#245FE6',
				fontSize: 16,
				padding: [0, 0, 0, 20]

			},
			 barWidth:15
		}, {
			name: '及时回复数',
			type: "bar",
			data: barData1,
			itemStyle: {
				color: '#9CBAFF11',
				// borderColor:'#245FE6'
			},
			label: {
				show: true,
				position: 'right',
				color: '#9CBAFF',
				fontSize: 16,
				padding: [0, 0, 0, 20]
			},
			barWidth:15
		},
		{
			type: 'pictorialBar',
			itemStyle: {
				color: '#9CBAFF',
			},
			symbol: 'rect',
			symbolSize: [2, 15],
			symbolOffset: [0, '50%'],
			symbolRepeat: 'fixed',
			symbolRotate: '-30',
			symbolMargin: 2,
			symbolClip: true,
			data: barData1,
		}
	],
};
