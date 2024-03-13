# Excluir archivos de prueba de la compilación en TypeScript

- Para excluir archivos de prueba de la compilación, pero aún así tenerlos marcados, cree un segundo archivo de configuración, p.e. `tsconfig.build.json` que usa la matriz de exclusión para excluir sus archivos de prueba de la compilación cuando ejecuta el comando tsc.

- Aquí está el archivo principal `tsconfig.json`.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "outDir": "./dist"
  },
  // 👇️ also include your test files in the `include` array
  // if they are outside of the `src` directory
  "include": ["src/**/*", "test/**/*"],
  "exclude": ["node_modules"]
}
```

- Y aquí está el archivo `tsconfig.build.json` que se encuentra en el mismo directorio que el archivo `tsconfig.json`.

```json
{
  "extends": "./tsconfig.json",
  // 👇️ this may vary depending on how you
  // name your test files
  "exclude": [
    // "src/**/*.spec.ts", // or
    // "src/**/*.test.ts", // or
    "test/**/*"
  ]
}
```

- Tenga en cuenta que el archivo `tsconfig.build.json` se extiende desde nuestro archivo `tsconfig.json`.

- La ruta supone que los dos archivos de configuración están ubicados en el mismo directorio.

[!] El archivo también excluye los archivos de prueba de la compilación, para que no terminen en su `outDir` (`./dist` en el ejemplo anterior).

- Ahora debe pasar el archivo de configuración `tsconfig.build.json` cuando use el comando tsc.

```shell
tsc --project tsconfig.build.json
```

- Lo más probable es que su comando de compilación esté en su archivo `package.json`, por lo que puede actualizarlo para que se vea similar a lo siguiente.

```json
{
  "scripts": {
    "build": "tsc --project tsconfig.build.json"
  }
}
```

[!] Ahora, cada vez que ejecute el comando tsc, los archivos de prueba no se compilarán y no terminarán en su directorio de compilación, pero aún así se verificarán sus tipos.

- El array de exclusión en el archivo `tsconfig.build.json` del ejemplo supone que coloca los archivos de prueba en el directorio src de su proyecto y los nombra *.spec.ts o *.test.ts o están en la carpeta ./test.

