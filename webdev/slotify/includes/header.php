<?php
    // Database configuration
    require 'includes/config.php';

    // Classes
    require 'includes/classes/Artist.php';
    require 'includes/classes/Album.php';
    require 'includes/classes/Song.php';
    require 'includes/classes/Constants.php';
    require 'includes/classes/User.php';

    if(isset($_SESSION['userLoggedIn'])) {
        $userLoggedIn = new User($con, $_SESSION['userLoggedIn']);
        $username = $userLoggedIn->getUsername();
        echo "
            <script>
                userLoggedIn = '$username'; 
            </script>";
    } else {
        header('Location: register.php');
    }
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title><?php echo Constants::$title; ?></title>
        <link rel="stylesheet" type="text/css" href="assets/css/style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="assets/js/script.js"></script>
    </head>
    <body>
        <div id="mainContainer">
            <div id="topContainer">
                <?php require 'includes/navBarContainer.php'; ?>

                <div id="mainViewContainer">
                
                    <div id="mainContent">