
# TypeScript `toUpperCase()` メソッド完全ガイド

## ✅ 概要

`toUpperCase()` は、**TypeScript（およびJavaScript）** における `string` 型のメソッドで、すべての文字を **大文字（Upper Case）** に変換します。

このメソッドは新しい文字列を返し、元の文字列には影響を与えません（非破壊的な操作）。

---

## ✅ 基本構文

```ts
const upperStr = str.toUpperCase();
```

- `str`: 元の文字列
- `upperStr`: 大文字に変換された新しい文字列

---

## ✅ 単純な使用例

```ts
const word: string = "typescript";
console.log(word.toUpperCase()); // "TYPESCRIPT"
```

---

## ✅ `toUpperCase()` の仕様詳細

### 返り値

- すべての文字を大文字に変換した **新しい文字列**

### 対象

- `string` 型のみ。その他の型には使用できません。

### 非対応な型の例

```ts
const num: number = 10;
console.log(num.toUpperCase()); // エラー: Property 'toUpperCase' does not exist on type 'number'
```

---

## ✅ 型安全な実装例（Type Guard）

```ts
function printUpper(input: unknown): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    throw new Error("Input must be a string");
  }
}

console.log(printUpper("safe")); // "SAFE"
```

---

## ✅ Unicode対応について

`toUpperCase()` は Unicode 準拠で、以下のような言語でも正確に機能します。

```ts
console.log("straße".toUpperCase()); // "STRASSE"
console.log("mañana".toUpperCase()); // "MAÑANA"
```

**注意**：ロケールに依存しないため、言語特有の大文字化には対応していないことがあります（例：トルコ語の `i` → `İ` など）。

---

## ✅ 大文字化の限界と例外ケース

### トルコ語の例（i → İ）

```ts
console.log("istanbul".toUpperCase()); // "ISTANBUL"
// トルコ語的には "İSTANBUL" が正しいが、toUpperCase() はそれを考慮しない
```

ロケールに依存する大文字変換が必要な場合は、ライブラリ（例：Intl API や外部ライブラリ）を使用する必要があります。

---

## ✅ 応用例

### 1. フォーム入力の標準化

```ts
function normalizeInput(input: string): string {
  return input.trim().toUpperCase();
}

console.log(normalizeInput("  hello world  ")); // "HELLO WORLD"
```

### 2. 検索用フィルタの前処理

```ts
function filterByKeyword(items: string[], keyword: string): string[] {
  const upperKeyword = keyword.toUpperCase();
  return items.filter(item => item.toUpperCase().includes(upperKeyword));
}

const fruits = ["Apple", "Banana", "Cherry"];
console.log(filterByKeyword(fruits, "app")); // ["Apple"]
```

### 3. ユーザーIDなどの正規化

```ts
function generateUserKey(email: string): string {
  return email.trim().toUpperCase();
}
```

---

## ✅ 補足：小文字に変換したい場合

対応するメソッドは `toLowerCase()` です。

```ts
console.log("HELLO".toLowerCase()); // "hello"
```

---

## ✅ よくあるエラーとその回避方法

###  エラー例

```ts
const data: any = null;
console.log(data.toUpperCase()); // TypeError: Cannot read properties of null
```

###  回避法

```ts
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

---

## ✅ まとめ

- `toUpperCase()` は文字列を大文字に変換するシンプルだが強力なメソッド。
- Unicode 文字に対応しているが、言語ロケール特有のケースには注意。
- 型チェックを必ず行い、非文字列への適用は避ける。
- 正規化・検索・整形・表示など、さまざまな用途に活用できる。

