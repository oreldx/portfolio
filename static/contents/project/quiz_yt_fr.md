J'ai développé un outil pour produire des vidéos de quiz pour enfants, composées de mini-jeux. Le montage de ce type de contenu est répétitif : je voulais automatiser la production, du scénario à la publication sur YouTube.

Les vidéos de chaînes comme [Hero Quiz](https://www.youtube.com/@heroquiz_) m'ont servi de référence. Elles simulent une interaction avec l'enfant grâce à un rythme soutenu, des règles claires et des repères visuels comme les émojis, les couleurs et les animations. J'ai gardé ces contraintes de rythme et de lisibilité dès la conception.

## Des mini-jeux à base d'émojis

Chaque vidéo enchaîne des jeux de choix, d'observation, de rapidité ou de logique simple. Les émojis sont faciles à comprendre pour les enfants et servent d'éléments graphiques standardisés pour la génération procédurale.

Chaque séquence a ses propres règles, sa durée et ses éléments d'interaction.

## Préparer le contenu

J'ai créé une interface d'administration en Vue.js pour gérer les types de mini-jeux, leurs paramètres et leurs règles. Elle permet de préparer rapidement le contenu et de prévisualiser la logique des séquences.

Cette interface communique avec une application Flask, qui gère la logique métier, valide les données et construit la structure narrative des vidéos. Une fois le contenu validé, Flask pilote les étapes de génération.

## Générer le scénario et les ressources

À partir des paramètres saisis dans l'interface, un LLM génère la structure de la vidéo, ordonne les mini-jeux et rédige les instructions, les transitions et les retours donnés au spectateur. Le résultat est un scénario structuré que les services suivants peuvent utiliser.

Les voix sont produites par synthèse vocale. Les ressources graphiques, dont les émojis, les fonds et les éléments d'interface, sont préparées automatiquement. Cette préparation est déterministe pour garder un résultat cohérent.

## Monter la vidéo

Un service basé sur Remotion.js assemble les séquences, anime les émojis et les éléments d'interface, puis synchronise les voix avec les animations et les transitions. Il génère la vidéo finale et sa miniature.

Le montage se fait entièrement par le code, sans manipulation manuelle d'une timeline.

## Publier et faire évoluer les formats

Les vidéos générées peuvent être stockées et publiées automatiquement sur YouTube. L'architecture permet de produire des variations de contenu en volume, de faire évoluer les formats et d'ajouter des types de mini-jeux sans tout reconstruire.

Ce projet m'a fait travailler sur la génération procédurale de vidéos et la conception d'une chaîne de production automatisée complexe. Il m'a aussi demandé de relier l'interface de création, le backend, l'IA et le rendu vidéo, en tenant compte d'un public enfant.

La création du contenu reste semi-automatisée : j'ai eu besoin du back-office pour la structurer, car je n'arrivais pas à la déléguer entièrement à une IA avec une qualité satisfaisante et un coût raisonnable.
