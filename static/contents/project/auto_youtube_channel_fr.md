En regardant des compilations de clips Twitch sur YouTube, j'ai remarqué que leur montage était très répétitif. J'ai voulu créer une chaîne qui récupère les clips, les filtre, ajoute un habillage graphique et publie une compilation chaque jour, sans intervention humaine.

Je venais de découvrir la programmation en C et en Python. À ce stade, je savais écrire une fonction récursive et manipuler quelques structures de données. Ce projet m'a fait découvrir le scraping, les API, le traitement vidéo avec FFmpeg et l'hébergement sur un VPS avec Docker.

Les clips Twitch sont de courts extraits d'un direct, créés par les spectateurs ou les streamers. Ils sont accessibles publiquement, alors que les rediffusions complètes sont souvent réservées aux abonnés.

## Récupérer et sélectionner les clips

J'utilisais l'API Twitch pour récupérer les données des streamers, des clips et des vidéos. Elle me donnait une vue à un instant donné, avec des clips accessibles par catégorie ou par streamer, sans recherche par popularité. J'ai donc enregistré l'historique des streamers populaires sur les dernières 24 heures pour récupérer ensuite leurs clips.

Le scraper devait tourner en continu, alors que je lançais encore le script vidéo à la main sur mon ordinateur. J'avais un peu peur de mettre en place une base de données : ma première solution maison a été Google Sheets. Les feuilles me permettaient de structurer les données et de les récupérer via l'API, avec un historique limité à une fenêtre glissante de 48 heures. Je suis ensuite passé à SQLite.

Pour chaque vidéo, je récupérais un maximum de clips des dernières 24 heures. Je les filtrais par popularité et selon des critères fixes : listes de streamers ou de catégories autorisés et exclus, durée des clips, etc. La vidéo, l'image et les données de chaque clip étaient ensuite téléchargées en local.

## Monter les compilations

Les compilations regroupaient des clips de 60 secondes maximum. Le montage reposait sur MoviePy en Python et sur des commandes FFmpeg. Je traitais les clips un par un pour éviter de tous les charger en mémoire et de saturer la RAM.

En m'inspirant des Zaps de Spi0n, j'ai conçu un habillage qui affiche la chronologie de la compilation et les informations du clip en cours :

- En haut à gauche, les streamers dans leur ordre de passage, avec un curseur sur celui qui est à l'écran.
- En bas à gauche, la vignette du jeu ou de la catégorie Twitch.
- En bas à droite, le titre du clip, généralement rédigé par son auteur.
- En haut à droite, le clip lui-même, qui occupe la zone principale.

<video class="px-8" controls muted loop>
    <source src="/assets/auto_youtube_channel/video.mp4" type="video/mp4">
</video>

Extrait vidéo.

MoviePy me servait d'abord à uniformiser les formats et les codecs, qui variaient d'un clip à l'autre. J'ajoutais ensuite l'habillage avec FFmpeg à partir d'images statiques. Un filtre complexe regroupait les animations d'apparition et de disparition des éléments, ainsi que les transitions, pour générer chaque segment en une seule commande.

Cette étape m'a demandé beaucoup de travail. Avec FFmpeg, je devais décrire le montage comme une suite d'opérations sur les flux audio et vidéo, dans une seule instruction, et gérer le timing avec des variables globales.

Une fois tous les segments au même format, je les concaténais et ajoutais une outro statique. Pour éviter un écran noir pendant les fondus entre les clips, j'utilisais la première image du clip suivant en arrière-plan.

J'ai aussi créé des animations de partage et d'abonnement dans Premiere Pro, puis les ai superposées à des segments choisis aléatoirement.

<video class="px-8" muted controls loop>
<source src="/assets/auto_youtube_channel/call_to_action.mp4" type="video/mp4">
</video>

Exemple d'animation d'abonnement et de partage.

## Générer les miniatures

Je créais les miniatures avec Pillow, en utilisant des couleurs vives et des éléments graphiques destinés à attirer l'attention. Les streamers les plus populaires de la sélection apparaissaient au centre avec des images prédéfinies. Les photos de profil des autres étaient placées dans des cercles sur les côtés.

Le fond associait le numéro de l'épisode et des captures de deux clips viraux. Les couleurs du fond, du titre et des numéros variaient selon plusieurs combinaisons aléatoires.

![Miniature vidéo](/assets/auto_youtube_channel/thumbnail.jpg)

## Générer les titres et les descriptions

Le titre reprenait les noms des streamers mis en avant et le numéro de l'épisode.

Exemple de titre :

```
Mynthos, Sackzi, Wingobear, Terracid et LittleBigWhale... [Compil' Twitch FR #1]
```

La description était générée à partir du montage, avec un horodatage précis pour chaque clip afin de faciliter la navigation.

Exemple de description :

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

## Publier sur YouTube

L'API YouTube permettait de publier automatiquement la vidéo avec sa miniature, son titre et sa description. Obtenir les accréditations nécessaires pour publier en public a été la partie la plus difficile de cette intégration.

## Après une année de publication

La chaîne a dépassé les 300 abonnés, avec des vidéos allant jusqu'à 40 000 vues. J'aimais l'idée de garder une archive de ces clips, mais les droits d'auteur m'ont contraint à arrêter.

J'ai beaucoup appris techniquement. Mener ce projet du début à la fin, sans savoir au départ s'il était réalisable, m'a aussi donné confiance pour me lancer dans d'autres idées.

Il me restait plusieurs pistes à explorer : améliorer les textes avec des chaînes de Markov ou BLOOM, l'un des premiers LLM que j'envisageais alors ; utiliser les statistiques de visionnage et le machine learning pour mieux sélectionner et ordonner les clips ; ajouter une interface graphique.
