<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{data:subject}</title>
    </head>
    <body>
        <table>
            <tr>
                <td><p><strong>Hi {data:firstname},</strong></p></td>
            </tr>
            <tr>
                <td><p>&nbsp;</p></td>
            </tr>
            <tr>
                <td>
                    <p>Your <strong>{data:site_name}</strong> password has been reset.</p>
                    <p>Your temporary password is: <strong>{data:password}</strong></p>
                    <p>You may be prompted to enter a more memorable password after you login.</p>
                </td>
            </tr>
            <tr>
                <td><p>&nbsp;</p></td>
            </tr>
            <tr>
                <td>
                    <p><strong>{data:site_name}</strong>
                        <br /><em><a href="{data:url}">{data:url}</a></em></p>
                </td>
            </tr>
        </table>
    </body>
</html>