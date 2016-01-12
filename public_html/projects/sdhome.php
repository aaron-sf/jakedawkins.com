<?php require_once '../Path.php'; ?>

<!DOCTYPE html>
<html lang="en">

<head>

    <title>Jake Dawkins</title>
    <?php include Path::partials().'bs_head.php' ?>

</head>

<body>

    <!-- IMPORT NAV BAR-->
    <?php include Path::partials().'nav.php' ?>

    <!-- Page Header -->
    <!-- background image for header below. -->
    <header class="intro-header" style="background-image: url('../img/imac-bg.jpg')">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div class="post-heading">
                        <h1>Solar Decathlon Smart Home Control (iOS) </h1>
                        <h2 class="subheading"></h2>
                        <span class="meta">Posted by Jake on April 16, 2015</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Post Content -->
    <article>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <p>The Solar Decathlon is a competition hosted by the U.S. Department of Energy. 
                    The goal of this competition is to build a sustainable home in 9 days. 
                    The competitors for this project are universities across the nation. 
                    For 2015, Clemson University is in this competition. The home Clemson is building will 
                    be built with multiple sensors and controllers to make the home controllable anywhere, 
                    in multiple ways.</p>

                    <p>This app interfaces with a MySQL database to read and write data about multiple 
                    sensors and control systems in the house. For a more detailed look at how this works, 
                    see the <a href="sdhome/2.SD.Home.Control.P6.TechnicalReferenceManual.pdf">Technical 
                    Reference Manual</a>.</p>
                    
                    <p>For more information...</p>

                    <ul>
                        <li>
                            <a href="sdhome_files/2.SD.Home.Control-App.zip">Final App Code</a>
                        </li>
                        <li>
                            <a href="sdhome_files/SmartHomeSimulator.zip">Final Smart Home Simulator</a>
                        </li>
                        <li>
                            <a href="sdhome_files/2.SD.Home.Control.P6.UserManual.pdf">Final User Manual</a>
                        </li>
                        <li>
                            <a href="sdhome_files/2.SD.Home.Control.P2B.pdf">Full Product Proposal</a>
                        </li>
                        <li>
                            <a href="http://github.com/jakedawkins/HomeControl">Github Repository</a>
                        </li>
                    </ul>
                    <br />
                </div> 
            </div> <!-- end row -->
            <div class="row">
                <a href="sdhome_files/img/sd_home-1.jpg"><img class="img-responsive col-lg-2 col-lg-offset-2 col-md-2 col-md-offset-1" src="sdhome_files/img/sd_home-1.jpg"  />
                <a href="sdhome_files/img/sd_home-2.jpg"><img class="img-responsive col-lg-2 col-md-2" src="sdhome_files/img/sd_home-2.jpg" /></a>
                <a href="sdhome_files/img/sd_home-3.jpg"><img class="img-responsive col-lg-2 col-md-2" src="sdhome_files/img/sd_home-3.jpg" /></a>
                <a href="sdhome_files/img/sd_home-4.jpg"><img class="img-responsive col-lg-2 col-md-2" src="sdhome_files/img/sd_home-4.jpg" /></a>
            </div> 
        </div>
    </article>

    <hr>

    <!-- IMPORT FOOTER & JS -->
    <?php include Path::partials().'footer.php' ?>

</body>

</html>
