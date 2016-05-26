/**
 * Created by MyLady on 16/4/7.
 */
'use strict';

var ResourceCode = [
    {name: '未知类型', value: -1},
    {name: '摄像头', value: 0},
    {name: '门禁点', value: 1},
    {name: '手动报警器', value: 2},
    {name: '对讲终端', value: 3},
    {name: '分贝报警器', value: 4},
    {name: '红外报警器', value: 5},
    {name: '电网网段', value: 6},
    {name: '环境监测点', value: 7},
    {name: '解码通道', value: 256},
    {name: '矩阵通道', value: 257},
    {name: '显示屏输出', value: 258},
    {name: '视频分析通道', value: 259},
    {name: '编码器主机', value: 512},
    {name: '解码器主机', value: 513},
    {name: '矩阵控制器', value: 514},
    {name: '大屏控制器', value: 515},
    {name: '报警主机', value: 516},
    {name: '门禁控制器', value: 517},
    {name: '对讲主机', value: 518},
    {name: '监听主机', value: 519},
    {name: '电网主机', value: 520},
    {name: '电子屏控制器', value: 521},
    {name: '环境监测主机', value: 522},
    {name: '不间断电源主机', value: 523},
    {name: '视频分析主机', value: 524},
    {name: '探针', value: 525},
    {name: '个人电脑', value: 1024},
    {name: '服务器', value: 1025},
    {name: '笔记本电脑', value: 1026},
    {name: '手机', value: 1027},
    {name: '平板电脑', value: 1028},
    {name: '交换机', value: 1029},
    {name: '路由器', value: 1030},
    {name: '集线器', value: 1031},
    {name: '信息发布终端', value: 1032},
    {name: '数字电视终端', value: 1033},
    {name: '直播源', value: 2048},
    {name: '视频文件', value: 2049},
    {name: '音频文件', value: 2050},
    {name: '网页', value: 2051},
    {name: '图片文件', value: 2052}
];

module.exports = ResourceCode;
