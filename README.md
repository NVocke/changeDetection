# ChangeDetection in Angular

This repo is used as a Playground to better understand Change Detection Strategies in Angular.

## Change Detection Strategies

There are two change detection strategies that can be used. The default strategy set in angular is ... well, **ChangeDetection.Default**.
This basically lets Angular do its magic and take care of Change Detection all by itself. But since Angular does not know where exactly in the model
things change when events happen, it simply walks through the entire component tree every single time, top to bottom, as soon as something happens.

### ChangeDetection.OnPush

The second strategy we can use is called **ChangeDetection.OnPush**. This is set to in the metadata of a component like so:

```typescript
@Component({
  ...
  changeDetection: ChangeDetection.OnPush
})
```

By doing this, change detection is only triggered when a Component's `@Input properties` receive a new object. It is not triggered if the properties of that object change (Sidenote: If primitives are injected through @Input, it is also triggered, since primitives are immutable and new references).
So change detection is only triggered if a reference is changed to a new object and not if the values on said object change.
Or in other words: If we set the ChangeDetectionStrategy to **OnPush** change detection treats objects as immutable and therefore only triggers if it gets a new reference to a new object.
