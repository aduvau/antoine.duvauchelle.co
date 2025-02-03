---
surtitle: 'API Exploration: Web Audio API'
title: Episode 1. The Rise, Fall, and Revival of the <audio> Tag
subtitle: Of all standard APIs, none is more playful than the Web Audio API (at least in my opinion). Let's add some CSS rainbow magic to your music!
date: 29-01-2025
published: true
categories:
  - 'Web APIs'
  - 'JavaScript'
  - 'Audio'
---

<script>
  import AudioPlayer from '$lib/AudioPlayer.svelte';
  import CubeSVG from '$lib/CubeSVG.svelte';
</script>

> ### Note
>
> You don't need to master or use any specific library or framework here.
> Everything can be done in an **.html** file, with `<style>` and `<script>` tags (even if it will probably not be the most comfortable dev environment possible).
> Well, in a nutshell: **do what you normally do**.

## Basic implementation

First things first, we need a sound file and an audio player.

Finding a sound file is easy—you can get thousands of free (and legal) sounds on [Pixabay](https://pixabay.com/en/music/search/), for instance.

Now the audio player:

<AudioPlayer src="/audio/example.mp3" className="content-audio-1" />

```html
<audio src="example.mp3" controls />
```

For now, styling isn't important. I only applied a few properties to ensure the player is easily visible on this page:

```css
audio {
	margin: 1rem 0;
	width: 100%;
	border: 1px solid #e0e0e0;
}
```

We could talk for hours about the `<audio>` element, introduced in HTML5. Yes, it's amazing. Yes, it's a standard. And yes, it looks different across browsers since it's unstyled by default. You can learn [all of that and more on MDN](https://developer.mozilla.org/en/docs/Web/HTML/Element/audio), so we'll keep it short.

A few interesting attributes for us:

- <CubeSVG height={21} width={20} /> `autoplay` allows you to autoplay your file ;
- <CubeSVG height={21} width={20} /> `loop` activates loop playing ;
- <CubeSVG height={21} width={20} /> `muted` to mute the sound ;
- <CubeSVG height={21} width={20} /> and, of course, `controls`, which allows us to display an embryo of audio player with our browser's defaults (play, pause, volume, duration / reading status).

There's plenty more there that could be useful, but those are the main that will allow us to directly control our sound, or provide us with an interface to do it.

From there, we have access to some CSS styling... But not the background of our `<audio>` tag, because its appearance is controlled by the browser.

One solution here: wrap it into a div and style the div.

```css
.audio-wrapper {
	--unicorn: linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a18cd1, #8ec5fc, #a6c1ee);
	background: var(--unicorn);
	margin: 1rem 0;
	width: 100%;
	border: 1px solid #e0e0e0;
}
```

<div class="audio-wrapper-2">
  <AudioPlayer src="/audio/example.mp3" className="content-audio-2" />
</div>

And iiiiiiiiiit's... not going well.

Our problem is the controls, which are browser-dependent. So, not only does our audio player look awful, but it also embraces different shades of awfulness depending on the browser

On Firefox:

![A very bad-looking audio player on Firefox](/imgs/audioplayer-firefox.jpg)

On Chrome:

![A very bad-looking audio player on Chrome](/imgs/audioplayer-chrome.jpg)

On Safari:
![A very bad-looking audio player on Safari](/imgs/audioplayer-safari.jpg)

Nice, huh?

## Enter javascript

This is why it's common practice to call the `<audio>` element without controls and handle everything else using custom elements:

```html
<audio src="example.mp3" />
```

And... voilàààààààààà !

<AudioPlayer src="/audio/example.mp3" hasControls={false} />

Yes, it's here. It's here, look, just above! Oh... OK, but believe me, it's here. Here's a screenshot of the DOM Inspector for the element above this text:

![Even if it's not visible, the audio player is in the DOM](/imgs/audioplayer-invisible.jpg)

The good news is: it's here. The bad news is: we can't see it anymore. But that's actually a good news. At least that's what we wanted to achieve. Why? Because now, at least, we can implement a player ourselves.

OK, so, let's say we need a box, this box should be clearly separated from the rest of our App (ideally, it'll be reusable in the end, so we can put it anywhere in our app). In that div, we'll need our invisible player, a play / pause button and that's basically it for now.

```html
<div class="audio-player">
	<audio src="example.mp3" />
	<button class="play-pause">Play / pause</button>
</div>
```

<div class="audio-player">
	<audio src="example.mp3" />
	<button>Play / pause</button>
</div>

I know what you're thinking: 'It's not working.' And you're right—it's not. Which makes sense, because we have a button, but it doesn’t do anything yet. We are going to have to:

- <CubeSVG height={21} width={20} /> Reference the button
- <CubeSVG height={21} width={20} /> Listen to the click
- <CubeSVG height={21} width={20} /> Get the `<audio>` tag
- <CubeSVG height={21} width={20} /> Give the instruction to the `<audio>` tag: "Play the file"
- <CubeSVG height={21} width={20} /> If we click again on the button, it's supposed to pause... Which means that we'll actually have to do some programming here. If the status is "paused", it should play. If it's "playing", is should be paused.
- <CubeSVG height={21} width={20} /> And… probably something else, right? Yep, you're absolutely right. But let's dive later here, and start simple.

```javascript
// Assign our button and our audio elements to variables
const button = document.querySelector('.play-pause');
const audioPlayer = document.querySelector('audio');

// Listen to the click
if (button) {
	button.addEventListener('click', (event) => {
		if (audioPlayer) {
			if (audioPlayer.paused) {
				audioPlayer.play();
				button.textContent = 'Pause';
			} else {
				audioPlayer.pause();
				button.textContent = 'Play';
			}
		}
	});
}
```

Let's try this (I've taken the liberty to add some CSS styling, you'll find it below, and some additional JS for the play / pause image switch):

<AudioPlayer src="/audio/example.mp3" className="with-wrapper-1" wrapperClassName="wrapper-1" hasControls={false} buttonText="Play / pause" />

Cool, huh? But now, what?

**We use [HOWLER.JS](https://github.com/goldfire/howler.js#)!!!!!!!!!!**

Nah, kidding, of course. We'll dive into the Web Audio API. That's for the next episode, and frankly, that might just be the right time to acknowledge how Howler.js and other libs are amazing. Check it, read the philosophy of it, try to get some implementation design. Then we'll get back to our Web Audio API in **"Episode 2. The <audio> tag never stops trying"**.

Before wrapping up Episode 1, here's some CSS — just so you don't think all of this was in vain:

```css
.audio-player {
	align-items: center;
	aspect-ratio: 3/2;
	background: var(--unicorn);
	border: none;
	border-radius: 3rem;
	display: flex;
	justify-content: center;
	margin: 1rem 0;
	transition:
		transform 0.2s ease-in-out,
		box-shadow 0.3s ease-in-out;
	width: 200px;
}

.audio-player:hover {
	box-shadow:
		10px 10px 15px rgba(255, 154, 158, 0.4),
		20px 20px 25px rgba(168, 140, 209, 0.3),
		30px 30px 35px rgba(142, 197, 252, 0.2);
	transform: rotate3d(1, -1, 0, 25deg) scale(1.05);
	transition:
		transform 0.2s ease-in-out,
		box-shadow 0.3s ease-in-out;
}

.audio-player button {
	cursor: pointer;
	transition: transform 0.2s ease-in-out;
}

.audio-player:hover button {
	transform: scale(1.25);
	transition: transform 0.2s ease-in-out;
}
```

That's all, folks!
