<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if ($username === '' || $password === '') {
        echo "<script>alert('Please enter both username and password');window.location='login.html';</script>";
        exit;
    }

    $dbHost = 'localhost';
    $dbUser = 'root';
    $dbPass = '';
    $dbName = 'tour';

    $conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);
    if (!$conn) {
        die('Database connection failed: ' . mysqli_connect_error());
    }

    $stmt = mysqli_prepare($conn, "SELECT id FROM users WHERE username = ? AND password = ?");
    if ($stmt) {
        mysqli_stmt_bind_param($stmt, 'ss', $username, $password);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        if (mysqli_stmt_num_rows($stmt) === 1) {
            mysqli_stmt_close($stmt);
            mysqli_close($conn);
            header('Location: tours.html');
            exit;
        }

        mysqli_stmt_close($stmt);
    }

    mysqli_close($conn);
    echo "<script>alert('Invalid username or password');window.location='login.html';</script>";
    exit;
}

header('Location: login.html');
exit;
?>
