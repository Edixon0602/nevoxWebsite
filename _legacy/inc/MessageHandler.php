<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once '../vendor/autoload.php';

class MessageHandler
{
  private $smtpHost;
  private $smtpPort;
  private $smtpUser;
  private $smtpPass;
  private $smtpEncryption;
  private $fromEmail;
  private $fromName;
  private $mailer;

  /**
   * Constructor: configura los parámetros SMTP y el remitente por defecto.
   *
   * @param array $smtpConfig  Claves: host, port, user, pass, encryption (tls, ssl o null)
   * @param array $fromConfig  Claves: email, name (opcional)
   */
  public function __construct(array $smtpConfig, array $fromConfig)
  {
    $this->smtpHost = $smtpConfig['host'];
    $this->smtpPort = $smtpConfig['port'];
    $this->smtpUser = $smtpConfig['user'];
    $this->smtpPass = $smtpConfig['pass'];
    $this->smtpEncryption = $smtpConfig['encryption'] ?? 'tls';
    $this->fromEmail = $fromConfig['email'];
    $this->fromName = $fromConfig['name'] ?? '';

    $this->mailer = new PHPMailer(true);
  }

  /**
   * Envía un correo electrónico usando SMTP.
   *
   * @param string $to          Correo electrónico del destinatario
   * @param string $subject     Asunto del mensaje
   * @param string $body        Cuerpo del mensaje (HTML permitido)
   * @param array  $attachments Lista opcional de rutas de archivos a adjuntar
   * @return bool               True si se envió correctamente
   * @throws Exception          Si ocurre un error en el envío
   */
  public function sendEmail(string $to, string $subject, string $body, array $attachments = []): bool
  {
    try {
      $this->mailer->clearAddresses();
      $this->mailer->clearAttachments();

      $this->mailer->isSMTP();
      $this->mailer->Host = $this->smtpHost;
      $this->mailer->SMTPAuth = true;
      $this->mailer->Username = $this->smtpUser;
      $this->mailer->Password = $this->smtpPass;
      $this->mailer->SMTPSecure = $this->smtpEncryption;
      $this->mailer->Port = $this->smtpPort;
      $this->mailer->CharSet = 'UTF-8';

      $this->mailer->setFrom($this->fromEmail, $this->fromName);
      $this->mailer->addAddress($to);
      $this->mailer->isHTML(true);
      $this->mailer->Subject = $subject;
      $this->mailer->Body = $body;
      $this->mailer->AltBody = strip_tags($body); // texto plano alternativo

      foreach ($attachments as $filePath) {
        if (file_exists($filePath)) {
          $this->mailer->addAttachment($filePath);
        }
      }

      $this->mailer->send();
      return true;
    } catch (Exception $e) {
      throw new Exception("Error al enviar correo: {$this->mailer->ErrorInfo}");
    }
  }

  /**
   * Guarda los datos de un formulario de contacto en la tabla n_form_submissions.
   *
   * @param PDO    $pdb     Conexión PDO activa a la base de datos.
   * @param string $name    Nombre del contacto.
   * @param string $email   Correo electrónico.
   * @param string $tel     Teléfono.
   * @param string|null $message Mensaje adicional (opcional, si la tabla tiene esa columna).
   * @return bool True si se insertó correctamente.
   * @throws Exception Si hay error en la inserción.
   */
  public function saveFormSubmission(PDO $pdb, string $name, string $email, string $tel, ?string $message = null): bool
  {
    // Si la tabla tiene columna 'message' y se proporciona, la incluimos
    if ($message !== null) {
      $sql = "INSERT INTO n_form_submissions (name, email, tel, message) VALUES (:name, :email, :tel, :message)";
      $stmt = $pdb->prepare($sql);
      $stmt->bindParam(':message', $message);
    } else {
      $sql = "INSERT INTO n_form_submissions (name, email, tel) VALUES (:name, :email, :tel)";
      $stmt = $pdb->prepare($sql);
    }
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':tel', $tel);
    if (!$stmt->execute()) {
      $error = $stmt->errorInfo();
      throw new Exception("Error al guardar formulario: " . $error[2]);
    }
    return true;
  }
}