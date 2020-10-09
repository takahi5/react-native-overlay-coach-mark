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

| Prop                  | Default | Type     | Description                                           |
| --------------------- | ------- | -------- | ----------------------------------------------------- |
| **`shape`**           | -       | `string` | shape of the hole                                     |
| **`x`**               | -       | `number` | hole position of x direction                          |
| **`y`**               | -       | `number` | hole position of y direction                          |
| **`backgroundColor`** | `#000`  | `string` | background color of overlay                           |
| **`opacity`**         | `0.7`   | `number` | opacity of background overlay                         |
| **`width`**           | `100`   | `number` | width of rectangle (\* only for `rect` shape)         |
| **`height`**          | `100`   | `number` | height of rectangle (\* only for `rect` shape)        |
| **`borderRadius`**    | `10`    | `number` | border radius of rectangle (\* only for `rect` shape) |
| **`radius`**          | `100`   | `number` | radius of circle (\* only for `circle` shape)         |

## Example

See more detail in example directory.

https://github.com/takahi5/react-native-overlay-coach-mark/tree/main/example

## License

[MIT License](http://opensource.org/licenses/mit-license.html).
