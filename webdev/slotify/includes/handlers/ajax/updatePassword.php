<?php
    require '../../config.php';
    
    if(!isset($_POST['oldPassword']) || !isset($_POST['newPassword1']) || !isset($_POST['newPassword2'])) {
        echo "Not all passwords have been set.";
        exit();   
    }

    if($_POST['oldPassword'] == "" || $_POST['newPassword1'] == "" || $_POST['newPassword2'] == "") {
        echo "Please fill in all fields.";
        exit();
        
    }
    

    $username = $_POST['username'];
    $oldPassword = $_POST['oldPassword'];
    $newPassword1 = $_POST['newPassword1'];
    $newPassword2 = $_POST['newPassword2'];

    if($newPassword1 != $newPassword2) {
        echo "Your new passwords do not match.";
        exit();
    }

    if(preg_match('/[^A-Za-z0-9]/', $newPassword1)) {
        echo "Your password must only contains numbers and/or numbers.";
        exit();
    }
    
    if(strlen($newPassword1 > 30 || strlen($newPassword1) < 5)) {
        echo "Your password must be between 5 to 30 characters.";
        exit();
    }

    if($oldPassword == $newPassword1) {
        echo "Your current password cannot be the same as your new password.";
        exit();
    }

    $oldMd5 = md5($oldPassword);
    
    if($oldMd5 == $oldUserPassword) {
        echo "Cannot use past passwords as a new password.";
        exit();
    }

    $passwordCheck = mysqli_query($con, "SELECT * FROM users WHERE username = '$username' AND password = '$oldMd5'");

    if(mysqli_num_rows($passwordCheck) != 1) {
        echo "Password is incorrect.";
        exit();
    }

    $newMd5 = md5($newPassword1);

    $query = mysqli_query($con, "UPDATE users SET password = '$newMd5' WHERE username = '$username'");

    if($query == true) {
        echo "Password successfully changed.";
    }
?>