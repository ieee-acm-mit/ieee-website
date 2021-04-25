<html>
<head>
<title>MIT IEEE Event Tracker</title>
<?php include 'header.php'; ?>
<style>
<?php include '../css/tracker.css'; ?>
</style>
</head>
<body>
<h1>Event Tracker</h1>
<p>
<?php
 if (@$_SERVER['SSL_CLIENT_S_DN_CN']) {
 $parts = explode('@', $_SERVER['SSL_CLIENT_S_DN_Email']);
 $user = $parts[0];
  echo 'Hello <b>' . $_SERVER['SSL_CLIENT_S_DN_CN'] . '</b>!<br>'
      . 'A certificate for <b>' . $user . '</b>';
 } else {
  ?>No certificate has been detected. Please ensure you are accessing
  <a href="https://geofft.scripts.mit.edu:444/detect.php">http<b>s</b>://geofft.scripts.mit.edu<b>:444</b>/detect.php</a>.<?php } ?>
</p>
<h1>Server Detection</h1>
<p>
<?php
 $csvFile = file('https://docs.google.com/spreadsheets/d/e/2PACX-1vSMkgV9ZcEuokH-P_CLKHNI8rSDO0PDfRZ3O9X9fqfIW7-HlUPcHhv0sG0iG3Fwvr3M5AqoAXPLwAaw/pub?output=csv');
 $count = 0;

foreach ($csvFile as $line) {
	$data = str_getcsv($line);
	if ($data[0] == $user){
	    echo '<li>' . implode(",", $data) . '</li>';
		$count++;
	}
}
echo 'You have, <b>'.$count.'</b> events';
?>
</body>
</html>
