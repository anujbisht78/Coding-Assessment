<?php
$servername = "localhost"; // Replace with your MySQL server hostname
$username = "your_username"; // Replace with your MySQL username
$password = "your_password"; // Replace with your MySQL password
$database = "your_database"; // Replace with your MySQL database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
