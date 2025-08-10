
**Comment créer une chaîne YouTube autonome ?** ou autrement dit, comment **récupérer** de la **donnée** et des **ressources**, la **filtrer** et l'**enrichir**, pour ensuite la **publier** sans aucune intervention humaine ?

## Introduction

Après avoir vu passer sur YouTube de nombreuses compilations de clips Twitch, je me suis dit que ce contenu avait un **montage très répétitif**.

Pour une mise en contexte simple, il faut savoir que les clips Twitch sont des extraits d'une diffusion vidéo en direct plus longue, appelée **stream**. Les clips peuvent être créés par les spectateurs ou par les streamers eux-mêmes, et sont disponibles publiquement (contrairement à la rediffusion du direct, souvent réservée aux abonnés du streamer).

Venant tout juste de découvrir la programmation (**C** & **Python**) — c’est-à-dire savoir créer une fonction récursive ou effectuer une manipulation basique de structures de données — j’ai voulu tenter l’expérience de **créer une chaîne YouTube dédiée à des compilations quotidiennes des meilleurs clips Twitch**.

Durant ce projet, j’ai appris et découvert les notions suivantes :
- **Scraping**    
- **API**
- Manipulation de **vidéos avec FFmpeg**    
- Hébergement sur un **VPS** avec **Docker**
    
De plus, je ne voulais pas simplement rassembler des clips : je souhaitais y ajouter **une touche graphique créative pour améliorer l’expérience utilisateur**.
## Récupération des Clips

La récupération des clips se fait via l’API Twitch, qui permet d’accéder aux données des streamers, des clips et des vidéos. Cependant, elle ne permet de récupérer les données qu’à un **instant T**. De plus, les clips ne sont récupérables que par catégorie ou par streamer, et non par popularité. J’ai donc dû mettre en place une historisation des streamers populaires durant les dernières **24 heures**, afin de pouvoir ensuite récupérer leurs clips.

Le scrapper devant tourner en continu, mais le script vidéo étant initialement lancé manuellement sur ma machine, j’avais « peur » de mettre en place une base de données.  
Ma première solution _DIY_ a été de stocker les données dans des feuilles de calcul **Google Sheets**, ce qui permettait de les organiser de manière structurée et de les récupérer facilement via l’API Google Sheets. L’historisation était cependant limitée, car j’utilisais un système de **fenêtre glissante sur 48 heures**.  
Par la suite, je suis passé sur **SQLite**.

Lors de la création de la vidéo, je récupérais un maximum de clips des dernières **24 heures**, que je filtrais ensuite par popularité, ainsi que selon d’autres critères statiques _(whitelist/blacklist de streamers ou catégories, durée du clip, etc.)_.

Les différentes ressources d’un clip _(vidéo, image et données)_ étaient ensuite récupérées et stockées en local.

## Structure des Vidéos

La vidéo étant une compilation, elle se compose de clips Twitch, qui sont donc des segments vidéo de maximum 60 secondes.  
Pour l’édition vidéo, j’en suis arrivé à la décomposer en deux outils : une librairie Python (**MoviePy**) et du traitement **FFmpeg** brut en CLI.  
La librairie m’a obligé à réfléchir le traitement vidéo dans une unité atomique, qui, dans notre cas, est un clip (afin de ne pas ouvrir tous les clips dans la même instance et faire exploser la RAM).

Inspiré par les _Zaps_ de Spi0n, j’ai voulu afficher à l’écran la chronologie du contenu, ainsi qu’un résumé du clip actuellement joué.  
On retrouve ainsi une disposition contenant quatre zones clés :
- **En haut à gauche** : la liste des streamers présents, par ordre de passage, avec un curseur indiquant le streamer actuellement joué.  
- **En bas à gauche** : la vignette du jeu ou de la catégorie Twitch dans laquelle se déroule le clip.
- **En bas à droite** : le titre du clip, généralement rédigé par l’utilisateur auteur du clip.
- **En haut à droite** : le clip Twitch en lui-même, qui constitue le contenu principal de la vidéo

<video class="px-8" muted autoplay loop>
    <source src="/assets/auto_youtube_channel/video.mp4" type="video/mp4">
</video>

**Extrait vidéo**

Pour obtenir une telle composition atomique, j'ai dû, dans un premier temps, unifier le format des clips sélectionnés, car les flux des streamers sont rediffusés par Twitch dans des formats et codecs pouvant varier. C'était l'objectif de la **librairie Python**, qui enveloppait beaucoup de prétraitements, simplifiant ainsi mon travail.

