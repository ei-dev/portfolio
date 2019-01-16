<?php

    // Database configuration
    require_once 'includes/config.php';
    
    // Classes
    require_once 'includes/classes/Account.php';
    require_once 'includes/classes/Constants.php';
    $account = new Account($con);

    function sanitizeFormPassword($password) {
        $password = strip_tags($password);

        return $password;
    }

    function sanitizeFormUsername($username) {
        $username = strip_tags($username);
        $username = str_replace(" ", "", $username);

        return $username;
    }

    function sanitizeFormString($inputText) {
        $inputText = strip_tags($inputText);
        $inputText = str_replace(" ", "", $inputText);

        if($inputText != $_POST['email'] && $inputText != $_POST['email2']) {
            $inputText = ucfirst(strtolower($inputText));
        }

        return $inputText;
    }    

    if(isset($_POST['registerButton'])) {
        $username = sanitizeFormUsername($_POST['username']);

        $firstName = sanitizeFormString($_POST['firstName']);
        $lastName = sanitizeFormString($_POST['lastName']);

        $email = sanitizeFormString($_POST['email']);
        $email2 = sanitizeFormString($_POST['email2']);

        $password = sanitizeFormPassword($_POST['password']);
        $password2 = sanitizeFormPassword($_POST['password2']);

        /** 
         * success : Successfully inserted account information into the Database.
         * 
         */

        $success = $account->register($username, $firstName, $lastName, $email,
        $email2, $password, $password2);

        if($success == true) {
            header("Location: index.php");
        }
    }
?>