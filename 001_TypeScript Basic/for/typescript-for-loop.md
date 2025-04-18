
# TypeScript における for 文の使い方

TypeScript は JavaScript のスーパーセットであり、`for` 文も基本的には JavaScript と同じように使うことができます。ただし、型注釈を活用することで、より安全かつ読みやすいコードを書くことができます。

---

## 基本の for 文

```ts
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 説明：
- `let i = 0`: カウンター変数 `i` を初期化。
- `i < 5`: `i` が 5 未満の間ループを実行。
- `i++`: 各ループ後に `i` を 1 増加。

---

## 配列に対する for 文

```ts
const fruits: string[] = ['apple', 'banana', 'orange'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

- `string[]` は `fruits` が文字列の配列であることを明示しています。
- 型注釈があることで、`fruits[i]` は必ず `string` 型と分かるため、エディタの補完などが効きやすくなります。

---

## for...of 文（値に対するループ）

```ts
const numbers: number[] = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}
```

- `for...of` は「配列の要素（値）」に対してループします。
- 型注釈を `numbers` に入れておけば、`num` は自動的に `number` 型になります。

---

## for...in 文（キーに対するループ）

```ts
const person = {
  name: 'Alice',
  age: 25,
};

for (const key in person) {
  console.log(`${key}: ${person[key as keyof typeof person]}`);
}
```

- `for...in` は「オブジェクトのキー（プロパティ名）」をループします。
- TypeScript では `keyof typeof person` を使って型の安全性を保ちます。

---

## 配列の forEach を使ったループ

```ts
const colors: string[] = ['red', 'green', 'blue'];

colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});
```

- `forEach` はコールバック関数を使用して各要素にアクセスします。
- 第二引数でインデックスも取得可能。

---

## 型の明示（Type Annotation）の例

```ts
const scores: number[] = [80, 90, 100];

for (let i: number = 0; i < scores.length; i++) {
  const score: number = scores[i];
  console.log(`Score: ${score}`);
}
```

- 型を明示することで、チーム開発や大規模開発でもバグが起きにくくなります。

---

## 補足：for 文で使える制御文

- `break`：ループを途中で抜ける
- `continue`：次のループへスキップする

```ts
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  if (i % 2 === 0) continue;
  console.log(i); // 奇数のみ表示、5 以上で終了
}
```

---

TypeScript では型の恩恵を活かしながら `for` 文を活用することで、安全で読みやすいコードを書くことができます。

---

## まとめ

| 構文       | 特徴 |
|------------|------|
| `for`      | 一般的なループ。インデックス管理が必要。 |
| `for...of` | 配列などの iterable に対して要素を取り出す。 |
| `for...in` | オブジェクトのキーに対してループ。 |
| `forEach`  | 関数型スタイルで書けるが、`break` や `continue` は使えない。 |
