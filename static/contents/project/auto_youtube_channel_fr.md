
Ce projet consistait à créer une chaîne YouTube dédiée à des compilations quotidiennes des meilleurs clips Twitch, enrichies avec des habillages graphiques pour améliorer l’expérience utilisateur. En utilisant Python pour la gestion de la chaîne, les tâches comprenaient le scraping de données, l’acquisition de ressources, ainsi que la sélection et la création de contenu.

## Introduction

Il s’agit de **mon tout premier projet personnel de programmation**, et surtout de mon apprentissage de **Python, des APIs, de FFmpeg, de Docker et de l’hébergement sur un VPS**. Le projet consistait à développer une chaîne YouTube spécialisée dans les compilations quotidiennes des **meilleurs clips Twitch**.  
L’objectif était d’enrichir l’**expérience utilisateur** grâce à des éléments graphiques. Le projet repose sur l’API de Twitch pour **scraper et stocker** les données, et comprend également **l’acquisition de ressources**, la **sélection de contenu** et sa **publication automatique**.

## Structure des Vidéos

<video class="px-8" muted autoplay loop> <source src="/assets/auto_youtube_channel/video.mp4" type="video/mp4"> </video> **Extrait vidéo**

Chaque vidéo compilée présentait une **structure dynamique** :
-   En haut à gauche : un **résumé** affichant les noms des streamers   
-   À droite : le **clip Twitch** sélectionné   
-   En bas à gauche : la **vignette du jeu**   
-   En bas à droite : le **titre du clip**
    

Des **appels à l’action** pour le partage et l’abonnement (**Call to Action**) étaient intégrés tout au long de la vidéo, avec un outro à la fin.

<video class="px-8" muted autoplay loop> <source src="/assets/auto_youtube_channel/call_to_action.mp4" type="video/mp4"> </video> **Exemple de Call to Action**

## Design des Miniatures

Les **miniatures** de chaque vidéo étaient conçues pour capter l’attention des spectateurs, avec des couleurs vives et des éléments graphiques percutants.  
Les **streamers les plus populaires étaient mis en avant** au centre avec des images prédéfinies, tandis que les photos de profil des autres streamers apparaissaient dans des cercles latéraux.  
Le numéro de l’épisode et une capture de deux clips viraux formaient l’arrière-plan, avec la possibilité de faire varier les couleurs de l’arrière-plan, du titre et des numéros selon **plusieurs combinaisons**.

![Miniature vidéo](/assets/auto_youtube_channel/thumbnail.jpg)  
**Miniature vidéo**

## Texte Généré Automatiquement

Un **titre** était généré automatiquement pour chaque vidéo, mettant en avant les streamers populaires présents.  
**Exemple de Titre :**  
```
Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Compil' Twitch FR #1]
```

Une **description** créait une timeline précise pour chaque clip inclus, facilitant ainsi la navigation dans la vidéo.

**Description Vidéo :**

```
••► Nouvelle compilation [n°1] des meilleurs clips Twitch français 🇫🇷 des dernières 24 heures.

••► 🔥 Aujourd'hui au programme : 🔥
00:00 - Mynthos : " Emmanuel Maquerong a un message pour Antoine Daniel ! "
    🔗 http://www.twitch.tv/mynthos

00:20 - Sackzi : " Quad feed head shot "
    🔗 http://www.twitch.tv/sackzi

[...]

••► A demain pour 💥 une nouvelle compilation 💥 !!

Si jamais vous êtes un streamer ne souhaitant plus apparaitre dans mes compilations, n’hésitez pas à me contacter sous l’adresse mail suivante afin de me le notifier :
📧 exemple@mail.com 📧
```