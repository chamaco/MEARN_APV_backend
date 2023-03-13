import nodemailer from 'nodemailer'

const emailOlvidePasword = async (datos) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      const {email, nombre, token} = datos
    
    //Enviar el email 
    const info = await transporter.sendMail({
        from:'APV - Administrador de Pacientes de veterinario',
        to:email,
        subject: 'Restablece tu Password',
        text: 'Restablece tu Password',
        html: `<p>Hola: ${nombre}, Has solicitado reestablecer tu password.</p>
                <p>Sigue el siguiente enlace para generar un nuevo password:
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
                
                <p>Si tu no creaste esta cuenta, puedes ignorar este correo</p>
        `
    });

    console.log('Mensaje enviado: %s', info.messageId);
}

export default emailOlvidePasword