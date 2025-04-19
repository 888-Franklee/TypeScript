# TypeScriptのタプル（Tuple）について詳しく解説

## ✅ はじめに

TypeScriptのタプル (Tuple) は、「要素ごとに型が決まった配列」です。JavaScriptの配列 (Array) は同じ型の要素を一緒に持つのが一般的ですが、TypeScriptのタプルは、それと異なり、**各要素に異なる型を定義し、順序も明示的に決められる**という特徴があります。

たとえば、`[string, number]` というタプルは、最初に文字列、次に数値が並ぶ配列しか許容しません。

---

## ✅ 基本構文と定義

```ts
let user: [string, number] = ["Alice", 30];
```

### 特徴

- 型と順番が固定される
- インデックスアクセスや分割代入が可能

```ts
const name = user[0];  // "Alice"
const age = user[1];   // 30

const [n, a] = user;
```

---

## ✅ 関数との組み合わせ

### 関数の戻り値として使う

```ts
function getUser(): [string, number] {
  return ["Bob", 25];
}
```

このように複数の値を1つの戻り値として返すときに便利です。

### 関数引数としてタプルを受け取る

```ts
function printUser([name, age]: [string, number]) {
  console.log(`${name} is ${age} years old.`);
}
```

---

## ✅ タプルと型推論

TypeScriptでは、リテラルの配列に対して明示的に `as const` を付けると、タプルとして推論されます。

```ts
const user = ["Tom", 40] as const;
// 型は readonly ["Tom", 40]
```

これにより、完全に固定された値と順序のデータとして扱うことができます。

---

## ✅ 可変長タプル（Rest Elements）

```ts
type LogEntry = [string, ...number[]];

const log1: LogEntry = ["error", 100, 200, 300];
const log2: LogEntry = ["info"];
```

- 最初の要素は `string`
- 続く要素は任意の数の `number`

これは、ログデータなど、ある程度固定と可変が混在するデータに便利です。

---

## ✅ 読み取り専用タプル（readonly）

```ts
const coordinates: readonly [number, number] = [35.6895, 139.6917];
coordinates[0] = 0; // ❌ エラー
```

`readonly` を付けることで、誤って値を変更するのを防ぎます。

---

## ✅ 実用例とユースケース

### 1. APIレスポンス

```ts
type ApiResponse = [number, string | null];
const response: ApiResponse = [200, "OK"];
```

### 2. エラー処理

```ts
type ErrorResult = [false, Error];
type SuccessResult<T> = [true, T];
type Result<T> = ErrorResult | SuccessResult<T>;

function fetchData(): Result<string> {
  try {
    return [true, "データ取得成功"];
  } catch (e) {
    return [false, new Error("失敗")];
  }
}
```

### 3. ページネーション情報

```ts
type Pagination = [currentPage: number, totalPages: number];
const pageInfo: Pagination = [1, 5];
```

---

## ✅ タプル使用時の注意点

1. **順番が厳密に定義されている**  
   `[string, number]` と `[number, string]` は全く別物。

2. **不足・過剰な要素はエラーになる**  
   ```ts
   let data: [string, number];
   data = ["John"];         // ❌ 不足
   data = ["John", 10, 5];  // ❌ 過剰
   ```

3. **pushやpopも可能（readonlyでなければ）**  
   ```ts
   let d: [string, number] = ["one", 2];
   d.push(3); // OKだが意図しない使い方
   ```

---

## ✅ 結論

TypeScriptのタプルは、**順序と型が明確なデータ構造を安全に扱いたいときに非常に便利**です。

- 関数の引数・戻り値
- エラー処理
- 複数要素のグルーピング

などに使うことで、コードの型安全性を向上させ、バグの発生を抑えることができます。

実務でもよく使う場面があるため、ぜひ積極的に活用していきましょう！
