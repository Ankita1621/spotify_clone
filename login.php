<?php
$insert=false;
if(isset($_POST['name'])){
 $server = "localhost";
 $username ="root";
 $password = "";
 $connection = mysqli_connect($server,$username,$password);
 if(!$connection){
    die("connection to this database failed due to".
    mysqli_connect_error());
 }
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$sql = "INSERT INTO `spotify`.`login` ( `name`, `phone`, `email`, `dt`) VALUES ('$name', '$phone', '$email', '2023-04-26');";
  if($connection->query($sql) == true){
   // echo "succesfully inserted";
   $insert = true;
  }
  else{
    echo "ERROR : $sql <br> $connection->error";
  }
  $connection->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
     <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <h2>Welcome to Spotify</h2>
        <p>Enter your details</p>
       <?php
       if($insert==true){
       echo "<p class='submitmsg'>You are succesfully Logged in !!</p>";}
       ?>
        <form action="login.php" method="post">
            <input type="text" name="name" id="name" placeholder="Enter your name">
            <input type="phone" name="phone" id="phone" placeholder="Enter your phone number">
            <input type="email" name="email" id="email" placeholder="Enter your email id">
            <button class="btn">submit</button>
         </form>
    </div>
    <a href="spotify.html"><button>GO TO HOME PAGE</button></a>
</body>
</html>