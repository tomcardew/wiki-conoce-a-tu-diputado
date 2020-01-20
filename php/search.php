<?php

include "connection.php";

function search()
{
    $conn = new Connection();
    $db = $conn->connect();
    $q = $_POST['q'];
    $query = "SELECT * FROM distritos WHERE distrito LIKE '%$q%' OR municipio LIKE '%$q%' OR colonia LIKE '%$q%' OR seccion LIKE '%$q%'";
    $sql = mysqli_query($db, $query);
    $dataset = array();
    if (mysqli_num_rows($sql) > 0) {
        while ($row = mysqli_fetch_row($sql)) {
            array_push($dataset, $row);
        }
    }
    echo json_encode($dataset);
    $db->close();
}

if ($_POST['fn'] == "search") {
    search();
}
