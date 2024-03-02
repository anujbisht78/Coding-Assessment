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

// Student information
$name = "John Doe";
$age = 20;
$grade = 85.5;

// SQL query to insert a new student record
$sql = "INSERT INTO Students (name, age, grade) VALUES ('$name', $age, $grade)";

if ($conn->query($sql) === TRUE) {
    echo "New student record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
