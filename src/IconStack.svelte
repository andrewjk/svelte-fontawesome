<script>
  let classes = "";

  $: classes = "sfa-stack " + ($$props.class ? $$props.class : "");
</script>

<style lang="scss">
  /* Stacked styles from https://github.com/FortAwesome/Font-Awesome/blob/master/less/_stacked.scss */
  .sfa-stack {
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2em;
    /* With these custom styles */
    display: inline-flex;
    align-items: center;
  }
</style>

<span class={classes}>
  <slot />
</span>
