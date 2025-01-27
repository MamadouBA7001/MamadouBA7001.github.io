<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $email = htmlspecialchars($_POST['email']);
    $statut = htmlspecialchars($_POST['statut']);
    $structure = htmlspecialchars($_POST['structure']);
    $commentaires = htmlspecialchars($_POST['commentaires']);

    // Destinataire de l'email
    $destinataire = "mamadouba7001@gmail.com";

    // Sujet du message
    $sujet = "Nouveau message de contact depuis votre site";

    // Corps du message
    $message = "
    <html>
    <head>
        <title>Nouveau message de contact</title>
    </head>
    <body>
        <p><strong>Nom :</strong> $nom</p>
        <p><strong>Prénom :</strong> $prenom</p>
        <p><strong>Téléphone :</strong> $telephone</p>
        <p><strong>Email :</strong> $email</p>
        <p><strong>Statut :</strong> $statut</p>
        <p><strong>Structure :</strong> $structure</p>
        <p><strong>Commentaires :</strong><br>$commentaires</p>
    </body>
    </html>
    ";

    // Entêtes de l'email (en HTML)
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Envoi de l'email
    if (mail($destinataire, $sujet, $message, $headers)) {
        echo "Merci d'avoir rempli ce formulaire. Vous recevrez une réponse très prochainement.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.";
    }

    // Envoi de la confirmation à l'utilisateur
    $sujet_user = "Confirmation de réception de votre message";
    $message_user = "
    <html>
    <head>
        <title>Merci pour votre message</title>
    </head>
    <body>
        <p>Bonjour,</p>
        <p>Merci d'avoir contacté Mr Ba Mamadou. Vous recevrez très prochainement votre réponse.</p>
        <hr>
        <p>Hello,</p>
        <p>Thank you for contacting Mr Ba Mamadou. You will receive a reply shortly.</p>
        <br>
        <p><strong>Mamadou BA</strong><br>Geomatician and Remote Sensing Specialist</p>
    </body>
    </html>
    ";

    // Envoi de l'email de confirmation à l'utilisateur
    mail($email, $sujet_user, $message_user, $headers);
} else {
    echo "Méthode non autorisée.";
}
?>
