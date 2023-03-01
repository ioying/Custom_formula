Highcharts.theme = {
	//fcfc54 é»„ dd54fc ç²‰ 54fc54 å«©ç»¿ 3f54fc æ·±è“ a8a8a8 ç° 00a800 è€ç»¿  a80000 æ·±çº¢ fcfcfc ç™½ 54fcfc é’ fc54fc ç´« 
	colors: ["#fcfc54","#dd54fc","#54fc54","#3f54fc","#a8a8a8","#00a800","#a80000","#fcfcfc","#54fcfc","#fc54fc" ],
	//colors: ["#514F78", "#42A07B", "#9B5E4A", "#72727F", "#1F949A", "#82914E", "#86777F", "#42A07B"],
	chart: {
		className: 'stock-qianlong',
		borderWidth: 0,
		plotShadow: false , //true,
		//plotBackgroundImage: 'http://www.highcharts.com/demo/gfx/skies.jpg',
		plotBorderColor: '#CC0000',
		plotBorderWidth: 3,
		plotBackgroundColor: '#000000',
		backgroundColor: '#000000',
		spacingTop: 10,
		spacingBottom: 15,
		events:{
			load:function(){
				this.credits.element.onclick = function() {
               if(window.confirm('å°†è¦è®¿é—®highchartsä¸­æ–‡ç½‘ hcharts.cn ?')) {
					window.open("http://www.hcharts.cn/");
				} else {
					// back
				}                     }
			}
		}
	},
	title: {
		text: null,//'',
		style: {
			color: '#3E576F',
			font: '16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#6D869F',
			font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
		}
	},
	tooltip:{
		//enabled: false,
		/*
		distance: 140,
		positioner: function (a,b,point) {
			 if(point.plotX<300)
				{
					return { x: 400, y: 50 };
                } else {
					return { x: 80, y: 50};
                }
        },*/
		backgroundColor: null,//'rgba(255, 255, 255, 0.8)',
		borderColor: null,//'#000000'
		borderWidth: 0 ,
		shared:true,
		/*
		useHTML: true,
		headerFormat: '<small>{point.key}</small><table width="100%">',
		pointFormat: '<tr><td style="color: {series.color};font-size:14px;">\u25CF</td style="text-align: left"><td>{series.name}: </td>' + '<td style="text-align: right"><b>{point.y} </b></td></tr>',
		footerFormat: '</table>',
		*/
		//dateTimeLabelFormats: {minute:'%Y-%m-%d %H:%M'},
 		crosshairs:true,//[true,true],
		
		//followPointer:true, //false //
		//valueDecimals: 8,
		formatter: function () {
			//console.log(this);
				var k = y0 = y1 = '';
				var s = '<h4>'+Highcharts.dateFormat('%Y-%b-%e,%A,%H:%M',this.x) +"</h4>";
	 //console.log(s);
				$.each(this.points,function(){
					var decimal = 0;
						if (this.point.low > 1) {
							decimal = 2;
						} else if(this.point.low > 0.01) {
							decimal = 4;
						} else if (this.point.low> 0.0001) {
							decimal = 6;
						} else {
							decimal = 9;
						}                    
					if(this.series.name === '----------'){
                        /*
						k= '<table><tr><td > å¼€ç›˜:</td><td><span class="pl">'+ this.point.open.toFixed(decimal) + '</span></td></tr>'+
						'<tr><td > æœ€é«˜:</td><td><span class="pl">'+ this.point.high.toFixed(decimal) + '</span></td></tr>'+
						'<tr><td > æœ€ä½Ž:</td><td><span class="pl">'+ this.point.low.toFixed(decimal) + '</span></td></tr>'+
						'<tr><td > æ”¶ç›˜:</td><td><span class="pl">'+ this.point.close.toFixed(decimal) + '</span></td></tr></table>';
						*/
                        k= '<span style="width: 100px;display:inline-block;"> å¼€ç›˜:</span><span>'+ this.point.open.toFixed(decimal) + '</span><br>'+
                           '<span style="width: 100px;display:inline-block;"> æœ€é«˜:</span><span>'+ this.point.high.toFixed(decimal) + '</span><br>'+
                           '<span style="width: 100px;display:inline-block;"> æœ€ä½Ž:</span><span>'+ this.point.low.toFixed(decimal) + '</span><br>'+
                           '<span style="width: 100px;display:inline-block;"> æ”¶ç›˜:</span><span>'+ this.point.close.toFixed(decimal) + '</span><br>';
					} else {
                            if (Math.abs(this.y) >= 1 || this.y == 0 ) {
                                decimal = 2;
                            } else if(this.y > 0.01) {
                                decimal = 4;
                            } else if (this.y> 0.0001) {
                                decimal = 6;
                            } else {
                                decimal = 9;
                            }                        
						if(this.series.options.yAxis == 0) {
							//y0 += '<tr ><td><span style="color:'+this.point.color+'">'+this.series.name+': </span></td><td><span style="color:'+this.point.color+'">' + this.y + '</span></td></tr>';
							y0 += '<span style="width: 100px;display:inline-block;color:'+this.point.color+'">'+this.series.name+': </span><span style="color:'+this.point.color+'">' + this.y.toFixed(decimal) + '</span><br>';
						} else {
							y1 += '<span style="width: 100px;display:inline-block;color:'+this.point.color+'">'+this.series.name+': </span><span style="color:'+this.point.color+'">' + this.y.toFixed(decimal) + '</span><br>';
						}
					}
		  //s += '<br/>' + this.series.name + ': ' +                        this.y + 'm' ;
				});
			$("#k_data").html(s+k);	
			$("#y0_data").html(y0);	
			$("#y1_data").html(y1);	
			return '';//null;//s+'<br>'+k + y0+'</table>' + y1;
		}
	},
	credits: {  					 //		å½’åŠŸäºŽ   
		enabled:true  ,
		href:"http://www.highcharts.com",
		position: {
			align: 'left',
			x: 10,
			verticalAlign: 'bottom',
			y: -2
		},
		style: {  			//	 
			cursor: 'pointer',
			color: '#009090',
			fontSize: '9px'
		},
		text: ['æ„Ÿè°¢ hcharts.cn  &  highcharts.com æä¾›å›¾è¡¨æ”¯æŒ']
	}, 
	plotOptions: {
		arearange:{
			 fillOpacity: 0.2,
		} ,       
		line: {            //å›¾è¡¨çº¿å®½ ï¼Œspline å¦ä¸€ç§çº¿
			lineWidth: 1.3,
			fillOpacity: 1.1,
			marker: {
				enabled: false,
				states: {
					hover: {
						enabled: true,
					radius: 1
					}
				}
			},
			shadow: false
		},
		series: {		        // åŠ¨ç”»æ’­æ”¾æ—¶é—´
			animation: {
				enabled: false
				//duration: 500
			}
		},
		candlestick: {
			lineColor:'green',
			color: 'green',//'green',//'#00a800',
			upColor: '#a80000',
			upLineColor: '#a80000'
		}
	},
	xAxis: {
		gridLineWidth: 1.5,
		gridLineColor: 'rgba(255, 0, 0, .5)',
		lineColor: '#a80000',
		//tickColor: '#C0D0E0',
		showFirstLabel: true,
		showLastLabel: true,
		startOnTick: false,//true,//
		endOnTick:false,
		minPadding:0,
		maxPadding:0,
		tickWidth: 2,
		tickColor: '#a80000',
		tickPosition: 'outside',
		type: 'datetime',
		dateTimeLabelFormats:{hour: '%H:%M',day: '%e. %b',month: '%b \'%y',	year: '%Y'},
		lineWidth: 0,
		offset: 1,
		labels: {
			style: {color:"#fcfc54"}
		},
		title: {
			style: {
				color: '#666',
				font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	yAxis: {
		/*
		crosshair: {
                		snap:false,
                 
                },
		*/
		gridLineColor: 'rgba(255, 0, 0, .5)',
		minorGridLineColor: 'rgba(255,0,0,0.3)',
		//alternateGridColor: 'rgba(255, 255, 255, .5)',
		//lineColor: '#C0D0E0',
		//tickColor: '#C0D0E0',
		//tickWidth: 1,
		title: {
			text: null,
			style: {
				color: '#666',
				font: '12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: '#3E576F'
		},
		itemHoverStyle: {
			color: 'black'
		},
		itemHiddenStyle: {
			color: 'silver'
		}
	},
	labels: {
		style: {
			color: '#3E576F'
		}
	}
};
