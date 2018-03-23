<?php
		echo 'ok'.dirname(__FILE__).'<br>';
		ignore_user_abort(true);
		set_time_limit(0);
		date_default_timezone_set('PRC'); // 切换到中国的时间
		//dump(time());
		//$run_time = strtotime('+1 day'); // 定时任务第一次执行的时间是明天的这个时候
		$run_time = time();
		$interval = 10;//3600*12; // 每12个小时执行一次
		$file_url = dirname(__FILE__)."/Public/data/";
		$file_name=$file_url.'cron-run.txt';	
		$file_switch=$file_url.'cron-switch-on.txt';
		$file_record=$file_url.'cron-record.txt';
		echo $file_name;
		if(!file_exists($file_name)) {
			echo 'running';
			exit(); // 在目录下存放一个cron-run文件，如果这个文件不存在，说明已经在执行过程中了，该任务就不能再激活，执行第二次，否则这个文件被多次访问的话，服务器就要崩溃掉了
			
		} else {
			echo 'ready to running';
		}

		do {
		  if(!file_exists($file_switch)) break; // 如果不存在cron-switch这个文件，就停止执行，这是一个开关的作用
		  $gmt_time = microtime(true); // 当前的运行时间，精确到0.0001秒
		  $loop = isset($loop) && $loop ? $loop : $run_time - $gmt_time; // 这里处理是为了确定还要等多久才开始第一次执行任务，$loop就是要等多久才执行的时间间隔
		  $loop = $loop > 0 ? $loop : 0;
		  $loop = 10;
		  //echo $loop;
		  if(!$loop) break; // 如果循环的间隔为零，则停止
		  sleep($loop); 
		  _sock("http://localhost/gitHub/ot/wwwroot/index.php/home/stock/autoftc") ;
		  //$this->testrecord();
		  //$save = file_put_contents($file_record,date("Y-m-d H:i:s").' '.$loop);
		  //dump($save);
		  // ...
		  // 执行某些代码
		  // ...
		  @unlink($file_name); // 这里就是通过删除cron-run来告诉程序，这个定时任务已经在执行过程中，不能再执行一个新的同样的任务
		  $loop = $interval;
		} while(true);
		
function _sock($url) {
	$host = parse_url($url,PHP_URL_HOST);
	$port = parse_url($url,PHP_URL_PORT);
	$port = $port ? $port : 80;
	$scheme = parse_url($url,PHP_URL_SCHEME);
	$path = parse_url($url,PHP_URL_PATH);
	$query = parse_url($url,PHP_URL_QUERY);
	if($query) $path .= '?'.$query;
	if($scheme == 'https') {
		$host = 'ssl://'.$host;
	}

	$fp = fsockopen($host,$port,$error_code,$error_msg,1);
	if(!$fp) {
		return array('error_code' => $error_code,'error_msg' => $error_msg);
	}
	else {
		stream_set_blocking($fp,true);//开启了手册上说的非阻塞模式
		stream_set_timeout($fp,1);//设置超时
		$header = "GET $path HTTP/1.1\r\n";
		$header.="Host: $host\r\n";
		$header.="Connection: close\r\n\r\n";//长连接关闭
		fwrite($fp, $header);
		usleep(1000); // 这一句也是关键，如果没有这延时，可能在nginx服务器上就无法执行成功
		fclose($fp);
		return array('error_code' => 0);
	}
}
	