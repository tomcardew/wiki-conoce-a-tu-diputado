<?php

//Define global connection credentials
define('DB_SERVER', 'localhost');
define('DB_NAME', 'wiki-conoce');
define('DB_USER', 'root');
define('DB_PASS', '');

//2Z128LcndFPx

class Connection{

    public function connect(){
        //Create the connection with the db
        $conn = new mysqli(DB_SERVER, DB_USER, DB_PASS, DB_NAME);
        if($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        // mysqli_set_charset($conn, 'utf8');
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        return $conn;
    }
}

?>