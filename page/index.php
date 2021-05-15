<html>
<head>
<title>MIT IEEE Event Tracker</title>
<?php include 'header.php'; ?>
<style>
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
    <br>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfKe-dudFk_PYu3WZ4hntsxnIr9h5lUOK_I8KJCQDg74EQF1A/viewform?embedded=true" width="640" height="640" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    <br>
    <h2> EVENT TRACKER </h2>
    <p>
        <?php
         if (@$_SERVER['SSL_CLIENT_S_DN_CN']) {
         $parts = explode('@', $_SERVER['SSL_CLIENT_S_DN_Email']);
         $user = $parts[0];
          echo 'Hello <b>' . $_SERVER['SSL_CLIENT_S_DN_CN'] . '</b>!<br>'
              . 'email:<b>' . $_SERVER['SSL_CLIENT_S_DN_Email'] . '</b>';
         } else {
          echo 'No certificate has been detected.';
         }
        ?>
    </p>
    <table>
        <tr><th>Events You Attended</th></tr>
        <?php
         $csvFile = file('https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6rNmKAsXaj3bCmQ-jnlQVeCOs_2Xra0saHRWXEmAn8-n1pT6b57yLugKJ1fMM5wbPPP-b3AQWOMhQ/pub?gid=960057585&single=true&output=csv');
         $count = 0;

        foreach ($csvFile as $line) {
            $data = str_getcsv($line);
            if (strtolower($data[0]) == strtolower($_SERVER['SSL_CLIENT_S_DN_Email'])){
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
    <p> You qualify for the <b><?php echo $count >= 7 ? 'GOLD' : ($count >= 5 ? 'SILVER' : ($count >= 2 ? 'BRONZE' : 'N/A')); ?></b> swag bundle.</p>
</body>
</html>
