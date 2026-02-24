
## Chaîne YouTube interactive automatisée — Contenu éducatif généré de bout en bout

**Comment concevoir** une **chaîne YouTube pour enfants**, capable de **générer automatiquement des vidéos interactives**, structurées comme des mini-jeux ?

## Introduction

Les formats de vidéos pour enfants de type _[Hero Quiz](https://www.youtube.com/@heroquiz_)_ reposent sur une mécanique simple mais efficace :  
de l’**interaction simulée**, un rythme soutenu, des règles claires et des **repères visuels forts** (émojis, couleurs, animations).

Derrière cette apparente simplicité se cache pourtant un **montage répétitif**, chronophage et peu scalable.

L’objectif de ce projet a été de **reproduire ce type de contenu de manière entièrement automatisée**, en construisant une chaîne capable de :
-   Générer des scénarios de mini-jeux
-   Produire les voix, visuels et animations
-   Monter les séquences en vidéo complète et cohérente
    
Le tout pensé dès le départ pour un public enfant, avec une attention particulière portée au **rythme**, à la **lisibilité** et à la **clarté des interactions**.

## Concept des vidéos

Chaque vidéo est conçue comme une **succession de mini-jeux**, reposant principalement sur des **emojis** comme support visuel :
-   Jeux de choix (trouver le bon emoji)
-   Jeux d’observation
-   Jeux de rapidité ou de logique simple
    
Les emojis servent à la fois :
-   De **langage universel** compréhensible par les enfants
-   De **briques graphiques standardisées**
-   De base idéale pour une génération procédurale

Une vidéo complète est ainsi une **orchestration de séquences**, chacune ayant ses règles, son timing et ses éléments interactifs.

## Backoffice et création de contenu

Afin de permettre la création et la gestion du contenu, un **backoffice dédié** a été développé.

### Interface d’administration

-   Développée en **Vue.js**    
-   UX dédiée à la création rapide de contenus
-   Gestion des types de mini-jeux, paramètres et règles
-   Prévisualisation logique des séquences

### Backend applicatif

Le backoffice communique avec une application **Flask**, qui centralise :

-   La logique métier    
-   La validation des données
-   La génération de la structure narrative des vidéos
    

## Génération automatisée des vidéos

Une fois le contenu validé, l’application Flask prend le relais pour **orchestrer l’ensemble du pipeline de génération**.

### Génération du scénario

À partir des paramètres définis dans le backoffice :

-   Un **LLM** est utilisé pour générer la structure globale de la vidéo
-   Ordonnancement des mini-jeux
-   Génération des textes (instructions, transitions, feedback)
    
Le scénario devient ainsi une **description structurée** de la vidéo, exploitable par les étapes suivantes.

### Génération des assets

À partir de ce scénario :

-   Les voix sont générées via des systèmes de **Text-to-Speech**
-   Les assets graphiques (emojis, fonds, éléments UI) sont préparés automatiquement

L’ensemble des ressources est produit de manière déterministe afin de garantir la cohérence finale.

## Montage vidéo automatisé

La mise en forme finale est assurée par un service basé sur **Remotion.js**.

Ce service permet :

-   D’assembler les séquences vidéo
-   D’animer les emojis et éléments UI
-   De synchroniser voix, animations et transitions
-   De générer automatiquement :
    -   La **vidéo finale**
    -   La **miniature (thumbnail)** associée
        

Le montage est ainsi entièrement **piloté par le code**, sans timeline manuelle.

## Publication et scalabilité

Une fois générée, la vidéo peut être :

-   Stockée
-   Publiée automatiquement sur YouTube
-   Répliquée à grande échelle avec des variations de contenu

L’architecture a été pensée pour permettre :

-   Une production en volume
-   Une évolution rapide des formats
-   L’ajout de nouveaux types de mini-jeux sans refonte globale
    

## Conclusion

Ce projet m’a permis d’explorer :

-   La **génération procédurale de contenus vidéo**
-   La conception de **pipelines automatisés complexes**
-   L’interconnexion entre UX, backend, IA et rendu vidéo
-   L’adaptation des contraintes techniques à un **public enfant**

Il démontre qu’un format fortement codifié, comme les vidéos interactives pour enfants, peut devenir un **système de production automatisé**, fiable et scalable.

Néanmoins, le besoin du backoffice pour structurer le contenu émane de l'impossibilité actuelle de déléguer entièrement la création à une IA (dans une plage de coût raisonnable pour obtenir une qualité satisfaisante).