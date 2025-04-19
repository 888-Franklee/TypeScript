# JavaScriptにおけるString()と.toString()の使い方

JavaScriptでは、値を文字列に変換する方法として主に`String()`関数と`.toString()`メソッドの2つがあります。本ドキュメントでは、それぞれの使い方や違い、注意点について詳しく説明します。

---

## 1. `String()`関数

### 概要
`String()`はグローバル関数で、どんな値でも安全に文字列へ変換できるユーティリティです。主にプリミティブ型やオブジェクト型、`null`や`undefined`も含め、すべてのデータ型に対応しています。

### 構文
```js
String(value);
```

### 使い方と例
```js
String(123);           // "123"（数値 → 文字列）
String(true);          // "true"（真偽値 → 文字列）
String(null);          // "null"（null → 文字列）
String(undefined);     // "undefined"（undefined → 文字列）
String([1, 2, 3]);     // "1,2,3"（配列 → 文字列）
String({a:1});         // "[object Object]"（オブジェクト → 文字列）
```

### 特徴
- **nullやundefinedにも対応**しており、安全に使える。
- **暗黙的な型変換の際にも内部で使われることが多い**。
- **明示的な型変換に使用される**ため、型の意図を明確に伝えられる。

---

## 2. `.toString()`メソッド

### 概要
`.toString()`は、多くのJavaScriptオブジェクトに実装されているメソッドで、自分自身の内容を文字列として表現するものです。

### 構文
```js
value.toString();
```

### 使い方と例
```js
(123).toString();           // "123"
true.toString();            // "true"
[1, 2, 3].toString();       // "1,2,3"
({a: 1}).toString();        // "[object Object]"
(new Date()).toString();   // "Sat Apr 19 2025 ..."
```

### カスタムオブジェクトでの使用
```js
const obj = {
  name: "Sample",
  toString: function() {
    return `Object: ${this.name}`;
  }
};

String(obj);       // "Object: Sample"
obj.toString();    // "Object: Sample"
```

### 注意点
- **nullとundefinedには使えない**：これが`String()`との大きな違いです。
```js
null.toString();        // ❌ TypeError
undefined.toString();   // ❌ TypeError
```
- **数値リテラルに対しては括弧が必要**：
```js
123.toString();    // ❌ エラー（文法上の問題）
(123).toString();  // ✅ "123"
```

### 利点
- `String()`よりも**パフォーマンスがわずかに高い**場合がある。
- カスタマイズ可能で、クラス設計時に意味のある文字列表現を返すことができる。

---

## 3. 内部動作と比較

### String()の内部処理（簡易的な例）
```js
function toStr(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  return value.toString();
}
```

### Object.prototype.toStringの挙動
```js
Object.prototype.toString.call(123);          // "[object Number]"
Object.prototype.toString.call("abc");       // "[object String]"
Object.prototype.toString.call(null);         // "[object Null]"
Object.prototype.toString.call(undefined);    // "[object Undefined]"
Object.prototype.toString.call([1,2,3]);      // "[object Array]"
```

この方法は、値の実際の型を判別するのに役立ちます。

---

## 4. 使い分けの指針

| 使用場面 | 推奨される方法 | 理由 |
|----------|----------------|------|
| 値がnullやundefinedの可能性がある | `String()` | 安全に文字列化できるため |
| 値が必ず存在し、パフォーマンスを重視したい | `.toString()` | オーバーヘッドが少ない |
| オブジェクトにカスタム文字列表現を与えたい | `.toString()` | メソッドをオーバーライド可能 |
| 型をはっきりさせたい | `Object.prototype.toString.call()` | 正確な型識別が可能 |

---

## 5. よくある落とし穴

### nullやundefinedの.toString()
```js
let a = null;
a.toString(); // ❌ TypeError

String(a);    // ✅ "null"
```

### 数値リテラルでの構文エラー
```js
100.toString();   // ❌ エラー
(100).toString(); // ✅ "100"
```

### オブジェクトを直接文字列にすると...
```js
const obj = {a: 1};
String(obj);      // "[object Object]"
JSON.stringify(obj); // "{"a":1}"
```

---

## 6. まとめ

- `String()` は **万能で安全な文字列変換関数**。nullやundefinedでも例外を出さない。
- `.toString()` は **柔軟性とパフォーマンスに優れたメソッド**。ただし使用時にはnull/undefinedチェックが必要。
- カスタムオブジェクトでは、`.toString()`をオーバーライドすることで意味のある出力を得られる。
- 型識別には `Object.prototype.toString.call()` が便利。


