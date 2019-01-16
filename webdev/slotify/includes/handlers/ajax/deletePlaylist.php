<?php
    include("../../config.php");

    if(isset($_POST['playlistId'])) {
        $playlistId = $_POST['playlistId'];

        $playlistQuery = mysqli_query($con, "DELETE FROM playlists where id = '$playlistId'");

    }
?>