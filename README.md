# BeautifyJson

## Generate Library

```
nx g @nx/angular:library my-ui-lib --tags=ui --directory=libs --standalone=false
```

## Generate Component

```
nx g @nx/angular:component my-component --project=name-library --export --standalone=false
```
```
nx g @nx/angular:component my-component --project=name-library --inline-template --inline-style --flat --export --standalone=false
```

## Generate ngrx store

```
nx g @nx/angular:ngrx products --module=libs/products/src/lib/products.module.ts --directory +state/products --no-interactive --facade
```