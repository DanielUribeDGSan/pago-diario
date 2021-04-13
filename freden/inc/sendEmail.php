<?php

// error_reporting(E_ALL);
// ini_set('display_errors', '1');



header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Content-type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../lib/PHPMailer/src/Exception.php';
require '../lib/PHPMailer/src/PHPMailer.php';
require '../lib/PHPMailer/src/SMTP.php';


if (!$_POST) {
	echo json_encode(["message" => "error_method", "error" => "GET method no sopport"]);
	return false;
}

$name 		= isset($_POST['nombre']) ? $_POST['nombre'] : null;
$email 		= isset($_POST['email']) ? $_POST['email'] : null;
$mensaje 	= isset($_POST['mensaje']) ? $_POST['mensaje'] : null;


if ($name == null || $email == null || $mensaje == null ) {
	echo json_encode(["message" => "error_parameters", "error" => "Not parameters"]);
	return false;
}


$mail = new PHPMailer(true);

$mail->CharSet = 'UTF-8';
//$mail->SMTPDebug = 2; 
$mail->IsSMTP();                                      // Set mailer to use SMTP
//$mail->Host = 'smtp.gmail.com';                 // Specify main and backup server
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;                                    // Set the SMTP port
$mail->SMTPAuth = true;                               // Enable SMTP authentication
//$mail->Username = '';                // SMTP username
//$mail->Password = '';                  // SMTP password
$mail->Username = "baster07mi@gmail.com";
$mail->Password = 'Slaner69';
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
//isaac@azlo.online
$mail->From = 'baster07mi@gmail.com';
$mail->FromName = 'Contacto';
$mail->AddAddress('isaac@azlo.online');  // Add a recipien


$mail->IsHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contacto Consulting Freden';

$body = "<p> <strong>Nombre: </strong> ".$name." </p>";
$body .= "<p> <strong>Correo: </strong> ".$email." </p>";
$body .= "<p> <strong>Mensaje: </strong> ".$mensaje." </p>";

$mail->Body    = $body;

if ( !$mail->Send() ) {
   // echo 'Message could not be sent.';
   // echo 'Mailer Error: ' . $mail->ErrorInfo;
	echo json_encode(["message" => "error_send", "error" => $mail->ErrorInfo]);
   	return false;
}

echo json_encode(["message" => "ok"]);