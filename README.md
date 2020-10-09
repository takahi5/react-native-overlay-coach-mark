# react-native-overlay-coach-mark

A React Native UI component for coach mark, which is often used in tutorial.

![c0981b1373b37c149fb80433951a4676](https://user-images.githubusercontent.com/7026785/95631049-ef9be480-0abd-11eb-9fc1-e1a9f2df98ad.gif)

## Install

```
npm install react-native-overlay-coach-mark
```

**for bare React Native**  
Need to install react-native-svg. If you are using Expo, you can skip this as Expo comes with react-native-svg.

```
npm install react-native-svg
cd ios && pod install
```

## Usage

**circle**

```js
import CoachMark from 'react-native-overlay-coach-mark';

export default function App() {
  return (
    <>
      <CoachMark
        shape="circle"
        x={100}
        y={200}
        radius={30}
      />
    <>
  )
}
```

**rect**

```js
import CoachMark from 'react-native-overlay-coach-mark';

export default function App() {
  return (
    <>
      <CoachMark
        shape="rect"
        x={100}
        y={200}
        width={80}
        height={40}
      />
    <>
  )
}
```


## Properties

| Prop | Default | Type | Description |
|---|---|---| ---|
|**`shape`**| `circle` | `string`|shape of the hole|
|**`x`**| `0` | `number`| hole poxition of x direction |
|**`y`**| `0` | `number`| hole poxition of y direction |
