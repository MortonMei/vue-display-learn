<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
import { getList } from '@/api/BOPP'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        backgroundColor: '#394056',
        title: {
          top: 20,
          text: '国内BOPP复合膜出厂一周收盘价格变化表',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['华东地区', '华南地区', '华北地区', '西南地区', '东北地区'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          top: 100,
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          name: '收盘时间',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: []
        }],
        yAxis: [{
          type: 'value',
          name: '价格(元/吨)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '华东地区',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: 'rgba(137, 189, 27, 0.3)'
          //     }, {
          //       offset: 0.8,
          //       color: 'rgba(137, 189, 27, 0)'
          //     }], false),
          //     shadowColor: 'rgba(0, 0, 0, 0.1)',
          //     shadowBlur: 10
          //   }
          // },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: []
        }, {
          name: '华南地区',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: 'rgba(0, 136, 212, 0.3)'
          //     }, {
          //       offset: 0.8,
          //       color: 'rgba(0, 136, 212, 0)'
          //     }], false),
          //     shadowColor: 'rgba(0, 0, 0, 0.1)',
          //     shadowBlur: 10
          //   }
          // },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12

            }
          },
          data: []
        }, {
          name: '华北地区',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: 'rgba(137, 189, 27, 0.3)'
          //     }, {
          //       offset: 0.8,
          //       color: 'rgba(137, 189, 27, 0)'
          //     }], false),
          //     shadowColor: 'rgba(0, 0, 0, 0.1)',
          //     shadowBlur: 10
          //   }
          // },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: []
        }, {
          name: '西南地区',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: 'rgba(137, 189, 27, 0.3)'
          //     }, {
          //       offset: 0.8,
          //       color: 'rgba(137, 189, 27, 0)'
          //     }], false),
          //     shadowColor: 'rgba(0, 0, 0, 0.1)',
          //     shadowBlur: 10
          //   }
          // },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: []
        }, {
          name: '东北地区',
          type: 'line',
          smooth: false,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //       offset: 0,
          //       color: 'rgba(137, 189, 27, 0.3)'
          //     }, {
          //       offset: 0.8,
          //       color: 'rgba(137, 189, 27, 0)'
          //     }], false),
          //     shadowColor: 'rgba(0, 0, 0, 0.1)',
          //     shadowBlur: 10
          //   }
          // },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: []
        }]
      })
      var prelist = []
      var xlist = []
      var ylist1 = []
      var ylist2 = []
      var ylist3 = []
      var ylist4 = []
      var ylist5 = []
      getList().then(response => {
        prelist = response.data
        for (var i = 0; i < 12; i++) {
          xlist.push(prelist[i].date)
          ylist1.push(prelist[i].prices.华东地区.价格)
          ylist2.push(prelist[i].prices.华南地区.价格)
          ylist3.push(prelist[i].prices.华北地区.价格)
          ylist4.push(prelist[i].prices.西南地区.价格)
          ylist5.push(prelist[i].prices.东北地区.价格)
        }
        this.chart.setOption({
          xAxis: {
            data: xlist
          },
          series: [{
            name: '华东地区',
            data: ylist1
          }, {
            name: '华南地区',
            data: ylist2
          }, {
            name: '华北地区',
            data: ylist3
          }, {
            name: '西南地区',
            data: ylist4
          }, {
            name: '东北地区',
            data: ylist5
          }]
        })
      })
    }
  }
}
</script>
