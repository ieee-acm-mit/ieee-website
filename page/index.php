<html>
<head>
<title>MIT IEEE Event Tracker</title>
<?php include 'header.php'; ?>
<style>
<?php include '../templatemo_style.css'; ?>
<?php include '../css/tracker.css'; ?>
</style>
</head>
<body>
<div class="site-header">
    <div class="main-header">
        <div class="container">
            <div id="menu-wrapper">
                <div class="row">
                    <div class="logo-wrapper col-md-2 col-sm-2">
                        <h1>
                            <a href="#">MIT&nbspIEEE/ACM</a>
                        </h1>
                    </div> <!-- /.logo-wrapper -->
                    <div class="col-md-10 col-sm-10 main-menu text-right">
                        <div class="toggle-menu visible-sm visible-xs"><i class="fa fa-bars"></i></div>
                        <ul class="menu-first">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="#committees">Subcommittees</a></li>
                            <li><a href="#calendar">Calendar</a></li>
                            <li><a href="#our-team">Team</a></li>
                            <li><a href="#newsletter">Newsletter</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<h1>Event Tracker</h1>
<p>
<?php
 if (@$_SERVER['SSL_CLIENT_S_DN_CN']) {
 $parts = explode('@', $_SERVER['SSL_CLIENT_S_DN_Email']);
 $user = $parts[0];
  echo 'Hello <b>' . $_SERVER['SSL_CLIENT_S_DN_CN'] . '</b>!<br>'
      . 'Kerb:<b>' . $user . '</b>';
 } else {
  ?>No certificate has been detected. Please ensure you are accessing
  <a href="https://geofft.scripts.mit.edu:444/detect.php">http<b>s</b>://geofft.scripts.mit.edu<b>:444</b>/detect.php</a>.<?php } ?>
</p>
<table>
<tr><th>Events</th></tr>
<?php
 $csvFile = file('https://docs.google.com/spreadsheets/d/e/2PACX-1vSMkgV9ZcEuokH-P_CLKHNI8rSDO0PDfRZ3O9X9fqfIW7-HlUPcHhv0sG0iG3Fwvr3M5AqoAXPLwAaw/pub?output=csv');
 $count = 0;

foreach ($csvFile as $line) {
	$data = str_getcsv($line);
	if ($data[0] == $user){
	    echo '<tr>' . implode(",", $data) . '</tr>';
		$count++;
	}
}
echo 'You have attended <b>'.$count.'</b> events this semester.';
?>
</table>
</body>
</html>
