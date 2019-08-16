# svelte-fontawesome

[`FontAwesome`](https://fontawesome.com/) icons for [`Svelte`](https://svelte.dev/).

Based on [`fa-svelte`](https://github.com/alphapeter/fa-svelte) with a few added options. If you only need to show an icon, that library may be a simpler and better choice.

## Getting Started

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

Add svelte-fontawesome, along with the FontAwesome icon set(s) that you need:

```bash
yarn add -D svelte-fontawesome
yarn add -D @fortawesome/free-solid-svg-icons
```

## Usage

```javascript
<script>
  import { Icon } from 'svelte-fontawesome';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
</script>

<Icon icon={faEnvelope}/>
```

## Properties

| prop | type | about |
| --- | --- | --- |
| class | string | Add extra classes to the icon |
| fw | bool | Set the icon to a fixed width |
| size | string | Set the icon's size to `lg`, `sm` or `xs` |
| scale | string | Set the icon's scale to `1x`, `2x`, `3x`, etc |
| stack | string | Set the icon's stack size (see below) |
| inverse | bool | Set the icon's color to white |

## Stacks

To stack multiple icons, place them within an IconStack. Set the stack property to `1x` for the
regularly sized icon and `2x` for the larger icon. The inverse property can be used to show the
smaller icon against the larger one (or vice-versa).

```javascript
<script>
  import { IconStack, Icon } from 'svelte-fontawesome';
  import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
</script>

<IconStack>
  <Icon icon={faCircle} stack="2x" />
  <Icon icon={faEnvelope} stack="1x" inverse />
</IconStack>
```
