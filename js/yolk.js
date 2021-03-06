
var YOLK = function(canvas) {
        // var c = canvas;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.count = 0;
//              c.globalCompositeOperation = 'source-atop';
        // c.fillStyle = "black";
        
        // this.ctx.fillStyle = "black";
        // draw(c, x, y);

//         c.strokeStyle = 'black';

}

var rgb_grey = function(c){
        return "rgb(" + c + "," + c + "," + c + ")"
}

YOLK.prototype.update_color = function(color) {
        // this.ctx.fillStyle = color;
        if (parseInt(color)) {
                return this.ctx.fillStyle = rgb_grey(color)
                // return rgb_grey((color < 1) ? 0 : ((color < 255) ? (Math.random()*150+50) : color));
        } else {
                return this.ctx.fillStyle = color;
        }
        

};


YOLK.prototype.draw = function(x, y) {
        // this.update_color((Math.random()*255).floor());
        // this.update_color(0);
        // this.ctx.fillStyle = "black";
        var my_gradient= this.ctx.createLinearGradient(0,0,0,this.canvas.getHeight()/2.3); // separate into own canvas el, to get it's own size
        my_gradient.addColorStop(0,"black");
        my_gradient.addColorStop(1,"rgba(0, 0, 0, 0.65)");
        this.ctx.fillStyle = my_gradient;
        var ctx = this.ctx;
        ctx.save();
        ctx.translate(x,y);
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(104,0);
        ctx.lineTo(104,195);
        ctx.lineTo(0,195);
        ctx.closePath();
        ctx.clip();
        ctx.strokeStyle = 'rgba(0,0,0,0)';
        ctx.lineCap = 'butt';
        ctx.lineJoin = 'miter';
        ctx.miterLimit = 4;
        ctx.save();
        ctx.save();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(-1,-1);
        ctx.lineTo(105,-1);
        ctx.quadraticCurveTo(105,-1,105,-1);
        ctx.lineTo(105,196);
        ctx.quadraticCurveTo(105,196,105,196);
        ctx.lineTo(-1,196);
        ctx.quadraticCurveTo(-1,196,-1,196);
        ctx.lineTo(-1,-1);
        ctx.quadraticCurveTo(-1,-1,-1,-1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
        ctx.save();
        ctx.save();
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = "rgba(0, 0, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(84.746773,76.842255);
        ctx.lineTo(85.265099,64.920693);
        ctx.lineTo(92.521698,0.6479120000000052);
        ctx.lineTo(100.814972,0.6479120000000052);
        ctx.lineTo(92.132958,76.583093);
        ctx.lineTo(102.369958,194.373323);
        ctx.lineTo(94.076692,194.373323);
        ctx.lineTo(86.56092199999999,104.572855);
        ctx.lineTo(87.20883299999998,93.55835900000001);
        ctx.lineTo(86.04259599999999,104.572855);
        ctx.lineTo(84.74677399999999,124.26935800000001);
        ctx.lineTo(84.74677399999999,194.37332400000003);
        ctx.lineTo(76.58309299999999,194.37332400000003);
        ctx.lineTo(76.58309299999999,0.6479140000000143);
        ctx.lineTo(84.74677399999999,0.6479140000000143);
        ctx.lineTo(84.74677399999999,76.84225800000002);
        ctx.closePath();
        ctx.moveTo(12.310312999999994,18.919006000000017);
        ctx.lineTo(12.569476999999994,23.324804000000018);
        ctx.lineTo(12.828641999999993,18.919006000000017);
        ctx.lineTo(16.975270999999992,0.6479150000000189);
        ctx.lineTo(25.138951999999993,0.6479150000000189);
        ctx.lineTo(16.71610799999999,32.78430600000002);
        ctx.lineTo(16.71610799999999,194.37332600000002);
        ctx.lineTo(8.552427999999992,194.37332600000002);
        ctx.lineTo(8.552427999999992,32.784306000000015);
        ctx.lineTo(0.0000019999999913977717,0.6479150000000118);
        ctx.lineTo(8.163680999999992,0.6479150000000118);
        ctx.lineTo(12.310312999999992,18.91900600000001);
        ctx.closePath();
        ctx.moveTo(58.57116499999999,0.6479150000000118);
        ctx.lineTo(66.73484199999999,0.6479150000000118);
        ctx.lineTo(66.73484199999999,186.72798500000002);
        ctx.lineTo(76.71267099999999,186.72798500000002);
        ctx.lineTo(76.71267099999999,194.37332500000002);
        ctx.lineTo(58.571164999999986,194.37332500000002);
        ctx.lineTo(58.571164999999986,0.6479150000000118);
        ctx.closePath();
        ctx.moveTo(49.11166199999999,12.180733000000012);
        ctx.lineTo(49.11166199999999,182.840504);
        ctx.bezierCurveTo(49.11166199999999,188.28296300000002,46.520017999999986,195.02124400000002,37.70842899999999,195.02124400000002);
        ctx.bezierCurveTo(29.02641599999999,195.02124400000002,26.30519299999999,188.28296300000002,26.30519299999999,182.840504);
        ctx.lineTo(26.30519299999999,12.180733000000004);
        ctx.bezierCurveTo(26.30519299999999,6.738279000000004,28.896836999999987,0.0000040000000041118255,37.70842899999999,0.0000040000000041118255);
        ctx.bezierCurveTo(46.39043599999999,0.0000040000000041118255,49.11166199999999,6.738279000000004,49.11166199999999,12.180733000000004);
        ctx.closePath();
        ctx.moveTo(34.46886999999999,182.840504);
        ctx.bezierCurveTo(34.46886999999999,185.69131900000002,35.50552899999999,186.987141,37.70842899999999,186.987141);
        ctx.bezierCurveTo(39.91132899999999,186.987141,40.94798099999999,185.69131900000002,40.94798099999999,182.840504);
        ctx.lineTo(40.94798099999999,12.180733000000004);
        ctx.bezierCurveTo(40.94798099999999,9.329924000000004,39.91132599999999,8.034102000000004,37.70842899999999,8.034102000000004);
        ctx.bezierCurveTo(35.50553199999999,8.034102000000004,34.46886999999999,9.329924000000004,34.46886999999999,12.180733000000004);
        ctx.lineTo(34.46886999999999,182.840504);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
        ctx.restore();
};

// var draw = function(ctx, x, y) {};

var oldDraw = function(canvas, x, y) {
        c.save();
        c.translate(x,y);
        
        // c.scale(.5,.5);
        
        c.beginPath();
        
        c.moveTo(79.83, 0);
        c.lineTo(79.83, 46.22);
        c.lineTo(79.83, 48.49);
        c.lineTo(80.05, 48.49);
        c.lineTo(80.32, 46.22);
        c.lineTo(85.19, 0);
        c.lineTo(90.87, 0);
        c.lineTo(85.51, 45.66);
        c.lineTo(91.57, 138.68);
        c.lineTo(85.89, 138.68);
        c.lineTo(81.83, 78.30);
        c.lineTo(81.67, 75.47);
        c.lineTo(81.51, 75.47);
        c.lineTo(81.19, 78.30);
        c.lineTo(79.83, 89.62);
        c.lineTo(79.83, 138.68);
        c.lineTo(73.99, 138.68);
        c.bezierCurveTo(73.99, 95.28, 73.99, 0, 73.99, 0);
        c.lineTo(79.83, 0);
        c.closePath();
        c.fill();
        //c.stroke();
        c.beginPath();
        c.moveTo(8.66, 12.81);
        c.lineTo(8.82, 13.19);
        c.lineTo(8.93, 13.19);
        c.lineTo(9.09, 12.81);
        c.lineTo(12.01, 0);
        c.lineTo(17.75, 0);
        c.lineTo(11.80, 23);
        c.lineTo(11.80, 127.32);
        c.lineTo(11.80, 138.67);
        c.lineTo(5.95, 138.67);
        c.lineTo(5.95, 127.32);
        c.lineTo(5.95, 23);
        c.lineTo(0, 0);
        c.lineTo(5.74, 0);
        c.lineTo(8.66, 12.81);
        c.closePath();
        c.fill();
        //c.stroke();
        c.beginPath();
        c.moveTo(32.80, 138.67);
        c.bezierCurveTo(24.96, 138.67, 25.01, 130.06, 25.01, 130.06);
        c.lineTo(25.01, 25.21);
        c.lineTo(25.01, 8.61);
        c.bezierCurveTo(25.01, 8.61, 24.96, 0, 32.80, 0);
        c.bezierCurveTo(40.65, 0, 40.59, 8.61, 40.59, 8.61);
        c.lineTo(40.59, 24.65);
        c.lineTo(40.59, 130.06);
        c.bezierCurveTo(40.59, 130.06, 40.65, 138.67, 32.80, 138.67);
        c.closePath();
        c.moveTo(32.80, 5.69);
        c.bezierCurveTo(30.75, 5.69, 30.85, 8.61, 30.85, 8.61);
        c.lineTo(30.85, 130.06);
        c.bezierCurveTo(30.85, 130.06, 30.75, 132.98, 32.80, 132.98);
        c.bezierCurveTo(32.80, 132.98, 34.75, 130.06, 34.75, 130.06);
        c.lineTo(34.75, 8.61);
        c.bezierCurveTo(34.75, 8.61, 34.86, 5.69, 32.80, 5.69);
        c.closePath();
        c.fill();
        //c.stroke();
        c.beginPath();
        c.moveTo(52.26, 24.13);
        c.lineTo(52.26, 0);
        c.lineTo(58.10, 0);
        c.lineTo(58.10, 24.05);
        c.lineTo(58.10, 133.22);
        c.lineTo(65.84, 133.22);
        c.lineTo(65.84, 138.67);
        c.lineTo(52.26, 138.67);
        c.lineTo(52.26, 24.13);
        c.closePath();
        c.fill();
        //c.stroke();
        c.restore();
//         c.globalCompositeOperation = 'source-over';
}
