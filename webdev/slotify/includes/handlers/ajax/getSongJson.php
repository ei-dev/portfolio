<?php
    require '../../config.php';

    if(isset($_POST['songId'])) {
        $songId = $_POST['songId'];
        $query = mysqli_query($con, "SELECT * FROM songs where id='$songId'");

        $result = mysqli_fetch_array($query);

        $json = json_encode($result);

        echo $json;
    }

?>