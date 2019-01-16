<?php
    require '../../config.php';

    if(isset($_POST['artistId'])) {
        $artistId = $_POST['artistId'];
        $query = mysqli_query($con, "SELECT id, name FROM artists where id='$artistId'");

        $result = mysqli_fetch_array($query);

        $json = json_encode($result);

        echo $json;
    }
?>