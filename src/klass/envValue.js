'use strict';

export default class EnvValue {
    constructor({
        temp,
        humi,
        hcho,
        co2,
        pm25,
        tvoc,
        n3h,
        h2s
    }) {
        this.temp = temp || 0.0;
        this.humi = humi || 0.0;
        this.hcho = hcho || 0.0;
        this.co2 = co2 || 0.0;
        this.pm25 = pm25 || 0.0;
        this.tvoc = tvoc || 0.0;
        this.n3h = n3h || 0.0;
        this.h2s = h2s || 0.0;
    }
}