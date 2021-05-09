<html>
<head><title>Diagnostics</title></head>
<body>
<h1>Browser Detection</h1>
<p>
<?php
 print 'You are using <b>' . $_SERVER['HTTP_USER_AGENT'] . '</b> from <b>'
     . $_SERVER['REMOTE_ADDR'] . '</b> (<b>'
     . gethostbyaddr($_SERVER['REMOTE_ADDR']) . '</b>).';
?>
</p>
<h1>Certificate Detection</h1>
<p>
<?php
 if (@$_SERVER['SSL_CLIENT_S_DN_CN']) {
  echo 'Welcome, <b>' . $_SERVER['SSL_CLIENT_S_DN_CN'] . '</b>.<br>'
      . 'A certificate for <b>' . $_SERVER['SSL_CLIENT_S_DN_Email'] . '</b>'
      . ', issued by the <b>' . $_SERVER['SSL_CLIENT_I_DN_O']
      . '</b>, is correctly installed on your browser.<br>'
      . 'Your certificate will expire on ' . $_SERVER['SSL_CLIENT_V_END'] . '.';
 } else {
  ?>No certificate has been detected. Please ensure you are accessing
  <a href="https://geofft.scripts.mit.edu:444/detect.php">http<b>s</b>://geofft.scripts.mit.edu<b>:444</b>/detect.php</a>.<?php } ?>
</p>
<h1>Server Detection</h1>
<p>
<?php
 exec('/sbin/ifconfig eth0', $ifconfig);
 $server_ip = preg_replace('/.*inet addr:([0-9\.]*).*/', '$1', $ifconfig[1]);
 print 'You are currently connected to <b>'
     . gethostbyaddr($server_ip) . '</b> (' . $server_ip
     . ').<br><pre>';
 system('/sbin/ifconfig eth0');
 print '</pre>';
?>
</body>
</html>
