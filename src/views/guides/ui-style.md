# Component Design Style

## Naming

#### Component Naming

| Component name and class name| Instance name| Tag name| File name |
| ----------------------- | ----------------------- -- | -------------------------- | -------------------------- ---- |
| BigCamelCase| SmallCamelCase| Hyphen| Same as tag name |
| Select | selectVM | `<u-select>` | u-select.vue |
| CascadeSelect | cascadeSelectVM | `<u-cascade-select>` | u-cascade-select.vue |
| Steps | stepsVM | `<u-steps>` | u-steps.vue |
| Step | stepVM | `<u-step>` | u-step.vue |
| TreeView | treeViewVM | `<u-tree-view>` | u-tree-view.vue |
| TreeViewNode | treeViewNodeVM | `<u-tree-view-node>` | u-tree-view-node.vue |
| Calendar | calendarVM | `<u-calendar>` | u-calendar.vue |
| DatePicker | datePickerVM | `<u-date-picker>` | u-date-picker.vue |
| DateTimePicker | dateTimePickerVM | `<u-date-time-picker>` | u-date-time-picker.vue |

#### Require Element elements to use the `El` Suffix

```js
// ✗ bad
const elem = this.$el;
const element = e.target;
const input = this.$refs.input

// ✓ good
const el = this.$el;
const el = e.target;
const inputEl = this.$refs.input;
```

#### Require Vue Instances to use the `VM` Suffix

```js
// ✗ bad
const instance = this;
const form = this.$refs.form;
this.$emit('select', {
    item,
});

// ✓ good
const vm = this;
const formVM = this.$refs.form;
this.$emit('select', {
    item,
    itemVM: selectedVM,
});
```

## Event

#### Events Commonly Raised by Form Controls

- `input`, for two-way binding of `v-model`
- `update:value`, for two-way binding with `.sync`
- `change`, triggered when the listener `value` changes
- `focus` and `blur`, try to achieve
- Try to throw an event that is purely triggered by the user, such as `select`, `toggle`, `slide`, etc.
- For user-triggered events, try to throw a preventable `before-` event, such as `before-select`, `before-toggle`, etc.

#### Input Event Only Throws Changed Value

To adapt to `v-model`.

```js
// ✓ good
this.$emit('input', value);
this.$emit('update:value', value);
```

#### Other Events Throw an Object Uniformly

```js
// ✓ good
this.$emit('select', {
    value,
    item,
    itemVM: selectedVM,
});

this.$emit('change', {
    value,
    oldValue,
});
```

#### Passive Event Receiving Methods use the `on` Prefix

```js
// ✗ bad
{
    methods: {
        input() {
            // ...
        },
        handleValidate() {
            // ...
        },
    },
}

// ✓ good
{
    methods: {
        onInput() {
            // ...
        },
        onValidate() {
            // ...
        },
    },
}
```

## Slot

#### Slot is Only Set in the Class with the Corresponding Name

```htm
// ✗ bad
<slot name="head">
    <div :class="$style.head">
            <slot name="title">
                <div :class="$style.title">
                    {{ title }}
                </div>
            </slot>
            <div :class="$style.close"></div>
    </div>
</slot>

// ✓ good
<div :class="$style.head">
    <slot name="head">
        <div :class="$style.title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div :class="$style.close"></div>
    </slot>
</div>
```

## Style

#### Root Node

`.root` is not necessarily the root node of the template, but must be the root node of the role in the component. It is best to be a node that can pass styles or attributes.

For encapsulated components, it is recommended to only allow the style of the root node to be modified, and not to modify the styles of other nodes in the component content.

```
<template>
<u-select :class="$style.select"></u-select>
</template>

<style>
/* ✓ good */
.select {
    width: 160px;
}

/* ✗ bad */
.select > li {
    width: 120px;
}
</style>
```

#### Variable Naming

- Common states: `default`, `primary`, `info`, `success`, `warning`, `error`, `disabled`, `muted`, ...
- Size classification: `mini`, `small`, `base`, `large`, `huge`, ...
- Color grading: `darkest`, `darker`, `dark`, `base`, `light`, `lighter`, `lightest`, ...