<?php
/**
 * Plantilla HTML para notificación interna de nuevo lead.
 * 
 * Variables esperadas:
 * - $name  (string): Nombre del lead
 * - $email (string): Correo del lead
 * - $tel   (string): Teléfono del lead
 */

$timestamp = date('d/m/Y — H:i');
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo Lead — Nevox</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f0f0f5; font-family: 'Inter', Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased;">

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f0f5;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <!-- Main card -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(26, 28, 28, 0.08);">

          <!-- Header gradient bar -->
          <tr>
            <td style="background: linear-gradient(135deg, #004ac6, #4e45d5); height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>

          <!-- Logo -->
          <tr>
            <td align="center" style="padding: 32px 40px 20px;">
              <span style="font-family: 'Manrope', Arial, sans-serif; font-size: 24px; font-weight: 800; letter-spacing: -0.04em; color: #1a1c1c;">
                <span style="color: #004ac6;">⬡</span>&nbsp;Nevox — CRM
              </span>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 0 40px;">
              <div style="height: 1px; background-color: rgba(195, 198, 215, 0.4);"></div>
            </td>
          </tr>

          <!-- Alert badge -->
          <tr>
            <td align="center" style="padding: 32px 40px 8px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #eef3ff; border-radius: 24px; padding: 8px 20px;">
                    <span style="font-size: 13px; font-weight: 700; color: #004ac6; text-transform: uppercase; letter-spacing: 0.06em;">🔔 Nuevo Lead</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td align="center" style="padding: 16px 40px 8px;">
              <h1 style="margin: 0; font-family: 'Manrope', Arial, sans-serif; font-size: 24px; font-weight: 800; color: #1a1c1c; letter-spacing: -0.04em;">
                Alguien solicitó una demo
              </h1>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding: 4px 40px 28px;">
              <p style="margin: 0; font-size: 14px; color: #9a9aaa;">
                <?php echo $timestamp; ?>
              </p>
            </td>
          </tr>

          <!-- Lead data card -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3f3f3; border-radius: 12px; overflow: hidden;">

                <!-- Name -->
                <tr>
                  <td style="padding: 20px 28px 12px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9a9aaa;">Nombre</p>
                    <p style="margin: 0; font-size: 18px; font-weight: 700; color: #1a1c1c;"><?php echo htmlspecialchars($name); ?></p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 0 28px;">
                    <div style="height: 1px; background-color: rgba(195, 198, 215, 0.4);"></div>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding: 12px 28px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9a9aaa;">Email</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1c1c;">
                      <a href="mailto:<?php echo htmlspecialchars($email); ?>" style="color: #004ac6; text-decoration: none; font-weight: 600;"><?php echo htmlspecialchars($email); ?></a>
                    </p>
                  </td>
                </tr>

                <!-- Divider -->
                <tr>
                  <td style="padding: 0 28px;">
                    <div style="height: 1px; background-color: rgba(195, 198, 215, 0.4);"></div>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding: 12px 28px 20px;">
                    <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9a9aaa;">Teléfono</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1c1c;">
                      <a href="tel:<?php echo htmlspecialchars($tel); ?>" style="color: #004ac6; text-decoration: none; font-weight: 600;"><?php echo htmlspecialchars($tel); ?></a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA: WhatsApp al lead -->
          <tr>
            <td align="center" style="padding: 0 40px 12px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="background-color: #25d366; border-radius: 8px;">
                    <a href="https://wa.me/<?php echo preg_replace('/[^0-9]/', '', $tel); ?>" target="_blank" style="display: inline-block; padding: 14px 32px; font-family: 'Inter', Arial, sans-serif; font-size: 15px; font-weight: 700; color: #ffffff; text-decoration: none;">
                      💬&nbsp;&nbsp;Contactar por WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA: Email al lead -->
          <tr>
            <td align="center" style="padding: 0 40px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="border: 2px solid rgba(195, 198, 215, 0.4); border-radius: 8px;">
                    <a href="mailto:<?php echo htmlspecialchars($email); ?>" style="display: inline-block; padding: 12px 32px; font-family: 'Inter', Arial, sans-serif; font-size: 14px; font-weight: 700; color: #1a1c1c; text-decoration: none;">
                      ✉️&nbsp;&nbsp;Responder por Email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Bottom gradient bar -->
          <tr>
            <td style="background: linear-gradient(135deg, #004ac6, #4e45d5); height: 4px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
        </table>

        <!-- Footer -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; width: 100%;">
          <tr>
            <td align="center" style="padding: 24px 40px;">
              <p style="margin: 0; font-size: 11px; color: #b0b0be;">
                Notificación automática del sistema de leads · <a href="https://nevox.pro" style="color: #004ac6; text-decoration: none;">nevox.pro</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
