reproduce snapshot format error for Next.js + styled-jsx

---

### [next5 branch](https://github.com/oahehc/jest-snapshot-test/tree/next5) : next@5.1.0 + styled-jsx@2.2.6
#### css prop is string
```
<JSXStyle
  css="p.jsx-232666004{color:red;}"
  styleId="232666004"
/>,
```

---

### [next6 branch](https://github.com/oahehc/jest-snapshot-test/tree/next6)  : next@6.0.1 + styled-jsx@2.2.6
#### css prop is string
```
<JSXStyle
  css="p.jsx-232666004{color:red;}"
  styleId="232666004"
/>,
```
---

### [master branch](https://github.com/oahehc/jest-snapshot-test/tree/master) : next@7.0.1 + styled-jsx@3.1.0
#### css prop become an object
```
<JSXStyle
  css={
    String {
      "0": "p",
      "1": ".",
      "10": "3",
      "11": "5",
      "12": "5",
      "13": "0",
      "14": "1",
      "15": "3",
      "16": "{",
      "17": "c",
      "18": "o",
      "19": "l",
      "2": "j",
      "20": "o",
      "21": "r",
      "22": ":",
      "23": "r",
      "24": "e",
      "25": "d",
      "26": ";",
      "27": "}",
      "3": "s",
      "4": "x",
      "5": "-",
      "6": "2",
      "7": "5",
      "8": "8",
      "9": "7",
      "__hash": "2587355013",
    }
  }
  styleId="2587355013"
/>,
```

---

### [babel-test branch](https://github.com/oahehc/jest-snapshot-test/tree/babel-test) : next@7.0.1 + styled-jsx@3.1.0
#### reference https://github.com/zeit/styled-jsx#rendering-in-tests, apply styled-jsx/babel-test, but unable to remove style tag from snapshot
```
"children": Array [
  <style>
    String {
      "0": "p",
      "1": ".",
      "10": "3",
      "11": "5",
      "12": "5",
      "13": "0",
      "14": "1",
      "15": "3",
      "16": "{",
      "17": "c",
      "18": "o",
      "19": "l",
      "2": "j",
      "20": "o",
      "21": "r",
      "22": ":",
      "23": "r",
      "24": "e",
      "25": "d",
      "26": ";",
      "27": "}",
      "3": "s",
      "4": "x",
      "5": "-",
      "6": "2",
      "7": "5",
      "8": "8",
      "9": "7",
      "__hash": "2587355013",
    }
  </style>,
```

---