---
surtitle: Explorons les Web APIs
title: '1. Jouons avec la Web Audio API !'
subtitle: Parmi les APIs standard, aucune n'est aussi ludique - à mon avis - que l'Audio API. Première API avancée avec laquelle j'ai joué, c'est aussi une bonne façon de s'amuser à combiner UI et audio.
date: 04-02-2025
published: false
categories:
  - 'Web APIs'
  - 'JavaScript'
  - 'Audio'
---

<script>
  import AudioPlayer from '$lib/AudioPlayer.svelte';
</script>

> ### Note avant de commencer
>
> Refaire les étapes ci-dessous ne devrait requérir aucun framework ou librairie spécifiques.
> Vous pouvez tout faire dans un fichier `.html`, avec un tag `<style>` et un tag `<script>` (même si ce n'est pas forcément le plus confortable).

## Implémentation basique

La première chose qu'il va nous falloir, c'est évidemment un lecteur audio et un fichier son.

Le fichier son est facile à trouver : il en existe des milliers libres de droit, par exemple sur [Pixabay](https://pixabay.com/fr/music/search/). Idéalement, ça peut être bien d'en avoir plusieurs exemplaires et un petit bouton pour passer de l'un à l'autre

<AudioPlayer src="/audio/example.mp3" />

```html
<audio src="example.mp3" controls />
```

Le style n'a aucune importance pour l'instant. Juste pour être sûr que le player affiché soit bien visible, j'ai mis quelques propriétés CSS, comme une largeur maximale, une marge verticale et une légère bordure:

```css
audio {
	margin: 1rem 0;
	width: 100%;
	border: 1px solid #e0e0e0;
}
```
