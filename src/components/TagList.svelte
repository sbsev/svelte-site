<script>
  import { slide, fade } from 'svelte/transition'

  import Tags from '@svicons/fa-solid/tags.svelte'
  import ChevronExpand from '@svicons/bootstrap/chevron-expand.svelte'
  import CircleWithCross from '@svicons/entypo/circle-with-cross.svelte'
  import Euro from '@svicons/material-sharp/euro.svelte'
  import SelectAll from '@svicons/material-sharp/select-all.svelte'
  import Public from '@svicons/material-sharp/public.svelte'
  import RateReview from '@svicons/material-sharp/rate-review.svelte'
  import QuestionAnswer from '@svicons/material-sharp/question-answer.svelte'
  import EventAvailable from '@svicons/material-sharp/event-available.svelte'
  import BeachAccess from '@svicons/material-sharp/beach-access.svelte'

  import GraduationCap from '@svicons/fa-solid/graduation-cap.svelte'
  import ChalkboardTeacher from '@svicons/fa-solid/chalkboard-teacher.svelte'
  import HandsHelping from '@svicons/fa-solid/hands-helping.svelte'

  import GitBranch from '@svicons/boxicons-regular/git-branch.svelte'
  import StatsChart from '@svicons/ionicons-solid/stats-chart.svelte'

  export let tags
  export let activeTag = `Alle`

  const icons = {
    Alle: SelectAll,
    Spenden: Euro,
    Werbung: Public,
    Standortleiter: GraduationCap,
    Erfahrungsberichte: RateReview,
    Nachhilfelehrer: ChalkboardTeacher,
    Interview: QuestionAnswer,
    'Soziale Partner': HandsHelping,
    Events: EventAvailable,
    Freizeit: BeachAccess,
    IT: GitBranch,
    Bundesvorstand: StatsChart,
  }

  let open = false
  let viewWidth
  const style = `height: 18pt; vertical-align: middle; margin-right: 5pt;`
</script>

<svelte:window bind:innerWidth={viewWidth} />

<h2>
  <Tags style="height: 16pt; margin-right: 5pt;" />Tags
  {#if viewWidth < 750}
    <button on:click={() => (open = !open)} aria-label="Blog Tags öffnen">
      {#if open}
        <CircleWithCross {style} />
      {:else}
        <ChevronExpand {style} />
      {/if}
    </button>
  {/if}
</h2>
{#if viewWidth > 750 || open}
  <ul transition:slide>
    {#each Object.entries(tags) as [tag, count]}
      <li>
        <button
          transition:fade
          aria-label="Nach Tag {tag} filtern"
          class:active={activeTag === tag}
          on:click={() => (activeTag = tag)}>
          <svelte:component
            this={icons[tag]}
            style="height: 2.2ex; vertical-align: -3pt; margin-right: 6pt" />
          {tag}
          ({count})</button>
      </li>
    {/each}
  </ul>
{/if}

<style>
  h2 {
    text-align: center;
    margin-top: 2em;
  }
  ul {
    font-size: 0.9em;
    padding: 0 1em 2em;
    max-width: 50em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    place-content: center;
    margin: auto;
    list-style: none;
  }
  ul > li > button {
    padding: 3pt 7pt;
    transition: 0.4s;
    display: flex;
    align-items: center;
    background: var(--accentBg);
  }
  ul > li > button.active {
    box-shadow: inset 0 0 1em -5pt black;
    background: var(--green);
  }
</style>
