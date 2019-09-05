# **rn-popup-modal**

Display visual popup modal

## Features

- Support in React Native for both Android and iOS
- Possible to wrap more than one child component
- Easy to use
- Some customizations

## Demo

<img src=".github/demo.gif" height="500" />

## Installation

- Using **Npm**

```bash
npm install rn-popup-modal --save
```

- Using **Yarn**

```bash
yarn add rn-popup-modal
```

## Example

```jsx
import RNPopupModal from 'rn-popup-modal';

<RNPopupModal
  ref={ref => (_modal = ref)}
  title='The Pyrenees'
  windowAreaStyle={{ height: hp(70) }}>
  <Image
    source={{
      uri:
        'https://www.smartertravel.com/uploads/2012/03/stm4f4fa817459b420120301.jpg'
    }}
    style={styles.image}
    resizeMode='cover'
  />
  <Text style={styles.title}>
    Best Hidden Destination for Mountain Lovers: The Pyrenees
  </Text>

  <Text style={{ fontSize: 16 }}>
    “The Pyrenees in southern France and northern Spain [are] everything people
    crave about the Alps with a fraction of the people. [They have so much to
    offer, including] incredible high-country national parks in Gavarnie,
    Ordesa, and Aiguestortes; hearty regional cuisine; the running of the bulls
    in Pamplona—and even duty-free shopping in tiny Andorra.”
  </Text>
</RNPopupModal>;

// Call the method to show the popup modal
_modal.show();
```

## Usage

### Available props

## License

- [MIT](LICENSE)
