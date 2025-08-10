
Après [mon projet d'automatisation d'une chaîne YouTube](/project/auto_youtube_channel), j'ai longtemps réfléchi à la possibilité de retenter l'expérience sur une autre plateforme. Les réseaux sociaux, comme Instagram ou TikTok, étant en vogue, j'ai décidé de me lancer dans un projet d'automatisation de plusieurs comptes.

## Introduction

Pour concevoir ces comptes, je ne voulais pas me baser sur un contenu multimédia existant, mais plutôt **créer quelque chose de nouveau et original**. L'ère de l'**IA générative** étant en plein essor, j'ai voulu essayer cette approche.

Maîtrisant une approche d'édition vidéo basée sur le code, la complexité du projet allait résider dans la **création du contenu en lui-même**, ainsi que dans l'amélioration de mon workflow d'édition vidéo.

## Objectif

Mon objectif était de **créer des comptes avec une identité propre**. La structure serait plus ou moins la même pour chaque compte, mais la personnalité et l'identité seraient différentes.

Pour commencer, j'ai choisi de me concentrer sur les aspects techniques et j'ai ainsi préféré un concept le plus simple possible : *un compte de poésie*.  
L'objectif serait ainsi de publier **une lecture de poème chaque jour**, avec un *fond vidéo et sonore agréable, le tout laissant défiler le texte du poème*.

## Génération de contenu

Pour la génération du contenu, j'ai divisé la tâche en deux parties : la **génération du script textuel** et la **création des ressources nécessaires** à la vidéo.

Pour la première partie, j'ai utilisé **le LLM** du moment, à savoir celui d'OpenAI, **GPT-3.5**. Après un peu de **prompt engineering**, j'ai obtenu une génération fiable et cohérente de scripts pour mes vidéos.

Pour la seconde partie, j'ai utilisé **Pexels** afin de récupérer des fonds vidéo libres de droits. Le fond idéal était sélectionné par le LLM lors du prompt initial (en indiquant le nom **parmi** la liste proposée). Cette méthode revenait finalement à faire du _Retrieval-Augmented Generation_ (**RAG**), mais sans embedding ni stockage vectoriel, ce qui n’était pas vraiment utile vu le volume de données.

Pour la voix récitant la poésie, j'ai également utilisé l’acteur le plus reconnu de son domaine, **ElevenLabs**, qui propose une API permettant de générer des voix de haute qualité.  
J'ai ainsi pu générer la voix du poème à partir du texte fourni par le LLM.

Néanmoins, il restait un élément à ajouter : les **sous-titres**. Nous avions le texte et la voix, mais leur synchronisation temporelle n'était pas encore réalisée. Ce processus d'**alignement du texte** était effectué à l'aide d'un modèle open source, capable d’injecter notre texte brut et d’éviter ainsi les erreurs qu’un modèle comme Whisper aurait pu commettre en retranscrivant lui-même les mots.

Par la suite, j'ai découvert qu'il était directement possible d'obtenir un alignement texte/voix via un autre endpoint de l’API d’ElevenLabs, ce qui a simplifié le processus.

## Création de la vidéo

Dans mon précédent projet, j'avais utilisé **MoviePy** et **FFmpeg** pour l'édition vidéo. Pour ce projet, j'ai souhaité me baser uniquement sur **FFmpeg**. Pour ce faire, je me suis inspiré d’outils que je connaissais déjà, comme *Adobe Premiere Pro*, afin de créer **mon propre SDK d'édition vidéo en Python**.

En reprenant les concepts de **calques** et de **filtres**, j'ai pu concevoir un éditeur vidéo capable de gérer des éléments tels que les images, les vidéos et les pistes audio.  
Cela m'a permis de créer les animations dynamiques des sous-titres.

> Une des contraintes de cette approche était de ne pas pouvoir manipuler facilement du texte.  
> J'ai donc utilisé la librairie **Pillow** pour générer les images correspondant à chaque état du texte, qui étaient ensuite intégrées dans la vidéo via FFmpeg.

<div align="center">
    <video src="/assets/social_network_account/video.mp4" muted autoplay loop controls style="max-height: 50vh; padding: 0 2rem;"></video>
</div>
**Exemple de vidéo**

## Publication

Pour la publication, j'ai utilisé l'API de Meta pour Instagram. Celle-ci nécessitait néanmoins la mise à disposition de la vidéo et de la miniature sur un serveur, et ne permettait pas de publier directement le fichier depuis le client. Cela a donc demandé un peu plus de travail dans le **flux de publication**.

## Gestion multi-comptes

Une fois la première partie du projet terminée, j'ai voulu étendre la **solution à plusieurs comptes**. Pour cela, j'ai **refactorisé** une partie importante de la base de code, afin de pouvoir réutiliser les mêmes outils pour différents comptes, tout en conservant une liberté de développement.

Pour anticiper une éventuelle augmentation du nombre de comptes, qui impliquerait une mise à l'échelle de l'hébergement, j'ai décidé de mettre en place une architecture de **queuing** avec **Redis** et **Celery**. Cela permettait de gérer les tâches de génération de contenu et de publication de **manière asynchrone**, tout en assurant une **scalabilité horizontale**.

> Dans le contexte du projet, j'ai toutefois toujours utilisé une seule file de tâches (_queue_) avec un seul worker pour la partie de rendu vidéo, l’infrastructure d’hébergement ne disposant pas des ressources nécessaires pour exécuter plusieurs instances de rendu en parallèle.

Pour faciliter la gestion de plusieurs comptes, j'ai également développé une interface frontend avec **Vue.js**. Elle permettait de **visualiser** l’exécution des différentes étapes de chaque compte et de consulter l’historique des publications.

## Conclusion

Après avoir fait tourner le projet pendant **plusieurs mois**, j'ai mis un terme à l'expérience. Les quelques comptes que j'ai créés se sont **noyés dans la masse de contenu** généré par les autres utilisateurs.  J'ai réfléchi et commencé le développement de **comptes plus originaux**, mais la politique floue (et parfois **restrictive** de manière injustifiée) d'Instagram concernant la gestion de plusieurs comptes m'a conduit à abandonner l'idée. L'accès à l'API TikTok étant quasi impossible, je n'ai pas pu poursuivre vers cette autre plateforme.

Ce projet m'a permis de mieux appréhender les **concepts de séparation des responsabilités dans la logique du code**, ainsi que la gestion de la **scalabilité** grâce aux notions **asynchrones**.  
Je me suis également rendu compte des limites de mes intégrations, notamment en matière d'édition vidéo, ce qui m'a poussé à découvrir des solutions externes comme **Remotion**, très prometteuses.