const confirm = (orderDetails, direction, payment, total, orderId) => {
  let MailBody = `<html>
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
                /* CLIENT-SPECIFIC STYLES */
                body,
                table,
                td,
                a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }

                table,
                td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }

                img {
                    -ms-interpolation-mode: bicubic;
                }

                /* RESET STYLES */
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                }

                table {
                    border-collapse: collapse !important;
                }

                body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }

                /* iOS BLUE LINKS */
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }

                /* MEDIA QUERIES */
                @media screen and (max-width: 480px) {
                    .mobile-hide {
                        display: none !important;
                    }

                    .mobile-center {
                        text-align: center !important;
                    }
                }

                /* ANDROID CENTER FIX */
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
            </style>
        </head>

        <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">

            <!-- HIDDEN PREHEADER TEXT -->
            <div
                style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
                Orden confirmada #${orderId}
            </div>

            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
                        <!--[if (gte mso 9)|(IE)]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                <tr>
                <td align="center" valign="top" width="600">
                <![endif]-->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                            <tr>
                                <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#044767">
                                    <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                        <tr>
                        <td align="left" valign="top" width="300">
                        <![endif]-->
                                    <div
                                        style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="left" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                    class="mobile-center">
                                                    <h1 style="font-size: 30px; font-weight: 800; margin: 0; color: #ffffff;">
                                                        E-Commerce G7</h1>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        <td align="right" width="300">
                        <![endif]-->
                                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                        class="mobile-hide">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="right" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                        <tr>
                                                            <td
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                                <p
                                                                    style="font-size: 18px; font-weight: 400; margin: 0; color: #ffffff;">
                                                                    <a href="https://e-commerce-g7.vercel.app/" target="_blank"
                                                                        style="color: #ffffff; text-decoration: none;">Shop
                                                                        &nbsp;</a></p>
                                                            </td>
                                                            <td
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 24px;">
                                                                <a href="https://e-commerce-g7.vercel.app/" target="_blank"
                                                                    style="color: #ffffff; text-decoration: none;"><img
                                                                        src="https://i.postimg.cc/Gp4gn16N/8848807b-909c-4432-a757-54bc264cd76e.png"
                                                                        width="27" height="23"
                                                                        style="display: block; border: 0px;" /></a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 35px 35px 20px 35px; background-color: #ffffff;"
                                    bgcolor="#ffffff">
                                    <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                        <tr>
                        <td align="center" valign="top" width="600">
                        <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:600px;">
                                        <tr>
                                            <td align="center"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                                <img src="https://i.postimg.cc/zXn14TTW/af34304c-dd6e-4bd9-9280-4f93a5773351.png"
                                                    width="125" height="120" style="display: block; border: 0px;" /><br>
                                                <h2
                                                    style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                                    Orden Confirmada!
                                                </h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                                <p
                                                    style="font-size: 16px; font-weight: 400; line-height: 24px; color: #777777;">
                                                    En los siguentes dias te llegara una confirmacion de su despacho.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="padding-top: 20px;">
                                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tr>
                                                        <td width="76%" align="left" bgcolor="#eeeeee"
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                            Order # ${orderId}
                                                        </td>
                                                        <td width="14%" align="left" bgcolor="#eeeeee"
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                                            Precio
                                                        </td>
                                                    </tr>
                                                    ${orderDetails}
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left" style="padding-top: 20px;">
                                                <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                                    <tr>
                                                        <td width="75%" align="left"
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                                            TOTAL
                                                        </td>
                                                        <td width="25%" align="left"
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                                            ${total}
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="center" height="100%" valign="top" width="100%"
                                    style="padding: 0 35px 35px 35px; background-color: #ffffff;" bgcolor="#ffffff">
                                    <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                        <tr>
                        <td align="center" valign="top" width="600">
                        <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:660px;">
                                        <tr>
                                            <td align="center" valign="top" style="font-size:0;">
                                                <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                                    <tr>
                                    <td align="left" valign="top" width="300">
                                    <![endif]-->
                                                <div
                                                    style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">

                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                        style="max-width:300px;">
                                                        <tr>
                                                            <td align="left" valign="top"
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; color: black; line-height: 24px;">
                                                                <p style="font-weight: 800; color: black">Delivery Address</p>
                                                                ${direction}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    <td align="left" valign="top" width="300">
                                    <![endif]-->
                                                <div
                                                    style="display:inline-block; max-width:50%; min-width:240px; vertical-align:top; width:100%;">
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                        style="max-width:300px;">
                                                        <tr>
                                                            <td align="left" valign="top"
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                                                <p style="font-weight: 800; color: black">Metodo de pago</p>
                                                                <p style="color: black">${payment}</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 35px; background-color: #044767;" bgcolor="#044767">
                                    <!--[if (gte mso 9)|(IE)]>
                        <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                        <tr>
                        <td align="center" valign="top" width="600">
                        <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:600px;">
                                        <tr>
                                            <td align="center">
                                                <img src="https://i.postimg.cc/KctBNYPx/logosinnombre15x17-5cm.png" width="50"
                                                    height="50" style="display: block; border: 0px;" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 10px 0;">
                                                <p
                                                    style="font-size: 17px; font-weight: 800; line-height: 18px; color: #f8f9fc;">
                                                    3448, La Rioja, Buenos Aires
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="left"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                                            </td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                                </td>
                            </tr>
                        </table>
                        <!--[if (gte mso 9)|(IE)]>
                </td>
                </tr>
                </table>
                <![endif]-->
                    </td>
                </tr>
            </table>
        </body>
        </html>`;
  return MailBody;
};

module.exports = confirm