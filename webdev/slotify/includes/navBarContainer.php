<div id="navBarContainer">
    <nav class="navBar">
        <span role="link" tabindex="0" onclick="openPage('index.php')" class="logo"  title="Slotify">
            <img src="assets/images/icons/logo.png"">
        </span>

        <div class="group">
            <div class="navItem">
            <span role='link' tabindex='0' onclick="openPage('search.php')" class="navItemLink">Search
                    <img src="assets/images/icons/search.png" class="icon" alt="Search">
                </a>
            </div>

        </div>

        <div class="group">
            <div class="navItem">
                <span role="link" tabindex="0" onclick="openPage('browse.php')" class="navItemLink">Browse</span>
            </div>

            <div class="navItem">
                <span role="link" tabindex="0" onclick="openPage('yourMusic.php')" class="navItemLink">Your Music</span>
            </div>

            <div class="navItem">
                <span role="link" tabindex="0" onclick="openPage('settings.php')" class="navItemLink"><?php echo $userLoggedIn->getFirstAndLastName(); ?></span>
            </div>
            
            <br />
            
            <div class="navItem">
                <a href="logout.php" class="navItemLink">Logout</a>
            </div>
        </div>
    </nav>
</div>