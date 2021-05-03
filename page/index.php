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
    <div class="header">
        <div class="logo-wrapper">
            <h1>
                <a href="../">MIT&nbspIEEE/ACM</a>
            </h1>
        </div>
    </div>
    <h2> EVENT TRACKER </h2>
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
        <tr><th>Events You Attended</th></tr>
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
