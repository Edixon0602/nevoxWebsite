<?php

include 'MessageHandler.php';

// Cargar variables de entorno
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();
$dotenv->required(['DB_HOST', 'DB_USER', 'DB_NAME', 'DB_PASS', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_ENC']);

if (isset($_POST['action']) && $_POST['action'] === 'request-demo') {

  $name = $_POST['name'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];

  $smtpConfig = [
    'host' => $_ENV['SMTP_HOST'],
    'port' => (int) $_ENV['SMTP_PORT'],
    'user' => $_ENV['SMTP_USER'],
    'pass' => $_ENV['SMTP_PASS'],
    'encryption' => $_ENV['SMTP_ENC']
  ];

  $fromConfig = [
    'email' => $_ENV['SMTP_USER'],
    'name' => 'Nevox Agency'
  ];

  try {
    // Conexión a la base de datos
    $dsn = 'mysql:host=' . $_ENV['DB_HOST'] . ';dbname=' . $_ENV['DB_NAME'] . ';charset=utf8';
    $pdo = new PDO($dsn, $_ENV['DB_USER'], $_ENV['DB_PASS']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $mailHandler = new MessageHandler($smtpConfig, $fromConfig);

    // Guardar datos del formulario
    $mailHandler->saveFormSubmission($pdo, $name, $email, $tel);

    // Generar plantilla HTML del correo
    ob_start();
    include __DIR__ . '/email-templates/confirmation.php';
    $emailBody = ob_get_clean();

    // Enviar correo de confirmación al usuario
    $mailHandler->sendEmail(
      $email,
      '✓ Solicitud recibida — Nevox',
      $emailBody
    );

    // Notificación interna al admin
    ob_start();
    include __DIR__ . '/email-templates/admin-notification.php';
    $adminBody = ob_get_clean();

    $mailHandler->sendEmail(
      'serrano@nevox.pro',
      '🔔 Nuevo lead: ' . $name,
      $adminBody
    );

    header('Location: ../thank-you');
    exit;
  } catch (Exception $e) {
    //header('Location: ../demo?error=1');
    echo 'Error: ' . $e->getMessage();
    exit;
  }
}