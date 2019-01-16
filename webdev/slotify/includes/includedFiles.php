<?php
    if(isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
        // Database configuration
        require 'includes/config.php';

        // Classes
        require 'includes/classes/User.php';
        require 'includes/classes/Artist.php';
        require 'includes/classes/Album.php';
        require 'includes/classes/Song.php';
        require 'includes/classes/Playlist.php';
        require 'includes/classes/Constants.php';

        if(isset($_GET['userLoggedIn'])) {
            $userLoggedIn = new User($con, $_GET['userLoggedIn']);
        }
    } else {
        require('includes/header.php');
        require('includes/footer.php');

        $url = $_SERVER['REQUEST_URI'];
        echo 
        "<script>openPage('$url');</script>";
        exit();
    }
?>