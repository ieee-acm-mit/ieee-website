<html>
<head>
<title>MIT IEEE Event Tracker</title>
<?php include 'header.php'; ?>
<style>
<?php include '../templatemo_style.css'; ?>
<?php include '../css/tracker.css'; ?>
<link rel="stylesheet" href="../css/bootstrap.min.css">
<link rel="stylesheet" href="../css/animate.css">
<link rel="stylesheet" href="../css/templatemo_misc.css">
<link rel="stylesheet" href="../templatemo_style.css">
</style>
</head>
<body>
<div class="site-header">
    <div class="main-header">
        <div class="container">
            <div id="menu-wrapper">
                <div class="row">
                    <div class="logo-wrapper col-md-2 col-sm-2">
                        <h1>MIT&nbspIEEE/ACM Event Tracker
                        </h1>
                    </div>
                    <div class="col-md-10 col-sm-10 main-menu text-right">
                        <ul class="menu-first">
                            <li class="active"><a href="../">Return to home</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<p>
<?php
 if (@$_SERVER['SSL_CLIENT_S_DN_CN']) {
 $parts = explode('@', $_SERVER['SSL_CLIENT_S_DN_Email']);
 $user = $parts[0];
  echo 'Hello <b>' . $_SERVER['SSL_CLIENT_S_DN_CN'] . '</b>!<br>'
      . 'Kerb:<b>' . $user . '</b>';
 } else {
  echo 'No certificate has been detected.';
 }
?>
</p>
<table>
<tr><th>Events</th></tr>
<?php
 $csvFile = file('https://docs.google.com/spreadsheets/d/e/2PACX-1vSMkgV9ZcEuokH-P_CLKHNI8rSDO0PDfRZ3O9X9fqfIW7-HlUPcHhv0sG0iG3Fwvr3M5AqoAXPLwAaw/pub?output=csv');
 $count = 0;

foreach ($csvFile as $line) {
	$data = str_getcsv($line);
	if ($data[0] == $user){
?>
	    <tr>
	        <td> <?php echo $data[1]; ?></td>
        </tr>
<?php
		$count++;
	}
} ?>
</table>
<p> You have attended <b><?php echo $count; ?></b> events this semester.</p>
</body>
</html>
