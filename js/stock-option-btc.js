Highcharts.option = ({
			global: {
				timezoneOffset: -8 * 60,
				useUTC: false 
			},
				lang: { 						//		æ±‰åŒ–ç•Œé¢
					//months: ['ä¸€æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ',  'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åä¸€', 'åäºŒæœˆ'],
					months: ['1', '2', '3', '4', '5', '6',  '7', '8', '9', '10', '11', '12'],
					shortMonths:['1', '2', '3', '4', '5', '6',  '7', '8', '9', '10', '11', '12'],
					weekdays: ['å‘¨æ—¥', 'å‘¨ä¸€', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'],
					rangeSelectorZoom: ''
				},
			navigator: {
                enabled: true, //false
    			margin: 2,
    			height: 17
			},   
			scrollbar: {
				enabled: true ,
                height: 1
			},
			rangeSelector: {
				enabled: false,//true,
				buttons: [{
							type: 'month',
							count: 1,
							text: '1m'
						}, {
							type: 'month',
							count: 3,
							text: '3m'
						}, {
							type: 'month',
							count: 6,
							text: '6m'
						}, {
							type: 'ytd',
							text: 'YTD'
						}, {
							type: 'year',
							count: 1,
							text: '1y'
						}, {
							type: 'all',
							text: 'All'
						}],
				buttonTheme: {
					display: 'none' // ä¸æ˜¾ç¤ºæŒ‰é’®
				},
				labelStyle: {
					visibility: 'hidden'
				},
				selected: 1,
				inputEnabled: false // ä¸æ˜¾ç¤ºæ—¥æœŸè¾“å…¥æ¡†
			},
			/*
			rangeSelector: {
				//enabled:  false
			},
			*/
			exporting: {  					 //  	è¾“å‡ºåŠŸèƒ½ï¼Œéœ€æ­å»º export server æš‚æ—¶å…³é—­
				enabled: false	,
			},	
			legend:{enabled:false},
		plotOptions: {
			series: {
					animation: false,
                    dataGrouping: {
    					enabled : false
                    }
                },
			column: {
                shadow: false,
                borderWidth: 0
            },
			columnrange: {
                shadow: false,
                borderWidth: 0
            },
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
			}  
	    },
    		xAxis: {
    			startOnTick: false,//true,//
    			endOnTick:true,
    			minPadding:0,
    			maxPadding:0,
                ordinal:  true //false
                }		
		});
