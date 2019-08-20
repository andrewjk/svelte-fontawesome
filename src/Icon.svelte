<script>
  export let icon;
  export let fw = false;
  export let size = "";
  export let stack = "";
  export let inverse = false;

  $: viewBox = `0 0 ${icon.icon[0]} ${icon.icon[1]}`;

  $: classes =
    "sfa " +
    (fw ? "sfa-fw " : "") +
    (size ? `sfa-${size} ` : "") +
    (stack ? `sfa-stack-${stack} ` : "") +
    (inverse ? "sfa-inverse " : "") +
    ($$props.class ? $$props.class : "");

  $: path = icon.icon[4];
</script>

<style>
  .sfa {
    width: 1em;
    height: 1em;
    overflow: visible;
    display: inline-block;
  }

  /* Fixed width style from https://github.com/FortAwesome/Font-Awesome/blob/master/less/_fixed-width.less */
  .sfa-fw {
    text-align: center;
    width: (20em / 16);
  }

  /* Size styles from https://github.com/FortAwesome/Font-Awesome/blob/master/less/_larger.less */
  .sfa-lg {
    font-size: (4em / 3);
    line-height: (3em / 4);
    vertical-align: -0.0667em;
  }

  .sfa-sm {
    font-size: 0.875em;
  }

  .sfa-xs {
    font-size: 0.75em;
  }

  /* Stacked styles from https://github.com/FortAwesome/Font-Awesome/blob/master/less/_stacked.scss */
  .sfa-stack-1x,
  .sfa-stack-2x {
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .sfa-stack-1x {
    font-size: inherit;
    line-height: inherit;
  }

  .sfa-stack-2x {
    font-size: 2em;
  }

  .sfa-inverse {
    color: #fff;
  }
</style>

<svg
  aria-hidden="true"
  class={classes}
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}>
  <path fill="currentColor" d={path} />
</svg>
