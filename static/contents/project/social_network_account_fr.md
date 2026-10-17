Après [mon projet d'automatisation d'une chaîne YouTube](/project/auto_youtube_channel), j'ai voulu retenter l'expérience sur une autre plateforme. Instagram et TikTok m'intéressaient, et je me suis lancé dans l'automatisation de plusieurs comptes.

Cette fois, j'ai choisi de générer du contenu original avec l'IA générative. J'avais déjà l'habitude de monter des vidéos par le code : le travail portait surtout sur la création du contenu et l'amélioration de mes outils de montage.

## Commencer par un compte de poésie

Je voulais que chaque compte ait sa propre identité, tout en partageant une structure de production similaire. Pour me concentrer d'abord sur la technique, j'ai commencé par un concept simple : publier une lecture de poème par jour, avec un fond vidéo, un accompagnement sonore et le texte qui défile à l'écran.

## Générer le contenu

J'ai séparé la génération du script de la préparation des ressources vidéo.

Pour le texte, j'ai utilisé GPT-3.5 d'OpenAI. Après avoir ajusté les prompts, j'obtenais des scripts fiables et cohérents. Le même prompt permettait au modèle de choisir un fond vidéo parmi une liste de vidéos libres de droits récupérées sur Pexels. Cela ressemblait à du Retrieval-Augmented Generation (RAG), sans embeddings ni stockage vectoriel, dont je n'avais pas besoin pour un si petit volume de données.

L'API d'ElevenLabs générait ensuite la voix à partir du poème.

Il restait à synchroniser les sous-titres avec l'audio. J'ai d'abord utilisé un modèle open source qui acceptait le texte brut pour l'aligner avec la voix. Cela évitait les erreurs qu'un outil de transcription comme Whisper aurait pu introduire en retrouvant lui-même les mots. J'ai ensuite découvert un autre endpoint de l'API ElevenLabs qui fournissait directement l'alignement texte-voix, ce qui a simplifié cette étape.

## Construire mon outil de montage

Dans mon projet précédent, j'utilisais MoviePy et FFmpeg. Cette fois, j'ai construit mon propre SDK de montage en Python autour de FFmpeg, en m'inspirant d'Adobe Premiere Pro.

J'ai repris les notions de calques et de filtres pour manipuler des images, des vidéos et des pistes audio. Cet outil me permettait notamment d'animer les sous-titres.

La manipulation du texte restait difficile avec cette approche. J'ai utilisé Pillow pour générer une image de chaque état du texte, puis intégré ces images à la vidéo avec FFmpeg.

<div align="center">
    <video src="/assets/social_network_account/video.mp4" loop controls style="max-height: 50vh; padding: 0 2rem;"></video>
</div>

Exemple de vidéo.

## Publier sur Instagram

J'ai utilisé l'API de Meta pour publier sur Instagram. Dans cette intégration, la vidéo et sa miniature devaient être accessibles sur un serveur : je ne pouvais pas envoyer directement les fichiers depuis le client. J'ai donc dû prévoir cette étape dans le processus de publication.

## Gérer plusieurs comptes

Une fois le premier compte en place, j'ai repris une partie importante du code pour partager les outils entre plusieurs comptes tout en gardant la possibilité de les faire évoluer séparément.

J'ai ajouté une file de tâches avec Redis et Celery pour exécuter la génération et la publication de façon asynchrone. Cette architecture devait permettre d'ajouter des ressources d'hébergement si le nombre de comptes augmentait.

En pratique, j'ai toujours gardé une seule file avec un seul worker pour le rendu vidéo. Mon hébergement n'avait pas les ressources nécessaires pour lancer plusieurs rendus en parallèle.

J'ai aussi développé une interface en Vue.js pour suivre l'exécution des étapes de chaque compte et consulter l'historique des publications.

## Pourquoi j'ai arrêté

J'ai fait tourner le projet pendant plusieurs mois. Les quelques comptes créés avaient du mal à trouver leur place parmi les autres contenus. J'ai commencé à développer des concepts plus originaux, puis abandonné face aux règles d'Instagram sur la gestion de plusieurs comptes, que je trouvais floues et parfois injustement restrictives. Je n'ai pas pu poursuivre sur TikTok, dont l'API m'était quasiment inaccessible.

Ce projet m'a aidé à mieux séparer les responsabilités dans mon code et à comprendre comment l'exécution asynchrone permet de traiter davantage de tâches. Les limites de mon outil de montage m'ont aussi amené à explorer Remotion, qui me semblait prometteur.
