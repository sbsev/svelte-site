<script>
  import OpenSource from '@svicons/remix-fill/open-source.svelte'
  import Cookie from '@svicons/boxicons-solid/cookie.svelte'
  import Law from '@svicons/octicons/law.svelte'
  import PrivacyTip from '@svicons/material-sharp/privacy-tip.svelte'
  import Euro from '@svicons/material-sharp/euro.svelte'
  import DocumentText from '@svicons/ionicons-solid/document-text.svelte'

  import Social from './Social.svelte'

  const icons = {
    Impressum: Law,
    Datenschutz: PrivacyTip,
    Spenden: Euro,
    Satzung: DocumentText,
  }

  export let social, links
  const style = `height: 1em; vertical-align: -3pt; padding-right: 2pt;`
</script>

<footer>
  <img src="/favicon.svg" alt="SbS Logo" height="60" />
  <span>© {new Date().getFullYear()} Studenten bilden Schüler e.V.</span>
  <div>
    {#each links as { title, url }}
      <a sveltekit:prefetch href={url}>
        <svelte:component this={icons[title]} {style} />
        {title}</a>
    {/each}
  </div>
  <span>
    Diese Seite ist
    <a href="https://github.com/sbsev/svelte-site">
      <OpenSource
        height="2.5ex"
        style="vertical-align: bottom; padding-right: 3pt;" />open source</a>
    und verwendet
    <a href="https://de.wikipedia.org/wiki/HTTP-Cookie">
      keine
      <Cookie height="2.2ex" style="vertical-align: middle;" />
      Cookies.</a>
  </span>
  <Social {social} style="margin-top: 1ex;" />
</footer>

<style>
  footer {
    padding: 3em calc(1em + 3vw);
    text-align: center;
    display: grid;
    gap: 3em;
    place-items: center;
    background: var(--footerBg);
    color: white;
  }
  footer :global(a) {
    color: var(--lightBlue);
  }
  footer :global(a:hover) {
    color: var(--green);
  }
  footer div {
    margin: auto;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