L'**overlay** est ensuite ajouté à l'aide de **FFmpeg**, grâce à des images statiques. Les animations sont appliquées sur chacun des éléments pour les faire apparaître et disparaître de manière fluide, tout comme des transitions entre les clips, afin d'offrir une expérience visuelle agréable. Pour ce faire, j'ai utilisé les **filtres FFmpeg**, agrégés dans un filtre complexe, permettant de générer, en une seule commande, un segment de clip complet.

Cette étape a été assez complexe, car **FFmpeg** n'est pas un outil de montage vidéo, mais un outil de traitement vidéo. Il faut donc penser à la composition de la vidéo comme à une série d'opérations à appliquer sur les flux vidéo et audio, en une seule instruction, tout en gérant le timing via des variables globales.

Après avoir reçu chaque segment de clip édité, au format identique, il ne restait plus qu'à **concaténer** les clips entre eux, avec une **outro** statique à la fin.

> **À noter** : pour fluidifier la transition entre les clips, je récupère la première image du clip suivant, afin de l'afficher en fond du fondu avec le clip joué, ce qui permet de ne pas avoir un écran noir entre les clips.

Au sein de la vidéo, j'ai également ajouté des **appels à l'action** pour le partage et l'abonnement (**Call to Action**). Ces éléments ont été faits sur Première Pro, me permettant ensuite d'insérer aléatoirement les vidéos en superposition à des segments.

<video class="px-8" muted autoplay loop>
<source src="/assets/auto_youtube_channel/call_to_action.mp4" type="video/mp4">
</video>

**Exemple de Call to Action**

## Design des Miniatures

Les **miniatures** de chaque vidéo étaient conçues pour capter l'attention des spectateurs, avec des couleurs vives et des éléments graphiques percutants.  
Pour ce faire, je suis passé par une bibliothèque Python permettant de manipuler des images (**Pillow**).

À partir des clips sélectionnés, **les streamers les plus populaires étaient mis en avant** au centre avec des images prédéfinies, tandis que les photos de profil des autres streamers apparaissaient dans des cercles latéraux.

Le numéro de l'épisode et une capture de deux clips viraux formaient l'arrière-plan, avec la possibilité de faire varier les couleurs de l'arrière-plan, du titre et des numéros selon **plusieurs combinaisons aléatoires**.

![Miniature vidéo](/assets/auto_youtube_channel/thumbnail.jpg)

**Miniature vidéo**

## Texte Généré Automatiquement

Pour la génération des titres, tout comme la miniature, les clips sélectionnés définissaient les streamers mis en avant dans le titre tout en y apposant le numéro de l'épisode.

**Exemple de Titre :**
```
Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Compil' Twitch FR #1]
```

La **description** était générée en fonction du montage afin d'avoir une timeline précise pour chaque clip inclus, facilitant ainsi la navigation dans la vidéo.

**Description Vidéo :**

```
••► Nouvelle compilation [n°1] des meilleurs clips Twitch français 🇫🇷 des dernières 24 heures.

••► 🔥 Aujourd'hui au programme : 🔥
00:00 - Mynthos : " Emmanuel Maquerong a un message pour Antoine Daniel ! "
    🔗 http://www.twitch.tv/mynthos

00:20 - Sackzi : " Quad feed head shot "
    🔗 http://www.twitch.tv/sackzi

[...]

••► À demain pour 💥 une nouvelle compilation 💥 !!

Si jamais vous êtes un streamer ne souhaitant plus apparaître dans mes compilations, n'hésitez pas à me contacter sous l'adresse mail suivante afin de me le notifier :
📧 exemple@mail.com 📧
```

## Publication sur YouTube

La publication des vidéos sur YouTube se faisait via l’**API YouTube**, permettant de publier des vidéos automatiquement (_vidéo, miniature, titre et description_).  
Le plus difficile, ici, a été d’obtenir les accréditations nécessaires pour mon API afin de publier du contenu en public.

## Conclusion

La chaîne YouTube s'est développée durant une année, regroupant plus de **300 abonnés** avec des vidéos atteignant jusqu'à **40 000 vues**.  
Même si je trouvais que le projet permettait un archivage intéressant des clips Twitch, **les droits d'auteur ont contraint à l'arrêt de la chaîne**.

Ce projet m'a énormément appris sur des éléments techniques clés.  
De plus, réussir à partir sur un projet de A à Z, sans connaissance préalable de sa faisabilité, m'a permis de prendre confiance en moi et de réussir à mener à bien une idée, quoi qu'il arrive.

J'avais énormément d'idées pour améliorer le projet :
- Améliorer le contenu textuel avec des chaînes de Markov ou le début des LLM de l'époque (**BLOOM**)  
- Faire évoluer les algorithmes de sélection/orchestration des clips avec les statistiques de visionnage et du machine learning
- Ajouter une interface graphique